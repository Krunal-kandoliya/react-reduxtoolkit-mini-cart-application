import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { getcarttotal } from "../feature/cartSlice";

export default function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);
  const {cart,totalQuantity}=useSelector((state)=>state.app)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getcarttotal())
  },[cart])

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <Link to="/">
          <span>all product</span>
        </Link>
        <MDBBtn color="dark">
          <Link to='/cart' >Cart({totalQuantity})
</Link>          </MDBBtn>

        {/* <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler> */}
      </MDBContainer>
    </MDBNavbar>
  );
}
