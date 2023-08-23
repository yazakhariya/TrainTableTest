import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { QueryFn } from './types'

export const fetchApi = createApi({
    reducerPath: 'fetchApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://gist.githubusercontent.com/' }),
    endpoints: (builder) => ({
      getTrainData: builder.query<QueryFn, void>({
        query: () => `orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json`,
      }),
    }),
  })
  
  export const { useGetTrainDataQuery } = fetchApi