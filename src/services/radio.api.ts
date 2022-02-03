import { useQuery } from 'react-query';

import { useAxios } from '../hooks';

export const useGetRadios = () => {
  const axios = useAxios();

  return useQuery<Station[], Error>(
    'radios',
    async () => {
      const { data } = await axios.get(`/radios`);

      return data;
    },
    {
      staleTime: 60 * 1000,
    },
  );
};
