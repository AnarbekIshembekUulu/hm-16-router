import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyCard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/?limit=5/")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      <div>
        <h1>Our news</h1>
        {posts.map((elem) => (
          <Link key={elem.id} to={`/posts/${elem.id}`}>
            <li>{elem.title}</li>
          </Link>
        ))}
      </div>
      <ButtonStyleGoBack onClick={goBack}>Go Back!</ButtonStyleGoBack>
    </>
  );
};

export default MyCard;

const ButtonStyleGoBack = styled.button`
  background-color: darkgreen;
  color: antiquewhite;
  width: 120px;
  height: 35px;
  text-transform: uppercase;
  border-radius: 10px;
  border-style: none;
  margin-left: -1000px;
  margin-top: -10000px;
  :hover {
    background-color: #ff0000;
  }
`;
