import * as Joi from 'joi';

export const caseValidator = Joi.object().keys({
  color: Joi.string().max(255).required(),
  type: Joi.string().max(12).required(),
  owner: Joi.string().max(12).required(),
  status: Joi.string().max(12).required()
});
