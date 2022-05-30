import React, { useEffect } from "react";
import AddProduct from "./AddProduct";
import { Flex, Grid } from "@chakra-ui/react";
import Product from "./Product";
import axios from "axios";
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

useEffect(() => {
  fetch('http://localhost:8080/products')
  .then(res => res.json())
  .then(data=> setReCollect(data))
 },[])



  return (
    <div>
        <AddProduct setdatastore={setdatastore} />
      <Flex>
      {/*  AddProduct */}
    
      <div></div>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
          <Product  reCollect={reCollect}/>
      </Grid>
      {/* Pagination */}
    </Flex>
    </div>
  );
};

export default Products;
