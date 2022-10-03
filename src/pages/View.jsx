import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../component/styled/layout";
import { TEXT } from "../component/styled/typography";

const DataViewWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
`;
const DataViewInner = styled.div`
  width: 100%;
`;
const DescWrapper = styled.div``;
const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  background: rgba(109, 33, 79, 0.2);
  border-radius: 3px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const DescList = styled.ul`
  & li {
    padding: 10px 20px;
  }
  & li:nth-child(odd) {
    background:rgba(179,55,113,.05);
  }
`;
const GoBtn = styled.button`
  border: none;
  outline: none;
  color: rgba(109, 33, 79, 0.8);
  background:transparent;
  margin-top:20px;
`;
const View = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [users, setUsers] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    dob: "",
    blood: "",
  });

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:5500/users/${id}`);
    setUsers(result.data);
  };
  return (
    <div>
      <Container>
        <DataViewWrapper>
          <DataViewInner>
            <ImageWrapper>
              <img src="" alt="" />
            </ImageWrapper>
            <DescWrapper>
              <DescList>
                <li>
                  <TEXT size="md">Id:{users.id}</TEXT>
                </li>
                <li>
                  <TEXT size="md">Name:{users.name}</TEXT>
                </li>
                <li>
                  <TEXT size="md">User Name:{users.username}</TEXT>
                </li>
                <li>
                  <TEXT size="md">Email:{users.email}</TEXT>
                </li>
                <li>
                  <TEXT size="md">Phone:{users.phone}</TEXT>
                </li>
                <li>
                  <TEXT size="md">DOB:{users.dob}</TEXT>
                </li>
                <li>
                  <TEXT size="md">Blood:{users.blood}</TEXT>
                </li>
              </DescList>
              <div>
                <GoBtn onClick={()=>{navigate("/")}}>Go Home Page</GoBtn>
              </div>
            </DescWrapper>
          </DataViewInner>
        </DataViewWrapper>
      </Container>
    </div>
  );
};

export default View;
