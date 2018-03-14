var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("newdatabase");
  var myquery = {age: '123'};
  var newvalues = { $set:{ age: '500' } };
  dbo.collection("customers").updateOne(myquery,newvalues, function(err, obj) {
    if (err) throw err;
    console.log("1 document updated");
    db.close()
  });
});
