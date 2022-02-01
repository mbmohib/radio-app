import { rest } from 'msw';

import { apiEndpoint } from '../config';
import { getRadios } from './api';

export default [rest.get(`${apiEndpoint}/radios`, getRadios)];
