import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Table from "../table/Table";

const UserList = () => {
  const ViewBtn = {
    background: "rgba(22, 160, 133,1.0)",
    color: "#fff",
    padding: "5px 8px",
    fontSize: "13px",
    borderRadius: "3px",
    margin: "0px 3px",
  };
  const UpdateBtn = {
    background: "rgba(155, 89, 182,1.0)",
    color: "#fff",
    padding: "5px 8px",
    fontSize: "13px",
    borderRadius: "3px",
    margin: "0px 3px",
  };
  const DeleteBtn = {
    background: "rgba(231, 76, 60,1.0)",
    color: "#fff",
    padding: "5px 8px",
    fontSize: "13px",
    borderRadius: "3px",
    margin: "0px 3px",
  };

  const [users, setUsers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:5500/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5500/users/${id}`);
    loadUser();
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Blood Group</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.dob}</td>
                <td>{user.blood}</td>
                <td>
                  <NavLink style={ViewBtn} to={`/view/${user.id}`}>
                    View
                  </NavLink>
                  <NavLink style={UpdateBtn} to={`users/update/${user.id}`}>
                    Update
                  </NavLink>
                  <NavLink
                    style={DeleteBtn}
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
