import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);
  return (
    <>
      {details && (
        <>
          <p>{details.name}</p>
          <Link to={`/products/${id}/details`}>Details</Link>
        </>
      )}
    </>
  );
};

export default Details;
