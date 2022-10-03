import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../component/input/Input";
import { Container } from "../component/styled/layout";
import { api } from "../helper/api";

const Form = styled.form`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  margin-top: 150px;
  box-shadow: 0px 0px 2px rgba(131, 52, 113, 0.5);
  padding: 40px;
`;
const FromInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;
const SubmitBtnWrapper = styled.div`
  display: grid;
  margin-top: 30px;
`;
const SubmitBtn = styled.button`
  background: rgba(181, 52, 113,1.0);
  color: #fff;
  font-size: 14px;
  padding: 10px 0px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  outline:none;
  border:none;
`;
const AddUser = () => {

  const [user, setUser] = useState({});
  const navigate = useNavigate()
  const handleOnChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await api.post({url:'users', body:user})
    navigate("/")
    setUser("")
  };

  return (
    <Fragment>
      <Container>
        <div>
          <Form onSubmit={handleSubmit}>
            <FromInner>
              <div>
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  setUsers={handleOnChange}
                  value={user.name}
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="User Name"
                  name="username"
                  setUsers={handleOnChange}
                  value={user.username}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  setUsers={handleOnChange}
                  value={user.email}
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  setUsers={handleOnChange}
                  value={user.phone}
                />
              </div>
              <div>
                <Input
                  type="date"
                  placeholder="DOB"
                  name="dob"
                  setUsers={handleOnChange}
                  value={user.dob}
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Blood Group"
                  name="blood"
                  setUsers={handleOnChange}
                  value={user.blood}
                />
              </div>
            </FromInner>
            <div>
              <SubmitBtnWrapper>
                <SubmitBtn type="submit">Submit</SubmitBtn>
              </SubmitBtnWrapper>
            </div>
          </Form>
        </div>
      </Container>
    </Fragment>
  );
};

export default AddUser;
