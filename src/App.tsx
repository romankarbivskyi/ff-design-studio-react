import { Route, Routes } from "react-router";
import { HomePage, ProjectDetailsPage } from "./pages";
import { Navbar, ConnectWithUs, Footer } from "./components";

const App = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        </Routes>
      </div>
      <ConnectWithUs />
      <Footer />
    </main>
  );
};

export default App;
