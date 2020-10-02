import * as Joi from 'joi';

export const officerValidator = Joi.object().keys({
  name: Joi.string().max(255).min(2).required()
});
