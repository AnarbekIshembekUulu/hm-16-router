import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <MainHeaderStyle>
        <LogoStyle>LOGO</LogoStyle>
        <Link>
          <LinkStyle>
            <Link style={{ color: "white", fontSize: "1.5rem" }} to="/products">
              Products
            </Link>
            <Link style={{ color: "white", fontSize: "1.5rem" }} to="/mycard">
              My Card
            </Link>
            <Link style={{ color: "white", fontSize: "1.5rem" }} to="myorder">
              My Order
            </Link>
          </LinkStyle>
        </Link>
      </MainHeaderStyle>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;

const MainHeaderStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 80px;
  background-color: #0d6cdf;
  padding-top: 10px;
  gap: 30px;
  padding-bottom: 10px;
`;

const Main = styled.main`
  margin-top: 40px;
`;

const LinkStyle = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
`;

const LogoStyle = styled.h1`
  color: antiquewhite;
`;
