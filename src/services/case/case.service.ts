import {CaseDBModel, ICase, OfficerDBModel} from '../../database';
import {caseStatus} from '../../configs';

class CaseService {

  async createCase(caseObj: ICase) {
    try {
      const availableOfficer = await OfficerDBModel.findOne({ where: {caseId: null}}) as any;

      caseObj.status = caseStatus.NEW;

      if (availableOfficer) {
        caseObj.officerId = availableOfficer.id;
        caseObj.status = caseStatus.IN_PROGRESS;
      }

      const createdCase = await CaseDBModel.create(caseObj) as any;

      if (availableOfficer) {
        availableOfficer.caseId = createdCase.id;
        await availableOfficer.save();
      }

      return createdCase;
    } catch (e) {
      console.log(e);
    }
  }

  async resolve(caseId: number) {
    try {
      const caseObj = await CaseDBModel.findOne({where: {id: caseId}}) as any;
      caseObj.status = caseStatus.RESOLVED;
      const resolvedCase = await caseObj.save();

      await OfficerDBModel.update({caseId: null}, {where: {id: caseObj.officerId}});
      await this.assignCase(caseObj.officerId);

      return resolvedCase;
    } catch (e) {
      throw e.message;
    }
  }

  async assignCase(officerId: number) {
    try {
      const unassignedCase = await CaseDBModel.findOne({where: {status: caseStatus.NEW}}) as any;

      if (unassignedCase) {
        await OfficerDBModel.update({caseId: unassignedCase.id}, {where: {id: officerId}});

        unassignedCase.officerId = officerId;
        unassignedCase.status = caseStatus.IN_PROGRESS;

        return await unassignedCase.save();
      }

      return false;
    } catch (e) {
      throw e.message;
    }
  }
}

export const caseService = new CaseService();
