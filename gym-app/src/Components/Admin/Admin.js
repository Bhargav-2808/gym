import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteUser, getusers } from "../../api";
import "./admin.css";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import DeleteIcon from '@mui/icons-material/Delete';


const Admin = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
      getuserdata();
    }, []);
  
    const deleteUserData = async (id) => {
      await deleteUser(id);
      getuserdata();
    };
  
    const getuserdata = async () => {
      const response = await getusers();
      console.log(response?.data);
      setdata(response?.data);
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
    </>
  );
};

export default Admin;
