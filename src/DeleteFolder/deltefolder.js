{/*import React, { useState, useEffect } from "react";
import { Button, Container } from "reactstrap";
import axios from "axios";
import CategoryTable from "./CategoryTable";
import CategoryFormModal from "./CategoryFormModal";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedCategory(null);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`/api/categories/${id}`);
        fetchCategories();
      } catch (error) {
        console.error("Error deleting category", error);
      }
    }
  };

  return (
    <Container className="mt-5">
      <h2>Category Management</h2>
      <Button color="primary" onClick={handleAdd} className="mb-3">
        Add Category
      </Button>
      <CategoryTable data={categories} onEdit={handleEdit} onDelete={handleDelete} />
      <CategoryFormModal
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
        category={selectedCategory}
        onSave={fetchCategories}
      />
    </Container>
  );
};

export default CategoryPage;

import React from "react";
import { Table, Button } from "reactstrap";

const CategoryTable = ({ data, onEdit, onDelete }) => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Category Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data && data.length > 0 ? (
          data.map((cat, index) => (
            <tr key={cat.id}>
              <td>{index + 1}</td>
              <td>{cat.name}</td>
              <td>
                <Button
                  color="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => onEdit(cat)}
                >
                  Edit
                </Button>
                <Button
                  color="danger"
                  size="sm"
                  onClick={() => onDelete(cat.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="text-center">
              No categories found.
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default CategoryTable;
*/} // update and delte category

{/*}
import React, { useState, useEffect } from "react";
import { Button, Container } from "reactstrap";
import axios from "axios";
import CategoryTable from "./CategoryTable";
import CategoryFormModal from "./CategoryFormModal ";


const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedCategory(null);
    setModalOpen(true);
  };

  return (
    <Container className="mt-5">
      <h2>Category Management</h2>
      <Button color="primary" onClick={handleAdd} className="mb-3">
        Add Category
      </Button>
      <CategoryTable data={categories} onEdit={handleEdit} />
      <CategoryFormModal
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
        category={selectedCategory}
        onSave={fetchCategories}
      />
    </Container>
  );
};

export default CategoryPage;




// //✅ UI Features You Should Include
// 🔹 1. Category Listing Table
// ID, Name, Number of Subcategories

// Action buttons: Edit, Delete, View Subcategories

// 🔹 2. Add / Edit Category Modal
// Input: Category Name

// Button: Save / Update

// Validation: Required, max length

// 🔹 3. Search & Filter (Optional but helpful)
// Input: filter categories by name

// 🔹 4. Subcategory Expansion (Optional)
// Show subcategories when you click "View Subcategories"
*/}  // category page



{/*// CategoryPage.js
import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Input,
  Row,
  Col,
  Collapse,
  Card,
  CardBody,
} from "reactstrap";
import axios from "axios";
import CategoryFormModal from "./CategoryFormModal ";


const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  //const baseUrl = process.env.REACT_APP_API_BASE_URL || "/api";
 const baseUrl="http://localhost:8080/api";
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await axios.get(`${baseUrl}/categories`);//("/api/categories");
    setCategories(response.data);
    setFilteredCategories(response.data);
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this category?")) {
      await axios.delete(`${baseUrl}/categories/${id}`);
      fetchCategories();
    }
  };

  const handleSave = () => {
    fetchCategories();
    setModalOpen(false);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = categories.filter((cat) =>
      cat.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  const toggleSubcategories = (categoryId) => {
    setExpandedCategoryId(
      expandedCategoryId === categoryId ? null : categoryId
    );
  };

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col md="6">
          <Input
            type="text"
            placeholder="Search categories by name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Col>
        <Col md="6" className="text-end">
          <Button color="primary" onClick={() => setModalOpen(true)}>
            Add Category
          </Button>
        </Col>
      </Row>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th># Subcategories</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCategories.map((cat) => (
            <React.Fragment key={cat.id}>
              <tr>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>{cat.subcategories ? cat.subcategories.length : 0}</td>
                <td>
                  <Button
                    color="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(cat)}
                  >
                    Edit
                  </Button>
                  <Button
                    color="danger"
                    size="sm"
                    className="me-2"
                    onClick={() => handleDelete(cat.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    color="info"
                    size="sm"
                    onClick={() => toggleSubcategories(cat.id)}
                  >
                    {expandedCategoryId === cat.id ? "Hide" : "View"} Subcategories
                  </Button>
                </td>
              </tr>
              <tr>
                <td colSpan="4" className="p-0">
                  <Collapse isOpen={expandedCategoryId === cat.id}>
                    <Card className="mb-2">
                      <CardBody>
                        <strong>Subcategories:</strong>
                        <ul className="mt-2">
                          {cat.subcategories && cat.subcategories.length > 0 ? (
                            cat.subcategories.map((sub) => (
                              <li key={sub.id}>{sub.name}</li>
                            ))
                          ) : (
                            <li>No subcategories</li>
                          )}
                        </ul>
                      </CardBody>
                    </Card>
                  </Collapse>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <CategoryFormModal
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
        category={selectedCategory}
        onSave={handleSave}
      />
    </Container>
  );
};

export default CategoryPage;
*/}

