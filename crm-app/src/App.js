import { BrowserRouter } from "react-router-dom";
import MainRouter from "./app/routing/MainRouter";
import MainLayout from "./app/layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
