// import React from "react";
// import "./sidebar.css";
// import { useState } from "react";
// import { Button } from "reactstrap";
// const Sidebar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   return (
//     <div>
//       {/* Sidebar */}
//       {/* <div className="sidebar bg-light p-3" style={{ width: "250px", height: "100vh" }}> */}
//       <div
//         className={`sidebar bg-light p-3 ${sidebarOpen ? "" : "d-none"}`}
//         style={{ width: "250px", height: "100vh" }}
//       >
//         <h5>Menu</h5>

//         <Button color="secondary" onClick={() => setSidebarOpen(!sidebarOpen)}>
//           {sidebarOpen ? "Hide" : "Show"} Menu
//         </Button>

//         <ul className="list-unstyled">
//           <li>
//             <a href="/dashboard">Dashboard</a>
//           </li>
//           <li>
//             <a href="/categories">Categories</a>
//           </li>
//           <li>
//             <a href="/courses">Courses</a>
//           </li>
//           <li>
//             <a href="/users">Users</a>
//           </li>
//           <li>
//             <a href="/category">Category</a>
//           </li>
//           <li>
//             <a href="/">Logout</a>
//           </li>
//           <li>
//             <a href="/add">Add User</a>
//           </li>
//           <li>
//             <a href="/getuser">Get User</a>
//           </li>
//           <li>
//             <a href="/addcategory">Add Category</a>
//           </li>
//           <li>
//             <a href="/getcategory">Get Category</a>
//           </li>
//           <li>
//             <a href="/addcourse">Add Course</a>
//           </li>
//           <li>
//             <a href="/getcourse">Get Course</a>
//           </li>
//           <li>
//             <a href="/addsubcategory">Add Subcategory</a>
//           </li>
//           <li>
//             <a href="/getsubcategory">Get Subcategory</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default Sidebar;

// MainLayout.js
import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import "./sidebar.css"; // Sidebar styles

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`sidebar bg-light p-3 ${sidebarOpen ? "" : "d-none"}`}
        style={{ width: "250px", height: "100vh" }}
      >
        
        <h5>Menu</h5>
        <ul className="list-unstyled">
          <li><a href="/category">category</a></li>
          <li><a href="/add">add user</a></li>
          <li><a href="/update/:id">update user</a></li>
          <li><a href="/">Users</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <Container fluid className="mt-3">
          <div className="mb-3">
            <Button
              color="secondary"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? "Hide" : "Show"} Menu
            </Button>
          </div>
          {children}
        </Container>
      </div>
    </div>
  );
};

export default MainLayout;
