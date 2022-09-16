//      variables
const Joi = require("joi");

// ---------------------------------------------------------------------------------------------------

exports.adduser = (req, res, next) => {
    const validation = Joi.object({

        first_name:Joi.string().min(3).max(20).required(),
        last_name:Joi.string().required(),
        email:Joi.string().required(),
        phone_no:Joi.string().required(),

    }).unknown(false);//.unknown(true)
    const { error } = validation.validate(req.body,{abortEarly:false});
    if (error) {
        return res.status(400).json(
            {
                "error": error.message
            }
        )
    } else {
        next();
    }
};


exports.updateuser = (req, res, next) => {
    const validation = Joi.object({

        first_name:Joi.string().min(3).max(20).optional(),
        last_name:Joi.string().optional(),
        email:Joi.string().optional(),
        phone_no:Joi.string().optional(),

    }).unknown(false);//.unknown(true)
    const { error } = validation.validate(req.body,{abortEarly:false});
    if (error) {
        return res.status(400).json(
            {
                "error": error.message
            }
        )
    } else {
        next();
    }
};












// for more information====>>>>> https://www.youtube.com/watch?v=v-cy8wZOHEE&t=173s