import React from "react";
import Table from "react-bootstrap/Table";
import Paginationcom from "./paginationcom";
import { Card } from "react-bootstrap";

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
      <div
        className="w-100 py-5"
        style={{
          backgroundColor: "#f1f5fc",
          padding: "15px",
        }}
      >
        <Card className="w-100" style={{ overflowX: "auto" }}>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{
              borderBottom: "1px solid rgba(0, 0, 0, .1)",
            }}
          >
            <h5 className="p-3">PATIENT LIST</h5>
          </div>

          <div className="ms-panel-body">
            <Table
              className="table-padding"
              striped
              style={{ borderRadius: "50px" }}
              responsive
            >
              <thead style={{ backgroundColor: "#009efb" }}>
                <tr style={{ position: "relative" }}>
                  <th style={{ fontWeight: "500", color: "#fff" }}>ID</th>
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
        </Card>
      </div>
    </>
  );
};

export default Patiant_list;
