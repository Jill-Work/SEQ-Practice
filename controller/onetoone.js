//      Database
const db = require('../middleware/index');

//      variables


//      Import files
const onetoone = require('../service/onetoone');

// ---------------------------------------------------------------------------------------------------

exports.onetoone = async(req,res)=>{
    const id = req.params.id;
    const user = await onetoone.onetoone(id);
    res.send(user);
};
