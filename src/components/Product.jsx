import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBContainer, MDBRow, MDBCol
  } from 'mdb-react-ui-kit';
  import {useSelector,useDispatch} from 'react-redux'
import { addTocart } from '../feature/cartSlice';


const Product = () => {
    const items=useSelector((state)=>state.app.items)
  
    
  const dispatch=useDispatch()
  return (
    <div className='m-2' >
        <MDBContainer>

       <MDBRow className='mb-3'>

  {   
  items.map((itm)=>(
<MDBCol key={itm.id} size='md'>
    <MDBCard>
      <MDBCardImage src={itm.img} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{itm.title}</MDBCardTitle>
        <MDBCardText>
            {itm.price}
        </MDBCardText>
        <MDBBtn onClick={()=>dispatch(addTocart(itm))}>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
  ))
  }
    </MDBRow>
    </MDBContainer>
    </div>
  )
}

export default Product
