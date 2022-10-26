import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components";

const Orders = () => {
  const navigate = useNavigate();
  const ordersData = useSelector((state) => state.order.items);

  const [orders, setOrders] = useState(ordersData)

  console.log('userId',orders.orders);


  console.log('orders', orders);
  useEffect(() => {
    document.title = "Commandes"
  }, [])


  return (
    <>
      <AdminHeaders>
        <h2>Commandes</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/products/create-product")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>


      <table className="table">
        <thead>
          <tr>
            <th scope="col">n° commande</th>
            <th scope="col">User</th>
            <th scope="col">Adresse</th>
            <th scope="col">Etat</th>
            <th scope="col">Status</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        {orders.orders.map((order) => {
          const _id = order._id
          return (
            <tbody key={order._id}>
              <tr>
                <th scope="row">{order.customerId}</th>
                <td>{order.userId['email']}</td>
                <td>{order.Shipping}</td>
                <td>{
                  order.delivery_status === "pending" ? <Pending>En attente</Pending> :
                    order.delivery_status === "dispatched" ? <Dispatched>En livraison</Dispatched> :
                      order.delivery_status === "delivered" ? <Delivered>Livrée</Delivered> : "Erreur"}</td>
                <td>
                  {order.payment_status ? <Paid>{order.payment_status}</Paid> : 'Non payé'}</td>
                <td>voir</td>
                <td style={{ display: 'flex', }}>
                  {/* <button className="btn btn-primary">
                    <EditSharpIcon fontSize="small" />
                  </button>
                  &nbsp;
                  <button className="btn btn-danger"
                    onClick={() => dispatch(categoryDelete(_id))
                    }
                    navigate={() => navigate('/admin')}
                  >
                    <DeleteForeverIcon fontSize="small" />
                  </button> */}
                </td>
              </tr>
            </tbody>
          )
        })}

      </table>
      <Outlet />
    </>
  );
}


const Paid = styled.td`
  background: green;
  padding: 0 0.5rem;
  color: white;
  border-radius: 5px;
  text-align: center;
`

const Pending = styled.td`
  background: red;
  padding: 0 0.5rem;
  color: white;
  border-radius: 5px;
  text-align: center;
`

const Dispatched = styled.td`
  background: orange;
  padding: 0 0.5rem;
  color: white;
  border-radius: 5px;
  text-align: center;
`

const Delivered = styled.td`
  background: green;
  padding: 0 0.5rem;
  color: white;
  border-radius: 5px;
  text-align: center;
`
export default Orders;