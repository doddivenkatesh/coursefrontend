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
          <li>
            <a href="/category">category</a>
          </li>
          <li>
            <a href="/add">add user</a>
          </li>
          <li>
            <a href="/update/:id">update user</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/randomapi">randomapi</a>
          </li>
          <li>
            <a href="/posts">posts</a>
          </li>
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
