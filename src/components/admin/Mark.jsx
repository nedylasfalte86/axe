import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal';
import { createMark, marksDelete, markEdit } from "../../features/markSlice";
import styled from "styled-components";
import { plurielMark } from '../../helpers/pluriels';


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

const Mark = ({route}) => {
  const [name, setName] = useState("");
  const { createStatus } = useSelector((state) => state.products);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenEdit, setIsOpenEdit] = useState(false);
  const [edit, setEdit] = useState(false)
  const mark = useSelector((state) => state.mark.items);
  const params = useParams()

  const navigate = useNavigate();
  const dispatch = useDispatch()
  let subtitle;
  const marks = useSelector((state) => state.mark.items);
  console.log('marks', route);



  function openModal() {
    setIsOpen(true);
    setIsOpenEdit(false);
    setEdit(false)
  }

  const openEditModal = () => {
    setIsOpenEdit(true);
    setEdit(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000000';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function closeModalEdit() {
    setIsOpenEdit(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      createMark({
        name,
      })
    );
    navigate('/admin/marks')
    window.location.reload()
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    dispatch(markEdit(mark._id));
    navigate('/admin/marks')
    window.location.reload()
  }


  useEffect(() => {
    document.title = "Marque"
  }, [])

  return (
    <>
      <AdminHeaders>
        <h2>{marks.length > 0 ? marks.length + ' ' + `marque${plurielMark(marks)}` : "Aucun marque"}</h2>
        <PrimaryButton
          onClick={() => openModal()}
        >
          Ajouter une marque
        </PrimaryButton>
      </AdminHeaders>

      {edit ? <Modal
        isOpen={modalIsOpenEdit}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModalEdit}
        style={customStyles}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Modifier une marque</h2>

        <StyledCreateProduct key={mark._id}>
          <StyledForm onSubmit={handleEdit}>
            <input
              type="text"
              placeholder="Nom de la marque"
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus={true}
              value={marks.name}
            />
            <PrimaryButton type="submit">
              {createStatus === "pending" ? "Submitting" : " Modifier la marque"}
            </PrimaryButton>
            <button className="btn btn-danger" onClick={() => closeModalEdit()}>
              {createStatus === "pending" ? "Submitting" : " Annuler"}
            </button>
          </StyledForm>

        </StyledCreateProduct>

      </Modal>

        :

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Ajouter une marque</h2>
          <StyledCreateProduct>
            <StyledForm onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nom de la marque"
                onChange={(e) => setName(e.target.value)}
                required
                autoFocus={true}
              />

              <PrimaryButton type="submit">
                {createStatus === "pending" ? "Submitting" : " Ajouter la marque"}
              </PrimaryButton>
              <button className="btn btn-danger" onClick={() => closeModal()}>
                {createStatus === "pending" ? "Submitting" : " Annuler"}
              </button>
            </StyledForm>
          </StyledCreateProduct>
        </Modal>}


      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nom</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        {marks.map((mark) => {
          const _id = mark._id
          return (
            <tbody key={mark._id}>
              <tr>
                <th scope="row">{mark._id}</th>
                <td>{mark.name}</td>
                <td style={{ display: 'flex', }}>
                  <button className="btn btn-primary"
                    onClick={openEditModal}
                  >
                    <EditSharpIcon fontSize="small" />
                  </button>
                  &nbsp;
                  <button className="btn btn-danger"
                    onClick={() => dispatch(marksDelete(mark._id))}
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
export default Mark;