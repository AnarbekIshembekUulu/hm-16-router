import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyOrder = () => {
  const navigate=useNavigate();
  const goBack=()=>navigate(-1);
  return (
    <>
      <div>Aboutpage</div>
      <ButtonStyleGoBack onClick={goBack}>Go Back! </ButtonStyleGoBack>
    </>
  );
};

export default MyOrder;


const ButtonStyleGoBack=styled.button`
  background-color: darkgreen;
  color: antiquewhite;
  width: 120px;
  height: 35px;
  text-transform: uppercase;
  border-radius: 10px;
  border-style: none;
  margin-left: -1000px;
  margin-top: 500px;
  :hover{
    background-color: #ff0000;
  }
`