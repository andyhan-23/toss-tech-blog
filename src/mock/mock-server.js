import { rest } from 'msw';

const basePath = '/api';
export const mockServer = (method, path, data, callback) =>
  rest[method](`${basePath}${path}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(callback(req, data)));
  });
