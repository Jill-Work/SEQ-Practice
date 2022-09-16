//      Database
const db = require('../middleware/index');

//      variables


//      Import files
const onetomany = require('../service/onetomany');

// ---------------------------------------------------------------------------------------------------

exports.onetomany = async (req,res) => {
    const id = req.params.id;
    const data = await onetomany.onetomany(id);
    res.status(200).json(data);
};