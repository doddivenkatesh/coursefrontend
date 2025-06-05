import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  FormGroup,
  Label,
  Button,
  Input,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import makeAnimated from "react-select/animated";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Animated component for react-select
const animatedComponents = makeAnimated();

// Supported languages for title and description
const LANGUAGES = ["uz", "ru", "en"];

// Modal component to add a new course
const AddCourseModal = ({ isOpen, toggle, categories, subcategories }) => {
  // Form state variables
  const [formValues, setFormValues] = useState({
    title: {},
    description: {},
    category: "",
    subcategory: "",
  });

  // Rich-text editor state for each language
  const [editorStates, setEditorStates] = useState({
    uz: EditorState.createEmpty(),
    ru: EditorState.createEmpty(),
    en: EditorState.createEmpty(),
  });

  // Thumbnail image state
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  // Subcategories to show based on selected category
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);

  // Handle rich-text editor state change for a specific language
  const handleEditorChange = (lang, editorState) => {
    setEditorStates(prev => ({ ...prev, [lang]: editorState }));

    const htmlContent = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setFormValues(prev => ({
      ...prev,
      description: { ...prev.description, [lang]: htmlContent },
    }));
  };

  // Handle input change (titles, category, subcategory)
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update multilingual title
    if (name.startsWith("title_")) {
      const lang = name.split("_")[1];
      setFormValues(prev => ({
        ...prev,
        title: { ...prev.title, [lang]: value },
      }));
    } else {
      setFormValues(prev => ({
        ...prev,
        [name]: value,
      }));
    }

    // Filter subcategories based on selected category
    if (name === "category") {
      const filtered = subcategories.filter(
        sub => sub.category.id.toString() === value
      );
      setFilteredSubcategories(filtered);
    }
  };

  // Handle thumbnail selection
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setThumbnail(file);
      setThumbnailPreview(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file.");
    }
  };

  // Handle form submission
  const handleValidSubmit = () => {
    const formData = new FormData();
    formData.append("title", JSON.stringify(formValues.title));
    formData.append("description", JSON.stringify(formValues.description));
    formData.append("categoryId", formValues.category);
    formData.append("subcategoryId", formValues.subcategory);
    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }

    // TODO: Replace this log with actual API call to submit formData
    console.log("Submitting course:", Object.fromEntries(formData));
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>Add New Course</ModalHeader>
      <ModalBody>
        <AvForm onValidSubmit={handleValidSubmit}>
          {/* Title Fields */}
          <Row>
            {LANGUAGES.map((lang) => (
              <Col md="4" key={lang}>
                <AvField
                  name={`title_${lang}`}
                  label={`Title (${lang.toUpperCase()})`}
                  type="text"
                  value={formValues.title[lang] || ""}
                  onChange={handleInputChange}
                  required
                />
              </Col>
            ))}
          </Row>

          {/* Category and Subcategory */}
          <Row>
            <Col md="6">
              <AvField
                type="select"
                name="category"
                label="Category"
                value={formValues.category}
                onChange={handleInputChange}
                required
              >
                <option value="">-- Select Category --</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </AvField>
            </Col>
            <Col md="6">
              <AvField
                type="select"
                name="subcategory"
                label="Subcategory"
                value={formValues.subcategory}
                onChange={handleInputChange}
                required
              >
                <option value="">-- Select Subcategory --</option>
                {filteredSubcategories.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                    {sub.name}
                  </option>
                ))}
              </AvField>
            </Col>
          </Row>

          {/* Description Editors */}
          <Row>
            {LANGUAGES.map((lang) => (
              <Col md="12" key={lang}>
                <FormGroup>
                  <Label>Description ({lang.toUpperCase()})</Label>
                  <Editor
                    editorState={editorStates[lang]}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={(editorState) =>
                      handleEditorChange(lang, editorState)
                    }
                  />
                </FormGroup>
              </Col>
            ))}
          </Row>

          {/* Thumbnail Upload */}
          <Row className="align-items-center">
            <Col md="6">
              <FormGroup>
                <Label>Thumbnail Image</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              {thumbnailPreview && (
                <img
                  src={thumbnailPreview}
                  alt="Thumbnail Preview"
                  style={{ height: "100px", objectFit: "contain" }}
                />
              )}
            </Col>
          </Row>
          {/* Submit Button */}
          <Button color="primary" type="submit" block>
            Submit
          </Button>
        </AvForm>
      </ModalBody>
    </Modal>
  );
};

export default AddCourseModal;
