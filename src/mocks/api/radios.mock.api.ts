import { ResponseComposition, RestContext, RestRequest } from 'msw';

import { radios } from '../db/radio.db';

export const getRadios = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) => res(ctx.status(200), ctx.json(radios));
