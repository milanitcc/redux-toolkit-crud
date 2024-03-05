import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


// create action
export const createUser = createAsyncThunk("createUser", async(data, {rejectWithValue}) => {
    const response = await fetch(`https://65e6db8453d564627a8d2958.mockapi.io/crud`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error.response)
    }
})

// read action
export const showUser = createAsyncThunk("showUser", async(args, {rejectWithValue}) => {
    const response = await fetch(`https://65e6db8453d564627a8d2958.mockapi.io/crud`)

    try {
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error.response)
    }
})

export const userDetail = createSlice({
    name: 'userDetail',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state, action) => {
            state.loading = true
        });

        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        });

        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.users = action.payload.message;
        });

        builder.addCase(showUser.pending, (state, action) => {
            state.loading = true
        });

        builder.addCase(showUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });

        builder.addCase(showUser.rejected, (state, action) => {
            state.loading = false;
            state.users = action.payload.message;
        });
    }
})

export default userDetail.reducer