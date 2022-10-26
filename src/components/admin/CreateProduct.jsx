// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { PrimaryButton } from "./CommonStyled";
// import { productsCreate } from "../../features/productSlice";

// export const CreateProduct = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { createStatus } = useSelector((state) => state.products);
//   const category = useSelector((state) => state.category.items);
//   const products = useSelector((state) => state.products.items);
//   const marks = useSelector((state) => state.mark.items);

//   const [image, setImage] = useState("");
//   const [brand, setBrand] = useState("");
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [desc, setDesc] = useState("");
//   const [mark, setMark] = useState("");
//   const [productData, setProductData] = useState(products)

//   console.log('productData', productData);





//   return (
//     <StyledCreateProduct>
//       <StyledForm onSubmit={handleSubmit}>
//         <h3>Create a Product</h3>
//         <input
//           id="imgUpload"
//           accept="image/*"
//           type="file"
//           onChange={handleProductImageUpload}
//           required
//         />
//         <select onChange={(e) => setBrand(e.target.value)} required>
//           <option value="">Selectionner Catégorie</option>
//           {category.map((category) => {
//             return (

//               <option value={category.name}>{category.name}</option>
//             )
//           })}
//         </select>
//         <input
//           type="text"
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//         <select onChange={(e) => setMark(e.target.value)} required>
//           <option value="">Select Marque</option>
//           {marks.map((mark) => {
//             return (
//               <option value={mark.name}>{mark.name}</option>
//             )
//           })}
//         </select>
//         <input
//           type="text"
//           placeholder="Short Description"
//           onChange={(e) => setDesc(e.target.value)}
//           required
//         />

//         <PrimaryButton type="submit">
//           {createStatus === "pending" ? "Submitting" : "Créer le prduit"}
//         </PrimaryButton>
//       </StyledForm>
//       <ImagePreview>
//         {image ? (
//           <>
//             <img src={image} alt="error!" />
//           </>
//         ) : (
//           <p>Product image upload preview will appear here!</p>
//         )}
//       </ImagePreview>
//     </StyledCreateProduct>
//   );
// };


// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   max-width: 300px;
//   margin-top: 2rem;
//   select,
//   input {
//     padding: 7px;
//     min-height: 30px;
//     outline: none;
//     border-radius: 5px;
//     border: 1px solid rgb(182, 182, 182);
//     margin: 0.3rem 0;
//     &:focus {
//       border: 2px solid rgb(0, 208, 255);
//     }
//   }
//   select {
//     color: rgb(95, 95, 95);
//   }
// `;

// const StyledCreateProduct = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const ImagePreview = styled.div`
//   margin: 2rem 0 2rem 2rem;
//   padding: 2rem;
//   border: 1px solid rgb(183, 183, 183);
//   max-width: 300px;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem;
//   color: rgb(78, 78, 78);
//   img {
//     max-width: 100%;
//   }
// `;