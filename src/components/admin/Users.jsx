
import React, {useEffect} from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";
import { useSelector } from "react-redux";
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styled from 'styled-components'

const Products = () => {
  const navigate = useNavigate();

  const users = useSelector((state) => state.users.items)

  console.log('users',users)

  useEffect(() => {
    document.title = "Utilisateurs"
  }, [])

  return (
    <>
      <AdminHeaders>
        <h2> {users.length} {users.length > 1 ? 'Clients' : 'Client'}</h2>
      </AdminHeaders>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Email</th>
            {/* <th scope="col">Adresse</th>
            <th scope="col">total commandes</th> */}
            <th scope="col">Options</th>

          </tr>
        </thead>
        {users?.map((user) => {
          return (
            <tbody key={user.id}>
              <tr>
                <th scope="row">{user._id}</th>
                <td>{user.firstName > 30 ? user.lastname.slice(0, 30) + '...' : user.firstName}</td>
                <td>{user.lastName > 30 ? user.firstName.slice(0, 30) + '...' : user.lastName}</td>
                <td>{user.email > 30 ? user.email.slice(0, 30) + '...' : user.email}</td>
                {/* <td>{user.address > 30 ? user.email.slice(0, 30) + '...' : user.firstName}</td>
                <td>{user.email > 30 ? user.email.slice(0, 30) + '...' : user.firstName}</td> */}

                <td style={{ display: 'flex', }}>
                  <button class="btn btn-primary">
                    <EditSharpIcon fontSize="small" />
                  </button>
                  &nbsp;
                  <button class="btn btn-danger">
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
export default Products;