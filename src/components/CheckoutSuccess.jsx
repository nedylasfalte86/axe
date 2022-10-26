import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import {  clearCart, getTotals} from '../features/cartSlice';

const CheckoutSuccess = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(clearCart());
      }, [dispatch]);
    
      useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch]);

    return (<h2>Paiement accepté</h2>);
}

export default CheckoutSuccess;