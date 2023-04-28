const mongoose =require("mongoose")

mongoose.connect("mongodb+srv://Achchuthan:ukistu14@cluster1.svc0tun.mongodb.net/signinsignup?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connect")
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("collection",LogInSchema)

module.exports=collection