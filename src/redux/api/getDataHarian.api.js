import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../';

export const DataHarianApi = createApi({
  reducerPath: 'DataHarianApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    GetDataHarian: builder.query({
      query: () => `update.json`,
    }),
  }),
});

export const {useGetDataHarianQuery} = DataHarianApi;
