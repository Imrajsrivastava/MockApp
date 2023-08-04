// import React from 'react'
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     Button,
//     FormControl,
//     useDisclosure,
//     FormLabel,
//     Input,
//     Select,
//     Stat,
//   } from "@chakra-ui/react";

// const Edit = () => {
//     const [formdata, setFormdata] = useState({
//         img: "",
//         name: "",
//         Description: "",
//         Gender: "",
//         Category: "",
//         Price: "",
//       });
//   return (
//     <div>
//          <>
//         <Button onClick={onOpen}>Add Product</Button>

//         <Modal
//           initialFocusRef={initialRef}
//           finalFocusRef={finalRef}
//           isOpen={isOpen}
//           onClose={onClose}
//         >
//           <ModalOverlay />
//           <form
//             onSubmit={(e) => {
//               dispatch(handleForm(e, formdata));
//             }}
//           >
//             <ModalContent>
//               <ModalHeader>add product details</ModalHeader>
//               <ModalCloseButton />
//               <ModalBody pb={6}>
//                 <FormControl>
//                   <FormLabel>Product Image</FormLabel>
//                   <Input
//                     ref={initialRef}
//                     placeholder="First name"
//                     value={formdata.img}
//                     onChange={(e) => {
//                       setFormdata({ ...formdata, img: e.target.value });
//                     }}
//                   />
//                 </FormControl>

//                 <FormControl mt={4}>
//                   <FormLabel>Product Name</FormLabel>
//                   <Input
//                     placeholder="Last name"
//                     value={formdata.name}
//                     onChange={(e) => {
//                       setFormdata({ ...formdata, name: e.target.value });
//                     }}
//                   />
//                 </FormControl>
//                 <FormControl mt={4}>
//                   <FormLabel>Product Description</FormLabel>
//                   <Input
//                     placeholder="Last name"
//                     value={formdata.Description}
//                     onChange={(e) => {
//                       setFormdata({ ...formdata, Description: e.target.value });
//                     }}
//                   />
//                 </FormControl>
//                 {/* //gender */}

//                 <Select
//                   placeholder="Select Gender"
//                   value={formdata.Gender}
//                   onChange={(e) => {
//                     setFormdata({ ...formdata, Gender: e.target.value });
//                   }}
//                 >
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </Select>

//                 <Select
//                   placeholder="Select Category"
//                   value={formdata.Category}
//                   onChange={(e) => {
//                     setFormdata({ ...formdata, Category: e.target.value });
//                   }}
//                 >
//                   {formdata.Gender == "Male" ? (
//                     <>
//                       <option value="Shirts">Shirts</option>
//                       <option value="Jeans">Jeans</option>
//                       <option value="Trousers">Trousers</option>
//                       <option value="Suits">Suits</option>
//                     </>
//                   ) : (
//                     <>
//                       <option value="Saree">Saree</option>
//                       <option value="Kurti">Kurti</option>
//                       <option value="Lehenga">Lehenga</option>
//                       <option value="Jackets">Jackets</option>
//                     </>
//                   )}
//                 </Select>

//                 <FormControl mt={4}>
//                   <FormLabel>PRICE</FormLabel>
//                   <Input
//                     placeholder="Last name"
//                     value={formdata.Price}
//                     onChange={(e) => {
//                       setFormdata({ ...formdata, Price: +e.target.value });
//                     }}
//                   />
//                 </FormControl>
//               </ModalBody>

//               <ModalFooter>
//                 <Button colorScheme="blue" mr={3} type="submit">
//                 Edit
//                 </Button>
//               </ModalFooter>
//             </ModalContent>
//           </form>
//         </Modal>
//       </>
      
//     </div>
//   )
// }

// export default Edit
