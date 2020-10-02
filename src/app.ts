import {NextFunction, Request, Response} from 'express';

import * as cors from 'cors';
import * as express from 'express';
import * as rateLimit from 'express-rate-limit';
import * as dotenv from 'dotenv';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as path from 'path';
import {caseRouter, officerRouter} from './routes';

dotenv.config();

const serverRequestLimit = rateLimit({
  windowMs: 10000,
  max: 100
});

class App {
  public readonly app: express.Application = express();

  constructor() {
    (global as any).appRoot = path.resolve(process.cwd(), '../');

    this.app.use(morgan('dev'));
    this.app.use(helmet());
    this.app.use(serverRequestLimit);
    this.app.use(cors());

    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));

    this.app.use(express.static(path.resolve((global as any).appRoot, 'public')));

    this.mountRoutes();

    this.app.use(this.customErrorHandler);
  }

  private mountRoutes(): void {
    this.app.use('/case', caseRouter);
    this.app.use('/officer',officerRouter);
  }

  private customErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    res
      .status(err.status || 500)
      .json({
        message: err.message || 'Unknown Error',
        code: err.code
      });
  }
}

export const app = new App().app;
