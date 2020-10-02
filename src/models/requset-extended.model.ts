import {Request} from 'express-serve-static-core';

export interface IRequestExtended extends Request {
  case?: any;
  officer?: any;
}
