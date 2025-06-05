import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import axios from "axios";

const CategoryFormModal = ({ isOpen, toggle, category, onSave }) => {
  const [name, setName] = useState("");
  const baseURL = "http://localhost:8080"; // Adjust this to your API base URL
  useEffect(() => {
    if (category) {
      setName(category.name);
    } else {
      setName("");
    }
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      if (category) {
        await axios.put(`${baseURL}/api/categories/${category.id}`, { name });
      } else {
        await axios.post(`${baseURL}/api/categories`, { name });
      }
      toggle();
      onSave();
    } catch (error) {
      console.error("Error saving category", error);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {category ? "Edit Category" : "Add Category"}
      </ModalHeader>
      <Form onSubmit={handleSubmit}>
        <ModalBody>
          <FormGroup>
            <Label for="name">Category Name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter category name"
              required
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default CategoryFormModal;
