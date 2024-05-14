import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {baseUrl} from "./base.api";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (req) => ({
        url: '/api/auth/login',
        method: 'POST',
        body: req,
      }),
    }),
    register: builder.mutation({
      query: (req) => ({
        url: '/api/auth/register',
        method: 'POST',
        body: req,
      }),
    }),
    sendEmailToken: builder.mutation({
      query: (req) =>({
        url: '/api/auth/send-verification-email',
        method: 'POST',
        body: req,
      })
    }),
    verifyEmail: builder.mutation({
      query: (req) =>({
        url: '/api/auth/verify-email',
        method: 'POST',
        body: req,
      })
    })
  }),
});

export const { useLoginMutation, useRegisterMutation, useSendEmailTokenMutation , useVerifyEmailMutation} = authApi;