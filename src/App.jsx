import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "layouts/MainLayout";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen">
        <Routes>
          <Route element={<MainLayout/>}>

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
