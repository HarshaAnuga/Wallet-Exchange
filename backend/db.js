
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://HarshaAnuga:9rM2mcNqg220JbNo@cluster0.9y4so.mongodb.net/');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:6,
        maxlength:20,
    },

    firstname:{
        type:String,
        required:true,
        minlength:50,
        maxlength:100,
    },
    lastName:{
        type:String,
        required:true,
        minlength:50,
        maxlength:100,
    }

});



const accountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    balance:{
        type:Number,
        required:true,
        default:0,
    

    }
});

const Account=mongoose.model('Account',accountSchema);
const User = mongoose.model('User',userSchema);

module.exports={
    User,
    Account,
};