{/*// CategoryPage.js
import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Input,
  Row,
  Col,
  Collapse,
  Card,
  CardBody,
} from "reactstrap";
import axios from "axios";

//import "./sidebar.css";
import CategoryFormModal from "./CategoryFormModal ";
import Sidebar from "../sidebar/Sidebar";
const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const baseUrl ="http://localhost:8080/api"; // Adjust the base URL as needed
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await axios.get(`${baseUrl}/categories`); //("/api/categories");
    setCategories(response.data);
    setFilteredCategories(response.data);
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this category?")) {
      await axios.delete(`${baseUrl}/categories/${id}`); //("/api/categories/${id}");
      fetchCategories();
    }
  };

  const handleSave = () => {
    fetchCategories();
    setModalOpen(false);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = categories.filter((cat) =>
      cat.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  const toggleSubcategories = (categoryId) => {
    setExpandedCategoryId(
      expandedCategoryId === categoryId ? null : categoryId
    );
  };

  return (
    <div className="d-flex">
      
   
         <Sidebar/>
      // {/* Main Content *}
      <div className="flex-grow-1">
        <Container className="mt-4">
          <Row className="mb-3">
            <Col md="6">
              <Input
                type="text"
                placeholder="Search categories by name"
                value={searchTerm}
                onChange={handleSearch}
              />
            </Col>
            <Col md="6" className="text-end">
              <Button color="primary" onClick={() => setModalOpen(true)}>
                Add Category
              </Button>
            </Col>
          </Row>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th># Subcategories</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map((cat) => (
                <React.Fragment key={cat.id}>
                  <tr>
                    <td>{cat.id}</td>
                    <td>{cat.name}</td>
                    <td>{cat.subcategories ? cat.subcategories.length : 0}</td>
                    <td>
                      <Button
                        color="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(cat)}
                      >
                        Edit
                      </Button>
                      <Button
                        color="danger"
                        size="sm"
                        className="me-2"
                        onClick={() => handleDelete(cat.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        onClick={() => toggleSubcategories(cat.id)}
                      >
                        {expandedCategoryId === cat.id ? "Hide" : "View"} Subcategories
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4" className="p-0">
                      <Collapse isOpen={expandedCategoryId === cat.id}>
                        <Card className="mb-2">
                          <CardBody>
                            <strong>Subcategories:</strong>
                            <ul className="mt-2">
                              {cat.subcategories && cat.subcategories.length > 0 ? (
                                cat.subcategories.map((sub) => (
                                  <li key={sub.id}>{sub.name}</li>
                                ))
                              ) : (
                                <li>No subcategories</li>
                              )}
                            </ul>
                          </CardBody>
                        </Card>
                      </Collapse>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>

          <CategoryFormModal
            isOpen={modalOpen}
            toggle={() => setModalOpen(!modalOpen)}
            category={selectedCategory}
            onSave={handleSave}
          />
        </Container>
      </div>
    </div>
  );
};

export default CategoryPage;

*/}