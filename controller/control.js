const Mode = require("../Models/Mode");
// const router = require("../Routes/Routes");

const getAll = async(req,res)=>{
    
}
const bcrypt = require("bcryptjs")
const SignUp = async (req,res)=>{

    let exsitingUSer;
    const { name,email,password }= req.body;
        exsitingUSer = await Mode.findOne({email:email});
        if(exsitingUSer){
        return res.status(400).json("User Already Exist")
}
 const ciperText = bcrypt.hashSync(password);
//  console.log(ciperText);

        let result= await Mode.create({
            name:name,
            email:email,
            password:ciperText
        })
         res.status(200).json({
            msg:"added",
            sucess:true
        
        

    });
};

module.exports={
    SignUp,
    getAll
};