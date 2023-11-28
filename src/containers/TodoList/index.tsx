import Task from "../../components/Task";
import { Container } from "./styles";
import * as enums from "../../utils/enums/tasks";

const Tasks = [
  {
    title: "Estudar Typescript",
    description: "Ver a aula 3 da EBAC",
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    title: "Pagar a conta de internet",
    description: "Baixar fatura no gmail",
    priority: enums.Priority.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    title: "Ir para a academia",
    description: "Fazer treino B",
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
];

const TodoList = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {Tasks.map((tarefa) => (
        <li key={tarefa.title}>
          <Task
            description={tarefa.description}
            priority={tarefa.priority}
            title={tarefa.title}
            status={tarefa.status}
          />
        </li>
      ))}
    </ul>
  </Container>
);

export default TodoList;
