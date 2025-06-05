import React, { useState } from "react"
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Label,
} from "reactstrap"
import PropTypes from "prop-types"
import "../Styles/Courses.css"
import { Card, CardBody } from "reactstrap"
import { AvForm, AvField, AvGroup } from "availity-reactstrap-validation"

const EditCourseModal = ({ showEditModal, toggleModal, adminValue = {} }) => {
  const closeModal = () => {
    toggleModal()
  }
  return (
    <>
      <Modal
        isOpen={showEditModal}
        className="custom-modal-size  modal-xl  modal-dialog"
      >
        <ModalHeader>Edit Course Details</ModalHeader>
        <ModalBody>
          <Card>
            <CardBody>
              <AvForm id="admin-value-form">
                <Row>
                  <Col md="4" sm="12">
                    <div className="custom-avfield mb-3">
                      <AvField
                        name="courseTitle"
                        label={
                          <>
                             Course Title
                            <span className="asterisk">*</span>
                          </>
                        }
                        value={adminValue.courseTitle}
                        type="text"
                        required
                        className="custom-avfield"
                      />
                    </div>
                    <div className="custom-avfield mb-3">
                      <AvField
                        name="courseDescription"
                        label={
                          <>
                            Course Description
                            <span className="asterisk">*</span>
                          </>
                        }
                        value={adminValue.courseDescription}
                        type="textarea"
                        rows="5"
                        required
                        // className="custom-avfield"
                        className="custom-textarea"
                      />
                    </div>
                  </Col>

                  <Col md="4" sm="12">
                    <div className="custom-avfield mb-3">
                      <AvField
                        name="containsAssessment"
                        label={
                          <>
                            Contains Assessment? 
                            <span className="asterisk">*</span>
                          </>
                        }
                        type="select"
                        value={adminValue.containsAssessment ? "Yes" : "No"}
                        required
                        className="form-control dropdown-carrot"
                      >
                        <option>No</option>
                        <option>Yes</option>
                      </AvField>
                    </div>
                    <div className="custom-avfield mb-3">
                      <AvField
                        name="sponsor"
                        label={
                          <>
                             Sponsor
                            <span className="asterisk">*</span>
                          </>
                        }
                        type="select"
                        value={adminValue.sponsor}
                        className="form-control dropdown-carrot"
                      >
                           <option>Emirates Airline</option>
                        <option>Emirates partner</option>
                      </AvField>
                    </div>
                    <div className="custom-avfield mb-3">
                      <AvField
                        name="difficultyLevel"
                        label={
                          <>
                             Difficulty Level
                            <span className="asterisk">*</span>
                          </>
                        }
                        type="select"
                        value={adminValue.difficultyLevel}
                        className="form-control dropdown-carrot"
                      >
                           <option>Beginner</option>
                              <option>Intermediate</option>
                 
                        <option>Advaced</option>
                      </AvField>
                    </div>
                  </Col>

                  <Col md="4" sm="12">
                    <div className="custom-avfield mb-3">
                      <AvField
                        name="noOfModules"
                        label={
                          <>
                            Enter No of Modules
                            <span className="asterisk">*</span>
                          </>
                        }
                        type="number"
                        value={adminValue.noOfModules}
                        required
                      />
                    </div>
                    <div className="custom-avfield mb-3">
                      <AvField
                        name="courseDuration"
                        label={
                          <>
                            Course Duration
                            <span className="asterisk">*</span>
                          </>
                        }
                        type="text"
                          placeholder="Enter duration in minutes "
                        value={adminValue.courseDuration}
                        required
                      />
                    </div>
                    <div className="custom-avfield mb-3">
                      <AvField
                        name="sourceType"
                        label={
                          <>
                             Source Type
                            <span className="asterisk">*</span>
                          </>
                        }
                        type="select"
                        value={adminValue.sourceType}
                        className="form-control dropdown-carrot"
                      >
                           <option>Internal</option>
                        <option>External</option>
                      </AvField>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col md="4" sm="12">
                    <div className="custom-avfield mb-3">
                      <div className="mb-3">
                        <label>
                          Upload Course file
                          <span className="asterisk">*</span>
                        </label>
                        <button
                          className="courses-custom-download-button"
                          onClick={() =>
                            window.open(adminValue.courseVideoUrl, "_blank")
                          }
                          disabled={!adminValue.courseVideoUrl}
                        >
                          Course_package.zip 
                          <i className="fas fa-trash-alt me-2" />
                        </button>
                      </div>
                    </div>
                  </Col>

                  <Col md="4" sm="12">
                    <div className="custom-avfield mb-3">
                      <div className="mb-3">
                        <label>
                          Upload Assessment file
                          <span className="asterisk">*</span>
                        </label>
                        <button
                          className="courses-custom-download-button"
                          onClick={() =>
                            window.open(adminValue.courseVideoUrl, "_blank")
                          }
                          disabled={!adminValue.courseVideoUrl}
                        >
                          Assessment_sheet.xls {"   "}
                          <i className="fas fa-trash-alt me-2" />
                        </button>
                      </div>
                    </div>
                  </Col>

                  <Col md="4" sm="12">
                    <div className="custom-avfield mb-3">
                      <div className="mb-3">
                        <label>
                          Upload Course Thumbnail File
                          <span className="asterisk">*</span>
                        </label>
                        <button
                          className="courses-custom-download-button"
                          onClick={() =>
                            window.open(adminValue.courseVideoUrl, "_blank")
                          }
                          disabled={!adminValue.courseVideoUrl}
                        >
                          Course_Thumbnail.jpeg {"   "}
                          <i className="fas fa-trash-alt me-2" />
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </AvForm>
            </CardBody>
          </Card>
        </ModalBody>

        <ModalFooter>
          <Row>
            <Col>
              <div className="text-center">
                <Button color="light" onClick={closeModal}>
                  Cancel
                </Button>
                &nbsp;&nbsp;
                <Button color="primary" type="submit" form="admin-value-form">
                  Update Details
                </Button>
              </div>
            </Col>
          </Row>
        </ModalFooter>
      </Modal>
    </>
  )
}

// EditCourseModal.propTypes = {
//   showEditModal: PropTypes.bool,
//   toggleModal: PropTypes.func,
//   adminValue: PropTypes.object,
// }

export default EditCourseModal
