import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MainContainer, SaveButton, Title } from "../../styles/index";
import { TextField } from "../../styles/index";
import { Form as FormStyle, Options, Option } from "./styles";
import * as enums from "../../utils/enums/task";
import { register } from "../../store/reducers/tasks";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(enums.Priority.NORMAL);

  const registerTask = (event: FormEvent) => {
    event.preventDefault();

    dispatch(
      register({
        title,
        priority,
        status: enums.Status.PENDENTE,
        description
      })
    );
    navigate("/");
  };

  return (
    <MainContainer>
      <Title>Nova tarefa</Title>
      <FormStyle onSubmit={registerTask}>
        <TextField
          required
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
          placeholder="Título"
        />
        <TextField
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                required
                value={priority}
                name="prioridade"
                type="radio"
                onChange={(event) =>
                  setPriority(event.target.value as enums.Priority)
                }
                id={priority}
              />{" "}
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </FormStyle>
    </MainContainer>
  );
};

export default Form;
