import { ResponseComposition, RestContext, RestRequest } from 'msw';

import { stations } from '../db/station.db';

export const getRadios = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) => res(ctx.status(200), ctx.json(stations));

export const radioRequestFailed = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) =>
  res(ctx.status(500), ctx.json({ data: { error: 'Internal server error' } }));
