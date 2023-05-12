const { NumberPlate, User, Admin } = require('./schema');
module.exports.insertUser = async (req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        mobno:req.body.mobno,
        password:req.body.password,
        city:req.body.city,
        region:req.body.region,
        bookedPlates:req.body.bookedPlates
    })
    await user.save();
    res.send({msg:"User Added Sucessfully !"});
}
module.exports.insertAdmin = async (req,res) => {
    const admin = new Admin({
        adminid:req.body.adminid,
        name: req.body.name,
        mobno:req.body.mobno,
        password:req.body.password,
        city:req.body.city,
        region:req.body.region,
        enteredPlates:req.body.enteredPlates
    })
    await admin.save();
    res.send({msg:"Admin Added Sucessfully !"});
}
module.exports.insertNumplate = async (req,res) => {
    const numberplate = new NumberPlate({
        plateId: req.body.plateId,
        plateNumber:req.body.plateNumber,
        platePrize:req.body.platePrize,
        bookedBy:req.body.bookedBy,
    })
    await numberplate.save();
    res.send({msg:"Number Added Sucessfully !"});
}