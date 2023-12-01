import { useSelector } from "react-redux";
import Task from "../../components/Task";
import { Container } from "./styles";
import { RootReducer } from "../../store";

const TodoList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks);
  const { term, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  );

  const filterTasks = () => {
    let filteredTasks = items;
    if (term !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      );

      if (criterion === "priority") {
        filteredTasks = filteredTasks.filter((item) => item.priority === value);
      } else if (criterion === "status") {
        filteredTasks = filteredTasks.filter((item) => item.status === value);
      }

      return filteredTasks;
    } else {
      return items;
    }
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
