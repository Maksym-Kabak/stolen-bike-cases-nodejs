import {Router} from 'express';
import {officerController} from '../../controllers';
import {checkOfficerValidityMiddleware} from '../../middleware';

const router = Router();

router.post('/', checkOfficerValidityMiddleware,officerController.createOfficer);

export const officerRouter = router;
