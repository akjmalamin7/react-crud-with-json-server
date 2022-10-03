import React, { Fragment } from "react";
import { INPUT } from "../styled/input";

const Input = ({ type, value, placeholder, name, setUsers }) => {
  return (
    <Fragment>
      <INPUT
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={setUsers}
      />
    </Fragment>
  );
};

export default Input;
Input.defaultProps = {
  type: "text",
  value: "",
  placeholder: "Type...",
  name: "name",
  setUsers: (e) => {
    console.log("setValue not Found");
  },
};
