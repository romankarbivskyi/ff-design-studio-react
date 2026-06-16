import { Route, Routes } from "react-router";
import { HomePage } from "./pages";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
};

export default App;
