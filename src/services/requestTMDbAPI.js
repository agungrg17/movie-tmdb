import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const requestTMDbAPI = createApi({
  reducerPath: "requestTMDbAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query({
      query: () => ({
        url: `trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getPopularMovies: builder.query({
      query: () => ({
        url: `movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getPopularTvSeasons: builder.query({
      query: () => ({
        url: `tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getUpcomingMovies: builder.query({
      query: () => ({
        url: `movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getTopRatedTvSeasons: builder.query({
      query: () => ({
        url: `tv/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getDetailsTvOrMovie: builder.query({
      query: ({ media_type, id }) => ({
        url: `${media_type}/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getRecommendationsTvOrMovie: builder.query({
      query: ({ media_type, id }) => ({
        url: `${media_type}/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
    getCreditsTvOrMovie: builder.query({
      query: ({ media_type, id }) => ({
        url: `${media_type}/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
  }),
});

export const {
  useGetTrendingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetPopularTvSeasonsQuery,
  useGetUpcomingMoviesQuery,
  useGetTopRatedTvSeasonsQuery,
  useGetDetailsTvOrMovieQuery,
  useGetRecommendationsTvOrMovieQuery,
  useGetCreditsTvOrMovieQuery,
} = requestTMDbAPI;
