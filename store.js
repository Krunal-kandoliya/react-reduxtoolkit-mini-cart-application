import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './src/feature/cartSlice'

export const store=configureStore({
    reducer:{
        app:cartSlice
    },
})