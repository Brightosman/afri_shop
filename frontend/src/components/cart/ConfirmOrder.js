import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import MetaData from '../layout/MetaData'
import CheckoutSteps from './CheckoutSteps'

import { useSelector } from 'react-redux'

const ConfirmOrder = () => {

    const { cartItems, shippingInfo } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    const navigate = useNavigate();

    // Calculate Order Prices
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shippingPrice = itemsPrice > 200 ? 0 : 25
    const taxPrice = Number((0.05 * itemsPrice).toFixed(2))
    const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2)

    const processToPayment = () => {
        const data = {
            itemsPrice: itemsPrice.toFixed(2),
            shippingPrice,
            taxPrice,
            totalPrice
        }

        sessionStorage.setItem('orderInfo', JSON.stringify(data))
        navigate('/payment')
    }

    return (
        <Fragment>

            <MetaData title={'Confirmer La Commande'} />

            <CheckoutSteps shipping confirmOrder />

            <div className="row d-flex justify-content-between">
                <div className="col-12 col-lg-8 mt-5 order-confirm">

                    <h4 className="mb-3">Les Détails d'|Expédition</h4>
                    <p><b>Nom et Prénom:</b> {user && user.name}</p>
                    <p><b>Numéro de Téléphone:</b> {shippingInfo.phoneNo}</p>
                    <p className="mb-4"><b>Adresse:</b> {`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`}</p>

                    <hr />
                    <h4 className="mt-4">Articles de votre panier :</h4>

                    {cartItems.map(item => (
                        <Fragment>
                            <hr />
                            <div className="cart-item my-1" key={item.product}>
                                <div className="row">
                                    <div className="col-4 col-lg-2">
                                        <img src={item.image} alt="Laptop" height="45" width="65" />
                                    </div>

                                    <div className="col-5 col-lg-6">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>


                                    <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                                        <p>{item.quantity} x €{item.price} = <b>€{(item.quantity * item.price).toFixed(2)}</b></p>
                                    </div>

                                </div>
                            </div>
                            <hr />
                        </Fragment>
                    ))}



                </div>

                <div className="col-12 col-lg-3 my-4">
                    <div id="order_summary">
                        <h4>Récapitulatif de la commande</h4>
                        <hr />
                        <p>Sous-Total:  <span className="order-summary-values">€{itemsPrice}</span></p>
                        <p>Expédition: <span className="order-summary-values">€{shippingPrice}</span></p>
                        <p>impôt:  <span className="order-summary-values">€{taxPrice}</span></p>

                        <hr />

                        <p>Total: <span className="order-summary-values">€{totalPrice}</span></p>

                        <hr />
                        <button id="checkout_btn" className="btn btn-primary btn-block" onClick={processToPayment}>Procéder au Paiement</button>
                    </div>
                </div>


            </div>

        </Fragment>
    )
}

export default ConfirmOrder