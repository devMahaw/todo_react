import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as S from "./styles";
import * as enums from "../../utils/enums/task";
import { remove, edit } from "../../store/reducers/tasks";
import TaskClass from "../../models/Task";

type Props = TaskClass;

const Task = ({
  description: originalDescription,
  priority,
  status,
  title,
  id
}: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription);
    }
  }, [originalDescription]);

  function cancelEdit() {
    setIsEditing(false);
    setDescription(originalDescription);
  }

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    priority,
                    status,
                    title,
                    id
                  })
                );
                setIsEditing(false);
              }}
            >
              Salvar
            </S.SaveButton>
            <S.CancelButton onClick={cancelEdit}>Cancelar</S.CancelButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.RemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.RemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  );
};

export default Task;
