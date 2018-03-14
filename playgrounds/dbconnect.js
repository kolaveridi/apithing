var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
MongoClient.connect(url,function(err,db){
  if(err) throw err;
  var dbo=db.db("newdatabase");
  var myobj=[
    {name:'satya',age:'23'},
    {name:'john',age:'88'},
    {name:'elon',age:'44'},
  ];


 dbo.collection("customers").find({}).toArray(function(err, result) {
   if (err) throw err;
   console.log(result);
   db.close();
 });
});
