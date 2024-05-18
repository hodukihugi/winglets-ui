import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./base.api";

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.authToken;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            } else {
                console.log("Token not found");
            }
            return headers;
        },
    }),
    tagTypes:['profile'],
    endpoints: (builder) => ({
        createProfile: builder.mutation({
            query: (req) => ({
                url: '/api/profile',
                method: 'POST',
                body: req,
            }),
            invalidatesTags:['profile']
        }),

        updateProfile: builder.mutation({
            query: (req) => ({
                url: '/api/profile',
                method: 'PUT',
                body: req,
            }),
            invalidatesTags:['profile']
        }),
        getProfile: builder.query({
            query: (token) => ({
                url: '/api/profile',
                method: 'GET',
                headers: {'Authorization': `Bearer ${token}`},
            }),
            invalidatesTags:['profile']
        }),
        uploadProfileImage: builder.mutation({
            query: (req) => ({
                url: '/api/profile/upload-image',
                method: 'POST',
                body: req,
            }),
            invalidatesTags:['profile']
        }),
        removeProfileImage: builder.mutation({
            query: (req) => ({
                url: '/api/profile/remove-image',
                method: 'DELETE',
                body: req,
            }),
            invalidatesTags:['profile']
        }),
    }),
});

export const { useCreateProfileMutation, useUpdateProfileMutation, useGetProfileQuery, useUploadProfileImageMutation, useRemoveProfileImageMutation } = profileApi;