import {NextFunction, Request, Response} from 'express';
import {caseValidator} from '../validators';
import {ErrorHandler} from '../errors/ErrorHandler';
import {ResponseStatusCodesEnum} from '../constants';

export const checkCaseValidityMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const caseObj = req.body;
    const {error} = caseValidator.validate(caseObj);

    if (error) {
      return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message));
    }
    next();
  } catch (e) {
    next(e.message)
  }

};
