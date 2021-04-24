const express=require("express");
const app=express();

//everytime this middleware will run and our node will not
//know what to run  so we need to use this next to tell it to run 
app.use(function(req,res,next)
{
  res.send("404");
  next();
});

app.get("/",function(req,res)//what when other request to home route
{
res.send("ram");
});
app.get("/about/",function(req,res)
{
  res.send("hi i ma don");
});


app.listen(3000,function()//listen on port 30000 in our pc
{

  console.log("hi the server is working");

});
// //this will run when any of the existing get  request is not matched
// //its positining is very important
// app.use(function(req,res)
// {
//   res.send("404");
// });
