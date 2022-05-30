import React from "react";
import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag,
  TagLabel,
  Grid,
} from "@chakra-ui/react";
const Product = ({ reCollect }) => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <Stack data-cy="product" >
      {reCollect.map(({id,title,category,gender,imageSrc,price,newdata}) => (
        <div key={id} >
          <h1>{console.log(newdata)}</h1>
          <Image
            data-cy="product-image"
            src={imageSrc}
          />
          <Text data-cy="product-category">{category}</Text>
          <Tag>
            <TagLabel data-cy="product-gender">{gender}</TagLabel>
          </Tag>
          <Heading data-cy="product-title">{title}</Heading>
          <Box data-cy="product-price">{price}</Box>
        </div>
      ))}
    </Stack>
  );
};

export default Product;

// https://picsum.photos/seed/picsum2/421/261
