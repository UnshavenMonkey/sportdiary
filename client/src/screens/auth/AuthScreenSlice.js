import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {Platform} from "react-native";

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5001' : 'http://10.0.2.2:5000';

const initialState = {
    name: '',
    password: '',
    error: null,
    email: '',
    status: 'idle',
    isAuth: null,
};

export const getAuthStatus = token => {
    fetch(`${API_URL}/private`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
        .then(async res => {
            try {
                const jsonRes = await res.json();
                if (res.status === 200) {
                    setMessage(jsonRes.message);
                }
            } catch (err) {
                console.log(err);
            };
        })
        .catch(err => {
            console.log(err);
        });
}

export const getCurrentUser = createAsyncThunk('app/getCurrentUser', async () => {
    const response = await axios.get('/api/user/current/');
    return response.data;
});

export const getWsToken = createAsyncThunk('app/getWsToken', async () => {
    const response = await axios.get('/api/user/ws-token/');
    return response.data;
});

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        cleanupApp: (state) => initialState,
    },
    extraReducers: {
        [getCurrentUser.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [getCurrentProfile.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const appReducer = appSlice.reducer;

export const { cleanupApp } = appSlice.actions;

export const selectUserId = (state) => state.app.user?.id;
export const selectUserUsername = (state) => state.app.user?.user.username;
export const selectUserFirstName = (state) => state.app.user?.user.first_name;
export const selectUserLastName = (state) => state.app.user?.user.last_name;
export const selectUserEmail = (state) => state.app.user?.user.email;
export const selectUserIsActive = (state) => state.app.user?.user.is_active;
export const selectUserLastLogin = (state) => state.app.user?.user.last_login;
export const selectUserRole = (state) => state.app.user?.role;
export const selectUserRoleName = (state) => state.app.user?.role_name;
