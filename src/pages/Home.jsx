import React from "react";
import { Container } from "../component/styled/layout";
import UserList from "../component/userList/UserList";

const Home = () => {
  return (
    <div>
      <Container>
        <UserList/>
      </Container>
    </div>
  );
};

export default Home;
