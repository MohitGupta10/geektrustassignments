import { Pagination } from "@mui/material";
import "./admin.css";
import { useState, useEffect } from "react";
const Admin = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    ).then((res, resp) => {
      res.json().then((resp) => {
        setdata(resp);
      });
    });
  }, []);
  console.log(data);
  return (
    <div className="selected">
      <input
        className="inputfill"
        type="text"
        placeholder="Serach by email name role"
      />
      <div className="tableblock">
        <table border="1">
          <tr className="row">
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
          {data.map((e) => (
            <tr className="row">
              <td>
                <input type="checkbox" />
              </td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.role}</td>
              <td>Action</td>
            </tr>
          ))}
        </table>
      </div>
      <Pagination count={10} className="pag" />
    </div>
  );
};

export default Admin;
