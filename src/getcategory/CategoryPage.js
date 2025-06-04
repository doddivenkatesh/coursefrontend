// CategoryPage.js
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

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await axios.get("/api/categories");
    setCategories(response.data);
    setFilteredCategories(response.data);
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this category?")) {
      await axios.delete(`/api/categories/${id}`);
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
