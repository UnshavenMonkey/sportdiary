import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    email: null,
    name: null,
    password: null,
}

export const signUp = createAsyncThunk('signUpScreen/signUp', async (data, { rejectWithValue }) => {
    // https://redux-toolkit.js.org/api/createAsyncThunk#examples
    try {
        console.log('hi', data);
        const response = await axios.post('http://localhost:5001/signup', data);
        console.log(response);
        return response.data;
    } catch (error) {
        if (!error.response) {
            throw error;
        }
        // We got validation errors, let's return those so we can reference in our component and set form errors
        return rejectWithValue(error.response);
    }
});

export const SignUpScreenSlice = createSlice({
  name: 'signUpScreen',
  initialState,
  reducers: {
    setEmail: (state, action) => {
        state.email = action.payload;
    },
    setName: (state, action) => {
        state.name = action.payload;
    },
    setPassword: (state, action) => {
        state.password = action.payload;
    },
    cleanupSignUpScreen: (state) => initialState,
  },
  extraReducers: {
    [signUp.fulfilled]: (state, action) => {

    }
  }
});

export const signUpScreenReducer = SignUpScreenSlice.reducer;

export const { setEmail, setName, setPassword, cleanupSignUpScreen } = SignUpScreenSlice.actions;

export const selectName = (state) => state.signUpScreen.name;
export const selectEmail = (state) => state.signUpScreen.email;
export const selectPassword = (state) => state.signUpScreen.password;


