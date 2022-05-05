import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deletefeedback, deleteUser, getfeedback, getusers } from "../../api";
import "./admin.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Admin = () => {
  const [data, setdata] = useState([]);
  const [feedback, setfeedback] = useState([]);

  useEffect(() => {
    getuserdata();
  }, []);

  // console.log(feedback);
  // console.log(data);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getuserdata();
  };

  const deleteFeedbackData = async (id) => {
    // console.log(id);
    await deletefeedback(id);
    getuserdata();
  };


  const getuserdata = async () => {
    const response = await getusers();
    const feedbackresponse = await getfeedback();
    // console.log(response?.data);
    // console.log(feedbackresponse?.data);
    setdata(response?.data);
    setfeedback(feedbackresponse?.data);
  };
  return (
    <>
      <Container className="mt-5 mb-5">
        <Row>
          <Col className="admin-header">
            <h3>Registered User</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover variant="dark" className="mt-5">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((dataset, index) => (
                  <tr key={dataset._id + dataset.name}>
                    <td>{index + 1}</td>
                    <td>{dataset.name}</td>
                    <td>{dataset.email}</td>
                    <td>{dataset.mobile}</td>
                    <td>
                      <Button className="updateLink ms-5">
                        <Link
                          className="updateLink"
                          to={`/editadmin/${dataset._id}`}
                        >
                          Edit
                        </Link>{" "}
                      </Button>
                    </td>
                    <td>
                      <DeleteIcon
                        className="deleteLink"
                        onClick={() => {
                          confirmAlert({
                            title: "Confirm to Delete",
                            message: "Are you sure?",
                            buttons: [
                              {
                                label: "Yes",
                                onClick: () => deleteUserData(dataset._id),
                              },
                              {
                                label: "No",
                                onClick: () => {},
                              },
                            ],
                          });
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 mb-5">
        <Row>
          <Col className="admin-header">
            <h3>Feedback Data</h3>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5">
            {feedback.map((feed, index) => (
              <Card key={index} className="mt-3">
                <Card.Header className="card-header p-3">
                  <Row>
                    <Col>
                      {index + 1}){" "}
                      <span className="ms-3">Email : {feed?.email}</span>{" "}
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <div>
                        <DeleteIcon
                          className="deleteLink me-auto d-flex justify-content-end"
                          onClick={() => {
                            confirmAlert({
                              title: "Confirm to Delete",
                              message: "Are you sure?",
                              buttons: [
                                {
                                  label: "Yes",
                                  onClick: () => deleteFeedbackData(feed?._id),
                                },
                                {
                                  label: "No",
                                  onClick: () => {},
                                },
                              ],
                            });
                          }}
                        />
                      </div>
                    </Col>
                  </Row>{" "}
                </Card.Header>
                <Card.Body className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>{feed?.feedback}</p>
                  </blockquote>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
