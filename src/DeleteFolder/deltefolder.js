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