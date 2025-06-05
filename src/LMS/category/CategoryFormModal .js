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
  //const baseUrl = process.env.REACT_APP_API_BASE_URL || "/api";
   const baseUrl = "http://localhost:8080/api";
  useEffect(() => {
    if (category) {
      setName(category.name);
    } else {
      setName("");
    }
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const name = "   ";
    if (!name.trim()) return;
    // This line will run because name.trim() === "" → falsy → !"" === true

    try {
      if (category) {
        await axios.put(`${baseUrl}/categories/${category.id}`, { name });
      } else {
        await axios.post(`${baseUrl}/categories`, {name});
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
