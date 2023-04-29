import React from "react";
import Table from "react-bootstrap/Table";
import Paginationcom from "./paginationcom";
import { Container } from "react-bootstrap";

const Patiant_list = () => {
  const PationData = [
    {
      id: 1,
      name: "ahmed",
      address: "portsaid-portfoud",
      disease: "heart attck",
      age: 45,
      phone: "0124447825",
      email: "aaa@aaa.aaa",
    },
    {
      id: 2,
      name: "ahmed",
      address: "portsaid-portfoud",
      disease: "heart attck",
      age: 45,
      phone: "0124447825",
      email: "aaa@aaa.aaa",
    },
    {
      id: 3,
      name: "ahmed",
      address: "portsaid-portfoud",
      disease: "heart attck",
      age: 45,
      phone: "0124447825",
      email: "aaa@aaa.aaa",
    },
    {
      id: 4,
      name: "ahmed",
      address: "portsaid-portfoud",
      disease: "heart attck",
      age: 45,
      phone: "0124447825",
      email: "aaa@aaa.aaa",
    },
    {
      id: 5,
      name: "ahmed",
      address: "portsaid-portfoud",
      disease: "heart attck",
      age: 45,
      phone: "0124447825",
      email: "aaa@aaa.aaa",
    },
    {
      id: 6,
      name: "ahmed",
      address: "portsaid-portfoud",
      disease: "heart attck",
      age: 45,
      phone: "0124447825",
      email: "aaa@aaa.aaa",
    },
    {
      id: 7,
      name: "ahmed",
      address: "portsaid-portfoud",
      disease: "heart attck",
      age: 45,
      phone: "0124447825",
      email: "aaa@aaa.aaa",
    },
    {
      id: 8,
      name: "ahmed",
      address: "portsaid-portfoud",
      disease: "heart attck",
      age: 45,
      phone: "0124447825",
      email: "aaa@aaa.aaa",
    },
    {
      id: 9,
      name: "ahmed",
      address: "portsaid-portfoud",
      disease: "heart attck",
      age: 45,
      phone: "0124447825",
      email: "aaa@aaa.aaa",
    },
  ];
  const dataKey = ["Name", "Address", "Disease", "Age", "Phone", "E-mail"];
  return (
    <>
      <Container className="ms-panel">
        <div className="ms-panel-header ms-panel-custome">
          <h5>PATIENT LIST</h5>
        </div>

        <div className="ms-panel-body">
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                {dataKey.map((e, index) => (
                  <th key={index}>{e}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PationData.map((e, index) => (
                <tr key={index}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.address}</td>
                  <td>{e.disease}</td>
                  <td>{e.age}</td>
                  <td>{e.phone}</td>
                  <td>{e.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div>
          <Paginationcom />
        </div>
      </Container>
    </>
  );
};

export default Patiant_list;
