import {Router} from 'express';
import {caseController} from '../../controllers';
import {checkCaseValidityMiddleware} from '../../middleware';

const router = Router();

router.post('/',checkCaseValidityMiddleware, caseController.createCase);
router.post('/resolve', caseController.resolveCase);

export const caseRouter = router;
