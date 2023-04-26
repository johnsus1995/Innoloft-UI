import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "src/layouts/MainLayout";
import Home from "src/pages/Home";
import EditPage from "src/pages/EditPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      
      <div className=" font-sans">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
          <Route
            path="*"
            element={<h>Not found!</h>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
