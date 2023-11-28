import { useSelector } from "react-redux";
import Task from "../../components/Task";
import { Container } from "./styles";
import { RootReducer } from "../../store";

const TodoList = () => {
  const { tasks } = useSelector((state: RootReducer) => state);

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tasks.map((task) => (
          <li key={task.title}>
            <Task
              description={task.description}
              priority={task.priority}
              title={task.title}
              status={task.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
