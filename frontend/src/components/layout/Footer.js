import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';

import '../../App.css';

const Footer = () => {
    return (
        <Fragment>
        
         <MDBFooter className='text-center' color='white' style={{ backgroundColor: 'rgba(118, 185, 69, 1)' }}>
      <MDBContainer className='p-4'>
         <nav className="row" style={{ backgroundColor: 'rgba(118, 185, 69, 1)' }}>
          <div className="col-12 col-md-3">
                <div className="navbar-brand">
                    <Link to="/">
                        <img src="/images/shopit_logo.png" alt=""/>
                    </Link>
                </div>
        </div>

        <section className='mb-4'>
          <p>
            Venez nous rendre visite dans notre magasin au 17 Rue Joliot Curie à Évreux Normandie
          </p>
        </section>
         </nav>
        

        
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright :-
        <a className='text-white' href='https://brightileh.com/'>
          Bright ILEH
        </a>
      </div>
    </MDBFooter>
            {/* <footer className="py-1">
                <p className="text-center mt-1">
                    AfroShop -  All Rights Reserved
                </p>
            </footer> */}
        </Fragment>
    )
}

export default Footer