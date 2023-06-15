const express=require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const date= require(__dirname+"/date.js")


const app=express()
app.set('view engine',"ejs")
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"))


mongoose.connect('mongodb://127.0.0.1:27017/todo',{useNewUrlParser:true});

const schema =new mongoose.Schema({
  name:String
});

const swetha=mongoose.model("task2",schema);

app.get('/',function(req,res){
  swetha.find({},function(err,y){
    
      const day =date.swethas();
    res.render('index',{date:day,datas:y});

  })
  });
  
app.post("/",function(req,res){
     const item=req.body.newitem;
     const i=new swetha({
      name:item
     });

     i.save();
     res.redirect("/");
    
});

app.post("/delete",function(req,res){
  const s= req.body.checkbox ;
  swetha.findByIdAndRemove(s,function(err){
    if(err)
    {
      console.log(err)
    }
    else{
      console.log("success")
      res.redirect("/")
    }
  });
});

app.listen(5000,function(){
    console.log("started")
})