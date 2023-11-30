import { useSelector } from "react-redux";
import Task from "../../components/Task";
import { Container } from "./styles";
import { RootReducer } from "../../store";

const TodoList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks);
  const { term } = useSelector((state: RootReducer) => state.filter);

  const filterTasks = () => {
    return items.filter(
      (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
    );
  };

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{term}&ldquo;
      </p>
      <ul>
        {filterTasks().map((task) => (
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
