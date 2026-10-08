
import AddTaskForm from "../AddTaskForm";
import { AppContainer, AppHeader, HeaderTitle } from "./styles";

const App = () => {
  return (
   <AppContainer>
      <AppHeader>
        <HeaderTitle>Todo List App</HeaderTitle>
      </AppHeader>
      <AddTaskForm />
    </AppContainer>
  );
}

export default App;
