import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./base.api";

export const recommendationApi = createApi({
	reducerPath: 'recommendationApi',
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
	tagTypes: ['recommendation'],
	endpoints: (builder) => ({
		getRecommendation: builder.query({
			query: () => ({
				url: '/api/get-recommendations',
				method: 'GET',
			}),
			providesTags: ['recommendation'],
		}),
		smash: builder.mutation({
			query: (req) => {
				const token = localStorage.getItem('authToken');
				console.log(token);
				return {
					url: '/api/smash',
					method: 'POST',
					body: req,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				};
			},
			invalidatesTags: ['recommendation'],
		}),
		pass: builder.mutation({
			query: (req) => {
				const token = localStorage.getItem('authToken');
				console.log(token);
				return {
					url: '/api/pass',
					method: 'POST',
					body: req,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				};
			},
			invalidatesTags: ['recommendation'],
		}),
	}),
});

export const {
	useGetRecommendationQuery,
	useSmashMutation,
	usePassMutation,
} = recommendationApi;
