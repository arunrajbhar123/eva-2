import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Select,
  RadioGroup,
  Radio,FormLabel,
} from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react'

const AddProduct = ({setdatastore}) => {
  // TODO: Remove below const and instead import them from chakra
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()
  
const [first, setfirst] = React.useState('');
const onChangeHandle=(e)=>{
let {name,value}=e.target;
setfirst({
  ...first,
  [name]:value
})
}


const handledata =()=>{
  // setdataform(first)
  setdatastore(first)

}
  return (
    <>
   
     
      <Button my={4} data-cy="add-product-button" size='lg' onClick={onOpen} >Add Product</Button>
      <Modal initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
      
        <ModalBody pb={6} >
        <FormLabel>First name</FormLabel>
          <Input data-cy="add-product-title" name="title" placeholder="Title" onChange={onChangeHandle}/>
          <FormLabel>Category</FormLabel>
          <Select data-cy="add-product-category" name="category" onChange={onChangeHandle}>
            <option data-cy="add-product-category-shirt">Category</option>
            <option data-cy="add-product-category-pant" value="shirt">Shirt</option>
            <option data-cy="add-product-category-jeans" value="pant">Pant</option>
            <option data-cy="add-product-category-jeans" value="jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
          <FormLabel >Gender</FormLabel>
            <Radio data-cy="add-product-gender-male" name="gender" value="male" onChange={onChangeHandle}>Male</Radio>
            <Radio data-cy="add-product-gender-female"name="gender" value="female" onChange={onChangeHandle}>Female</Radio>
            <Radio data-cy="add-product-gender-unisex" name="gender" value="unisex" onChange={onChangeHandle}>Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" name="price" placeholder="Price"onChange={onChangeHandle} />
          <Button data-cy="add-product-submit-button"  onClick={onClose} onClick={handledata}>Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
