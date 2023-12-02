import AddButton from "../../components/AddButton";
import Sidebar from "../../containers/Sidebar";
import TodoList from "../../containers/TodoList";

const Home = () => (
  <>
    <Sidebar showingFilters />
    <TodoList />
    <AddButton />
  </>
);

export default Home;
