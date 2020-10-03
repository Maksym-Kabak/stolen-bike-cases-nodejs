import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../models/requset-extended.model';
import {caseService} from '../../services/case';

import {ResponseStatusCodesEnum} from '../../constants';

class CaseController {
  async createCase(req: IRequestExtended, res: Response, next: NextFunction) {
    try {
      const caseObj = req.body;

      await caseService.createCase(caseObj);

      res.status(ResponseStatusCodesEnum.CREATED).end();
    } catch (e) {
      next(e);
    }
  }

  async resolveCase(req: IRequestExtended, res: Response, next: NextFunction) {
    try {
      await caseService.resolve(req.body.caseId);

      res.send(ResponseStatusCodesEnum.CREATED).end();
    } catch (e) {
      next(e);
    }
  }
}

export const caseController = new CaseController();
