import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";

const HeaderAdmin = () => {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);

  return (
    
    <MDBNavbar expand="lg"  style={{ backgroundColor: '#0097A7' }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href="#"  className="text-white">Mediashop</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavColorSecond(!showNavColorSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
          <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
            <MDBNavbarItem className="active">
              <MDBNavbarLink aria-current="page" href="#"  className="text-white">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#"  className="text-white">Pricing</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#"  className="text-white">About</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
        <form className='d-flex input-group w-auto'>
          
          <input type='search' className='form-control' placeholder='Search ...' aria-label='Search' />
          <button className='btn btn-outline-white' type='button'>
          <i class="fas fa-search"></i>
          </button>
        </form>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default HeaderAdmin;
