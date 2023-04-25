import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "src/layouts/MainLayout";
import Home from "src/pages/Home";
import EditPage from "src/pages/EditPage";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen">
        <Routes>
          <Route element={<MainLayout />}>
          <Route
              path="/"
              element={<h1>Home</h1>}
            />
            <Route
              path="/product"
              element={<Home />}
            />
            <Route
              path="/product/edit"
              element={<EditPage />}
            />
          </Route>
          <Route path="*" element={<h>Not found!</h>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
