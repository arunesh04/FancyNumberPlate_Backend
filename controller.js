const { NumberPlate, User, Admin } = require('./schema');
//Inserting Operation
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

//Get Operation 

module.exports.getAdmin = async (req,res) => {
    const admin = await Admin.find({});
    res.send(admin)
}

module.exports.getUser = async (req,res) => {
    const user = await User.find({});
    res.send(user)
}

module.exports.getNumberplate = async (req,res) => {
    const numplate = await NumberPlate.find({});
    res.send(numplate)
}

//Delete operation 

module.exports.deleteAdmin = async (req,res) => {
    const admin = await Admin.findOneAndDelete({adminid:req.params.adid});
    if(admin)
        res.send("Admin Deleted Sucessfully!");
    else
        res.send("Admin Doesn't Exist!");
}

module.exports.deleteUser = async (req,res) => {
    const user = await User.findOneAndDelete({email:req.params.email});
    if(user)
        res.send("User Deleted Sucessfully!");
    else
        res.send("User Doesn't Exist!");
}

module.exports.deleteNumberplate = async (req,res) => {
    const numberplate = await NumberPlate.findOneAndDelete({plateid:req.params.plateId});
    if(numberplate)
        res.send("Numberplate Deleted Sucessfully!");
    else
        res.send("Numberplate Doesn't Exist!");
}
