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
            query: (req) => {
                const token = localStorage.getItem('authToken');
                console.log(token);
                return {
                    url: '/api/profile',
                    method: 'POST',
                    body: req,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
            },
            invalidatesTags: ['profile'],
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
            providesTags:['profile']
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
        answerQuestion: builder.mutation({
            query(req) {
                const token = localStorage.getItem('authToken');
                return{
                    url: '/api/answer',
                    method: 'POST',
                    body: req,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
            },
            invalidatesTags:['profile']
        }),
    }),
});

export const { useCreateProfileMutation, useUpdateProfileMutation, useGetProfileQuery, useUploadProfileImageMutation, useRemoveProfileImageMutation, useAnswerQuestionMutation } = profileApi;
