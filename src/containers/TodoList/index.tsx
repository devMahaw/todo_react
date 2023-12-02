import { useSelector } from "react-redux";
import Task from "../../components/Task";
import { MainContainer, Title } from "../../styles/index";
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

  const displayFilterResult = (quantity: number) => {
    let message = "";
    const complementation =
      term !== undefined && term.length > 0 ? `e "${term}"` : "";
    if (criterion === "all") {
      message = `${quantity} tarefa(s) encontrada(s) como: todas ${complementation}`;
    } else {
      message = `${quantity} tarefa(s) encontrada(s) como: "${`${criterion} = ${value}`}" ${complementation}`;
    }

    return message;
  };

  const tasks = filterTasks();
  const message = displayFilterResult(tasks.length);

  return (
    <MainContainer>
      <Title as="p">{message}</Title>
      <ul>
        {tasks.map((task) => (
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
    </MainContainer>
  );
};

export default TodoList;
