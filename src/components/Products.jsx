import React, { useEffect } from "react";
import AddProduct from "./AddProduct";
import { Flex, Grid } from "@chakra-ui/react";
import Product from "./Product";
import axios from "axios";
import Pagination from "./Pagination"
const Products = () => {
  // TODO: Remove below const and instead import them from chakra

  // const [dataform, setdataform] = React.useState();

  const setdatastore = (newdata) => {
    fetch("http://localhost:8080/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        newdata,
      }),
    });
  };
const [reCollect, setReCollect] = React.useState([]);
// /posts?_page=7&_limit=20

const [page, setPage] = React.useState(1);
const [limit, setLimit] = React.useState(3);

const pageFind=(newpage)=>{
  setPage(newpage)
}
const handlelimit=(e)=>{
let {value}=e.target;
setLimit(value)
}
useEffect(() => {
  fetch(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
  .then(res => res.json())
  .then(data=> setReCollect(data))
 },[page,limit])



  return (
    <div style={{"textAlign":"center"}}>
      
        <AddProduct setdatastore={setdatastore} />
       
      <Flex>
      {/*  AddProduct */}
    
      <div></div>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
          <Product  reCollect={reCollect}/>
      </Grid>
      {/* Pagination */}
    
    </Flex>
    <Pagination pageFind={pageFind} handlelimit={handlelimit}/>
    </div>
  );
};

export default Products;
