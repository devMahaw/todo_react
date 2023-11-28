import * as S from "./styles";
import { useState } from "react";
import * as enums from "../../utils/enums/task";

type Props = {
  title: string;
  priority: enums.Priority;
  status: enums.Status;
  description: string;
};

const Task = ({ description, priority, status, title }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.SaveButton>Salvar</S.SaveButton>
            <S.CancelButton onClick={() => setIsEditing(false)}>
              Cancelar
            </S.CancelButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.RemoveButton>Remover</S.RemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  );
};

export default Task;
