import { useSelector } from "react-redux";
import Task from "../../components/Task";
import { Container } from "./styles";
import { RootReducer } from "../../store";

const TodoList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks);

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {items.map((task) => (
          <li key={task.title}>
            <Task
              id={task.id}
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
