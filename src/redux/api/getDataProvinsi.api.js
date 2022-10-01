import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../';

export const DataProvinsiApi = createApi({
  reducerPath: 'DataProvinsiApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: build => ({
    GetDataProvinsi: build.query({
      query: () => `prov.json`,
      transformResponse: response => response,
    }),
  }),
});

export const {useGetDataProvinsiQuery} = DataProvinsiApi;
