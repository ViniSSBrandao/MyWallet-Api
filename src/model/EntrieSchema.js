import joi from 'joi'

export const entrieSchema = joi.object({
  value: joi.number().required(),
  description: joi.string().required(),
  exit: joi.boolean().required(),
  });
