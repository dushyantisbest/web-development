import joi from "joi";

const listingValidation = joi
  .object({
    title: joi.string().required(),
    image: joi.string().allow("", null),
    price: joi.number().min(0).required(),
    location: joi.string().required(),
    country: joi.string().required(),
    description: joi.string().required(),
  })
  .required();

export default listingValidation;
