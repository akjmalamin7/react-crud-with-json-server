import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Container } from "../styled/layout";

const HeaderSection = styled.div`
  background: rgba(109, 33, 79,1.0);
  padding: 20px 0px;
`;
const HeaderContain = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Logo = {
  fontWeight: "700",
  color: "#fff",
  cursor: "pointer",
};

const AddBtn = {
  color: " #fff",
  fontSize: "12px",
  background: "rgba(179, 55, 113,1.0)",
  padding: "10px 30px",
  borderRadius: "3px",
  cursor: "pointer",
};
const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderContain>
          <div>
            <ul>
              <li>
                <NavLink style={Logo} to="/">Crud Operation</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <NavLink style={AddBtn} to="users/add">
              Add User
            </NavLink>
          </div>
        </HeaderContain>
      </Container>
    </HeaderSection>
  );
};

export default Header;
