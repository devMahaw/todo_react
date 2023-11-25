import Sidebar from "./containers/sidebar";
import TodoList from "./containers/todo_list";
import GlobalStyle, { Container } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <TodoList />
      </Container>
    </>
  );
}

export default App;
