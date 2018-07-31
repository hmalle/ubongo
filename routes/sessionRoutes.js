
const db = require("../models");

module.exports = (app) => {

  app.post("/api/save/session/", (req,res)=>{
    db.Session.create({
      username: req.body.username,
      field   : req.body.field,
      data    : req.body.datum,
    }).then((resp)=>{
      res.json({state:"Success"});
    }).catch((err)=>{
      console.log(">>> error"+ err);
      res.json(err);
    });
  });

  app.post("/api/retrieve/session/", (req,res)=>{
    db.Session.findOne({
      where:{
        username: req.body.username,
        field   : req.body.field,
      },
    }).then((resp)=>{
      res.json(resp);
    }).catch((err)=>{
      console.log(">>> error: "+ err);
      res.json(err);
    });
  });

};

