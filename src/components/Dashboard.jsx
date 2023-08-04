import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  useDisclosure,
  FormLabel,
  Input,
  Select,
  Stat,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
 
  getData,
  handleForm,
  handleDelete,
} from "./redux/Action";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Stats from "./Stats";
import Edit from "./Edit";

const Dashboard = () => {
    const [reder,setRender] =useState("das")
    
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    img: "",
    name: "",
    Description: "",
    Gender: "",
    Category: "",
    Price: "",
  });
  const [filtertype,setFiltertype] = useState("All");
  const [sortdata,setSortdata] = useState("asc");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const products = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(getData());
  }, []);

  //edit..
  const handleEdit = () => {
    onOpen();
  };

  const handleFilter = (type)=>{
    setFiltertype(type)

  }

  const handleSort = (sort)=>{
    setSortdata(sort)

  }

  const filterdata = filtertype == "All" ? products : products.filter((el)=>el.Gender ==filtertype);

  const renderDATA = sortdata == "asc" ? filterdata.sort((a,b)=>a.Price-b.Price):filterdata.sort((a,b)=>b.Price-a.Price) 

  return (
    <>
    <Button onClick={()=>setRender("das")}>Dashboard</Button>
    <Button onClick={()=>setRender("stats")}>Stats</Button>

   {reder =="das" && 
    <div>

       


      <Select placeholder="filter by Gender" onChange={(e)=>{handleFilter(e.target.value)}}>
      <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Select>
      <Select placeholder="Sort by price" onChange={(e)=>{handleSort(e.target.value)}}>
    
        <option value="asc">Ascending</option>
        <option value="dsce">Decending</option>
      </Select>

      {/* //modal code .. */}

      <>
        <Button onClick={onOpen}>Add Product</Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <form
            onSubmit={(e) => {
              dispatch(handleForm(e, formdata));
            }}
          >
            <ModalContent>
              <ModalHeader>add product details</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Product Image</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="First name"
                    value={formdata.img}
                    onChange={(e) => {
                      setFormdata({ ...formdata, img: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Product Name</FormLabel>
                  <Input
                    placeholder="Last name"
                    value={formdata.name}
                    onChange={(e) => {
                      setFormdata({ ...formdata, name: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Product Description</FormLabel>
                  <Input
                    placeholder="Last name"
                    value={formdata.Description}
                    onChange={(e) => {
                      setFormdata({ ...formdata, Description: e.target.value });
                    }}
                  />
                </FormControl>
                {/* //gender */}

                <Select
                  placeholder="Select Gender"
                  value={formdata.Gender}
                  onChange={(e) => {
                    setFormdata({ ...formdata, Gender: e.target.value });
                  }}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>

                <Select
                  placeholder="Select Category"
                  value={formdata.Category}
                  onChange={(e) => {
                    setFormdata({ ...formdata, Category: e.target.value });
                  }}
                >
                  {formdata.Gender == "Male" ? (
                    <>
                      <option value="Shirts">Shirts</option>
                      <option value="Jeans">Jeans</option>
                      <option value="Trousers">Trousers</option>
                      <option value="Suits">Suits</option>
                    </>
                  ) : (
                    <>
                      <option value="Saree">Saree</option>
                      <option value="Kurti">Kurti</option>
                      <option value="Lehenga">Lehenga</option>
                      <option value="Jackets">Jackets</option>
                    </>
                  )}
                </Select>

                <FormControl mt={4}>
                  <FormLabel>PRICE</FormLabel>
                  <Input
                    placeholder="Last name"
                    value={formdata.Price}
                    onChange={(e) => {
                      setFormdata({ ...formdata, Price: +e.target.value });
                    }}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} type="submit">
                  Add Product Button
                </Button>
              </ModalFooter>
            </ModalContent>
          </form>
        </Modal>
      </>

      {/* show data  */}

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th>Description</Th>
              <Th>Gender</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {renderDATA.map((el, i) => {
              return (
                <>
                  <Tr>
                    <Td>
                      <img src={`${el.img}`} alt="images" />
                    </Td>
                    <Td>{el.name}</Td>
                    <Td>{el.Category}</Td>
                    <Td>{el.Description}</Td>
                    <Td>{el.Gender}</Td>
                    <Td>{el.Price}</Td>
                    <Td>
                      <Button onClick={() => dispatch(handleDelete(el.id))}>
                        Delete
                      </Button>
                    </Td>
                    <Td>
                      <Button onClick={() => handleEdit()}>Edit</Button>
                    </Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
   }

   {reder =="stats" && <Stats/>}

    </>
  );
};

export default Dashboard;
