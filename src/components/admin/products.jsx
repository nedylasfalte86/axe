import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { productsDelete } from "../../features/productSlice";
import { productsCreate } from "../../features/productSlice";
import { plurielProducts } from "../../helpers/pluriels";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [modalIsOpen, setIsOpen] = useState(false);
  const category = useSelector((state) => state.category.items);
  const products = useSelector((state) => state.products.items);
  const marks = useSelector((state) => state.mark.items);
  const { createStatus } = useSelector((state) => state.products);

  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [mark, setMark] = useState("");
  // const products = useSelector((state) => state.products.items);
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000000';
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    document.title = "Produits"
  }, [])


  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    } else {
      setImage("");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      productsCreate({
        name,
        brand,
        price,
        desc,
        image: image,
        mark
      })
    );
    navigate('/admin/products')
    window.location.reload();

  };

  return (
    <>
      <AdminHeaders>
        <h2>{products.length > 0 ? products.length + ' ' + `produit${plurielProducts(products)}` : "Aucun produit"}</h2>
        <PrimaryButton
          onClick={() => openModal()}
        >
          Ajouter un produit
        </PrimaryButton>
      </AdminHeaders>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Ajouter un produit</h2>
        <StyledCreateProduct>
          <StyledForm onSubmit={handleSubmit}>
            <input
              id="imgUpload"
              accept="image/*"
              type="file"
              onChange={handleProductImageUpload}
              required

            />
            <select onChange={(e) => setBrand(e.target.value)} required>
              <option value="">Selectionner Catégorie</option>
              {category.map((category) => {
                return (

                  <option value={category.name}>{category.name}</option>
                )
              })}
            </select>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus={true}

            />
            <input
              type="number"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              required
              min={'1'}

            />
            <select onChange={(e) => setMark(e.target.value)} required>
              <option value="">Select Marque</option>
              {marks.map((mark) => {
                return (
                  <option value={mark.name}>{mark.name}</option>
                )
              })}
            </select>
            <textarea
              rows="10"
              cols="10"
              type="text"
              placeholder="Short Description"
              onChange={(e) => setDesc(e.target.value)}
              required
            />

            <PrimaryButton type="submit">
              {createStatus === "pending" ? "Submitting" : "Créer le prduit"}
            </PrimaryButton>
          </StyledForm>
          <ImagePreview>
            {image ? (
              <>
                <img src={image} alt="error!" />
              </>
            ) : (
              <p>Product image upload preview will appear here!</p>
            )}
          </ImagePreview>
        </StyledCreateProduct>
      </Modal>

      <Outlet />


      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Nom</th>
            <th scope="col">Description</th>
            <th scope="col">Prix</th>
            <th scope="col">Marque</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        {products?.map((product) => {
          return (
            <tbody key={product._id}>
              <tr>
                <td><Image src={product.image.url} alt={product.name} /></td>
                <td>{product.name.length > 30 ? product.name.slice(0, 30) + '...' : product.name}</td>
                <td>{product.desc.length > 50 ? product.desc.slice(0, 80) + '...' : product.desc}</td>
                <td>{product.price} €</td>
                <td>{product.mark}</td>
                <td style={{ display: 'flex', }}>
                  <button className="btn btn-primary">
                    <EditSharpIcon fontSize="small" />
                  </button>
                  &nbsp;
                  <button className="btn btn-danger"
                    onClick={() => dispatch(productsDelete(product._id), navigate('/admin/products'))
                    }
                  >
                    <DeleteForeverIcon fontSize="small" />
                  </button>
                </td>
              </tr>
            </tbody>
          )
        })}

      </table>

    </>
  );
};


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;
  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;
    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }
  select {
    color: rgb(95, 95, 95);
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);
  img {
    max-width: 100%;
  }
`
export default Products;