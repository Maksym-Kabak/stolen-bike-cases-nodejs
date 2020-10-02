import {IOfficer, OfficerDBModel} from '../../database';

class OfficerService {

  createOfficer(officer: IOfficer) {
    return OfficerDBModel.create(officer);
  }

}

export const officerService = new OfficerService();
