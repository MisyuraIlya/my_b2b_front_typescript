import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IUser } from '@models/users.interface';

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('http://localhost:5000/users')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("error to fetch data")
        }
    }
)