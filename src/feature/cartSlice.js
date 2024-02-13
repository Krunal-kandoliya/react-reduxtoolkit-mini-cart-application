import {createSlice} from '@reduxjs/toolkit'
import productdata from '../../data.js'

const initialState={
    cart:[],
    items:productdata,
    totalQuantity:0,
    totalPrice:0
}

export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addTocart:(state,action)=>{
            let find=state.cart.findIndex((i)=>i.id === action.payload.id);
            
            if(find >= 0){
                state.cart[find].quantity +=1
            }else{

                state.cart.push(action.payload)
            }
        },
        getcarttotal: (state) => {
            let totalQuantity = 0;
            let totalPrice = 0;
      
            state.cart.map((cartItem) => {
              const { price, quantity } = cartItem;
              const total = price * quantity;
              totalPrice += total;
              totalQuantity += quantity;
            });
      
            state.totalPrice = Number(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
          },
          removeitems:(state,action)=>{
            state.cart=state.cart.filter((itm)=>itm.id !== action.payload)

          },
          increseitm:(state,action)=>{
state.cart=state.cart.map((itm)=>{
    if(itm.id === action.payload){
        return {...itm,quantity:itm.quantity +1}
    }
    return itm
})
          },
          decreseitm:(state,action)=>{
state.cart=state.cart.map((itm)=>{
    if(itm.id === action.payload){
        return {...itm,quantity:itm.quantity - 1}
    }
    return itm
})
          }
    }
})

export default cartSlice.reducer
export const {addTocart,getcarttotal,removeitems,increseitm,decreseitm}=cartSlice.actions