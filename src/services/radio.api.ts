import { useQuery } from 'react-query';

import { useAxios } from '../hooks';

export const useGetRadios = (slug: string | undefined) => {
  const axios = useAxios();

  return useQuery<any, Error>(
    ['radios', slug],
    async () => {
      const { data } = await axios.get(`/radios`);

      return data;
    },
    {
      staleTime: 60 * 1000,
    },
  );
};
