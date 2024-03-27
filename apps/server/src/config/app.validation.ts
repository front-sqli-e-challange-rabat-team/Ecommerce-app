import * as Joi from 'joi';

/***
 * @description set the required env vars for server to dire properly
 * */
export const validationSchema = Joi.object({
  JWT_SECRET_KEY: Joi.string().required(),
  JWT_EXPIRES_DATE: Joi.string().required(),
  NODE_ENV: Joi.string().required(),
  // S3_ACCESS_KEY_ID: Joi.string().required(),
  // S3_SECRET_ACCESS: Joi.string().required(),
  // S3_BUCKET_NAME: Joi.string().required(),
  // S3_BUCKET_REGION: Joi.string().required(),
});

export const validationOptions = {
  abortEarly: true,
};
