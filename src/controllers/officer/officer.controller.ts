import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../models/requset-extended.model';
import {officerService} from '../../services';
import {ResponseStatusCodesEnum} from '../../constants';

class OfficerController {
  async createOfficer(req: IRequestExtended, res: Response, next: NextFunction) {
    const officer = req.body;

    await officerService.createOfficer(officer);

    res.send(ResponseStatusCodesEnum.CREATED).end();
  }
}

export const officerController = new OfficerController();
