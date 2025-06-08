import "./App.css";

//import ModelView from './Components/ModelView'
//import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./LMS/user/adduser/AddUser";
import Update from "./LMS/user/updateUser/Update";
import CategoryPage from "./LMS/category/CategoryPage";

import User from "./LMS/user/getuser/User";
import RandomUser from "./reduxconcepts/RandomUser";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
    {
      path: "/category",
      element: <CategoryPage />,
    },
    {
      path: "/randomapi",
      element: <RandomUser />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={route}></RouterProvider>

      {/* <Router>
      <Routes>
          <Route path="/adduser" element={<User />} />
          <Route path="/" element={<AddUser />} />
      </Routes>
    </Router>  */}
    </div>
  );
}

export default App;
