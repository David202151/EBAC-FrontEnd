
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import { AppContainer, AppHeader, HeaderTitle } from "./styles";

const App = () => {
  return (
   <AppContainer>
      <AppHeader>
        <HeaderTitle>Todo List App</HeaderTitle>
      </AppHeader>
      <AddTaskForm />
      <TaskList />
    </AppContainer>
  );
}

export default App;
