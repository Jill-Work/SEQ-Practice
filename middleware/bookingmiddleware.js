//      variables
const Joi = require("joi");

// ---------------------------------------------------------------------------------------------------

exports.addbooking = (req, res, next) => {
    const validation = Joi.object({

        first_name:Joi.string().min(3).max(20).required(),
        last_name:Joi.string().required(),
        email:Joi.string().required(),
        phone_no:Joi.string().required(),
        from:Joi.string().required(),
        to:Joi.string().required(),
        date:Joi.string().required(),
        time:Joi.string().required()

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


exports.updatebooking = (req, res, next) => {
    const validation = Joi.object({

        first_name:Joi.string().min(3).max(20).optional(),
        last_name:Joi.string().optional(),
        email:Joi.string().optional(),
        phone_no:Joi.string().optional(),
        from:Joi.string().optional(),
        to:Joi.string().optional(),
        date:Joi.string().optional(),
        time:Joi.string().optional()

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