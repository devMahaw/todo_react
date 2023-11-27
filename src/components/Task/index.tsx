import * as S from "./styles";
import { useState } from "react";

type Props = {
  title: string;
  priority: string;
  status: string;
  description: string;
};

const Task = ({ description, priority, status, title }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag priority={priority}>{priority}</S.Tag>
      <S.Tag status={status}>{status}</S.Tag>
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
