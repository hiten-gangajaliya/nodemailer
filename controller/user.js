const usersDetails = require('../models/user')

exports.getusers = async (req, res, next) => {
    try {
        let getData = await usersDetails.find()
        res.json({
            status: 200,
            data: getData,
            message: "Successfully..."
        })
    } catch {
        res.json({
            status: 403,
            data: [],
            message: "Something went wrong..."
        })
    }
    next()
}

exports.adduser = async (req, res, next) => {
    try {
        let user = await new usersDetails({
            email: req.body.email,
            password:req.body.password
        })
        const addData = await user.save();
        res.json({
            status: 200,
            data: addData,
            message: "Successfully..."
        })
    } catch (err) {
        res.json({
            status: 403,
            data: [],
            message: "something went wrong"
        })
    }
    next()
}

exports.removeuser = async (req, res, next) => {
    try {
        let deleteuser = await usersDetails.deleteOne({ _id: req.params.id });
        res.json({
            status: 200,
            data: deletecustomer,
            message: "Successfully..."
        })
    }
    catch {
        res.json({
            status: 403,
            data: [],
            message: "something went wrong"
        })
    }
    next()
}

exports.updateuser = async (req, res, next) => {
    try {
        let user = {
            Firstname: req.body.firstname,
            Lastname: req.body.lastname,
            Email: req.body.email,
            Mobileno: req.body.mobileno,
        }
        let updateuser = await usersDetails.findByIdAndUpdate(req.params.id, {
            $set: customer,
        }, { new: true });
        res.json({
            status: 200,
            data: updateCustomer,
            message: "Successfully..."
        })
    }catch {
        res.json({
            status: 403,
            data: [],
            message: "Something went wrong..."
        })
    }
    next()
}


exports.forgotpass = async (req,res) => {
    try {
        let user = await user.findOne({email:req.body.email})
        if(user) {
            
        } else {
        res.status(403).send({success:true,message:`Email is doesn't exist`})
        }
    } catch(err) {
        res.status(403).send({success:false,message:err.message})
    }
}