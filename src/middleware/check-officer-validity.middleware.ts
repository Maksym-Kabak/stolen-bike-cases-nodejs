import {NextFunction, Request, Response} from 'express';
import {ErrorHandler} from '../errors/ErrorHandler';
import {ResponseStatusCodesEnum} from '../constants';
import {officerValidator} from '../validators';

export const checkOfficerValidityMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const officer = req.body;
    const {error} = officerValidator.validate(officer);

    if (error) {
      return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message));
    }

    next();
  } catch (e) {
    next(e.message);
  }

};
