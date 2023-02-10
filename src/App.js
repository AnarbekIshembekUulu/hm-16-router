import "./App.css";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import MyOrder from "./pages/MyOrders";
import NotFoundpage from "./pages/NotFoundpage";
import MyCard from "./pages/MyCard";
import Layout from "./components/Layout";
import Details from "./components/Details";

function App() {
  return (
    <DivStyle>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="products" element={<Products />} />
          <Route path="myorder" element={<MyOrder />} />
          <Route path="mycard" element={<MyCard />} />
          <Route path="posts/:id" element={<Details />} />
          <Route path="*" element={<NotFoundpage />} />
        </Route>
      </Routes>
    </DivStyle>
  );
}

export default App;

const DivStyle = styled.div`
  text-align: center;
  color: black;
`;
