import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      {products.map((elem) => (
        <DivStyle>
          <>
            <Pstyle>{elem.name}</Pstyle>
            <Link key={elem.id} to={`/products/${elem.id}`}>
              <ButtonStyle>details</ButtonStyle>
            </Link>
          </>
        </DivStyle>
      ))}
      <ButtonStyle onClick={goBack}>Go Back!</ButtonStyle>
    </>
  );
};

export default Products;

const Pstyle = styled.p`
  border-radius: 9px;
  color: antiquewhite;
`;
const DivStyle = styled.div`
  width: 30%;
  height: 60px;
  background-color: blueviolet;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 35%;
  margin-top: 20px;
  border-radius: 10px;
`;

const ButtonStyle = styled.button`
  background-color: #ff4400;
  color: antiquewhite;
  border-style: none;
  width: 70px;
  height: 35px;
  border-radius: 30px;
  text-transform: uppercase;
  :hover {
    background-color: #1900ff;
  }
`;
