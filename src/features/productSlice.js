import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";


const initialState = {
    data: [],
    status: StatusCode.IDLE,
    search: '',
    filter: []
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSearch(state, action) {
            const products = JSON.parse(JSON.stringify(state.data));
            const newData = products.filter((product) => {
                return product.title.toLowerCase().match(action.payload.toLowerCase());
            });
            state.filter = newData;
            state.search = action.payload
        },
        deleteProduct(state, action) {
            const products = JSON.parse(JSON.stringify(state.data));

            const newData = products.filter((product) => product.id !== action.payload);
            state.filter = newData;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.status = StatusCode.LOADING
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.filter = action.payload;
            state.status = StatusCode.IDLE;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.status = StatusCode.ERROR
        });
    }
})

export const {setSearch, deleteProduct} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json();

    return result;
})

// export function getProducts(){
//     return async function getProductsThunk(dispatch, getState){
//         const data = await fetch('https://fakestoreapi.com/products');
//         const result = await data.json();

//         dispatch(fetchProducts(result))
//     }
// }