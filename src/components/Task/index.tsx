import { useDispatch } from "react-redux";
import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./styles";
import { SaveButton, Button } from "../../styles";
import { remove, edit, changeStatus } from "../../store/reducers/tasks";
import TaskClass from "../../models/Task";
import * as enums from "../../utils/enums/task";

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

  function changeTaskStatus(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeStatus({
        id,
        finished: event.target.checked
      })
    );
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          onChange={changeTaskStatus}
          checked={status === enums.Status.CONCLUIDA}
          type="checkbox"
          id={title}
        />
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
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
            <SaveButton
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
            </SaveButton>
            <S.CancelRemoveButton onClick={cancelEdit}>
              Cancelar
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <S.CancelRemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.CancelRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  );
};

export default Task;
