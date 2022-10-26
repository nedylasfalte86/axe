
import React, { useState,useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux'
import { categoryDelete } from "../../features/categoriesSlice";
import Modal from 'react-modal';
import { createCategory } from "../../features/categoriesSlice";
import styled from "styled-components";
import { plurielCategory } from '../../helpers/pluriels';

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

const Categories = () => {
  const [name, setName] = useState("");
  const { createStatus } = useSelector((state) => state.products);
  const [modalIsOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch()
  let subtitle;

  const category = useSelector((state) => state.category.items);

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
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      createCategory({
        name,
      })
    );
    navigate('/admin/categories')
    window.location.reload();
  };

  useEffect(() => {
    document.title = "Catégories"
  }, [])

  return (
    <>
      <AdminHeaders>
        <h2>{category.length > 0 ? category.length + ' ' + `catégorie${plurielCategory(category)}` : "Aucune catégorie"}</h2>
        <PrimaryButton
          onClick={() => openModal()}
        >
          Ajouter une catégorie
        </PrimaryButton>
      </AdminHeaders>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Créer une catégorie</h2>
          <StyledCreateProduct>
            <StyledForm onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nom de la catégorie"
                onChange={(e) => setName(e.target.value)}
                required
                autoFocus={true}
              />

              <PrimaryButton type="submit">
                {createStatus === "pending" ? "Submitting" : " Créer la catégorie"}
              </PrimaryButton>
              <button className="btn btn-danger"  onClick={() => closeModal()}>
                {createStatus === "pending" ? "Submitting" : " Annuler"}
              </button>
            </StyledForm>
          </StyledCreateProduct>
      </Modal>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nom</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        {category.map((category) => {
          const _id = category._id
          return (
            <tbody key={category._id}>
              <tr>
                <th scope="row">{category._id}</th>
                <td>{category.name.length > 30 ? category.name.slice(0, 30) + '...' : category.name}</td>
                <td style={{ display: 'flex', }}>
                  <button className="btn btn-primary">
                    <EditSharpIcon fontSize="small" />
                  </button>
                  &nbsp;
                  <button className="btn btn-danger"
                    onClick={() => dispatch(categoryDelete(_id))
                    }
                    navigate={() => navigate('/admin')}
                  >
                    <DeleteForeverIcon fontSize="small" />
                  </button>
                </td>
              </tr>
            </tbody>
          )
        })}

      </table>

      <Outlet />
    </>
  );
};


const Image = styled.img`
  width: 50px;
  height: 50px;
`

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
export default Categories;