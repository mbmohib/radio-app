import { useQuery } from 'react-query';

import { useAxios } from '../hooks';

export const useGetRadios = () => {
  const axios = useAxios();

  return useQuery<Station[], Error>(
    'radios',
    async () => {
      const { data } = await axios.get(`/stations`);

      return data;
    },
    {
      staleTime: 60 * 1000,
    },
  );
};
