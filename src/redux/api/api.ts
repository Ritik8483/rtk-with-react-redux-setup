import { apiRoot, baseQuery } from '../../global';
import { createApi } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Posts'], // provide tags here whose api data you want to cache
  endpoints: builder => ({
    fetchallData: builder.query<any, any>({
      query: (data: any) => ({
        url: `${apiRoot}${data.url}`,
        method: 'GET',
      }),
      providesTags: ['Posts'],
    }),
  }),
})

export const { useFetchallDataQuery } = api
