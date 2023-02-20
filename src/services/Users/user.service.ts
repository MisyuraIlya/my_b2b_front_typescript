import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IUser } from '@models/users.interface';

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[],number>({
            query: (limit: number = 5) => ({
                url: '/users',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post'],
        }),
        createUser: build.mutation<IUser, IUser>({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Post']
        }),
        updateUser: build.mutation<IUser, IUser>({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'PUT',
                body: user
            }),
            invalidatesTags: ['Post']
        }),
        deleteUser: build.mutation<IUser, IUser>({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Post']
        })
    })
})