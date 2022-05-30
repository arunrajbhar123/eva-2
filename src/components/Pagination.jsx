import React from "react";
import { Button, ButtonGroup ,Select,} from "@chakra-ui/react";

const Pagination = ({pageFind,handlelimit}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;
const [count, setcount] = React.useState(1);
console.log(count);
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" size='lg' onClick={()=>pageFind(1)}>First</Button>
      <Button data-cy="pagination-previous-button" size='lg' onClick={()=>setcount(count+1)}>Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={handlelimit}>
        <option data-cy="pagination-limit-3" value="3">3</option>
        <option data-cy="pagination-limit-6" value="6">6</option>
        <option data-cy="pagination-limit-9"value="9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" size='lg' onClick={()=>pageFind(1)}>Next</Button>
      <Button data-cy="pagination-last-button" size='lg' onClick={()=>pageFind(1)}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
