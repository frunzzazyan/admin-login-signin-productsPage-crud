const express = require('express');
const router = express.Router();
const schema = require("../schema/schema.js")
const bcrypt = require("bcryptjs");
const readUsers = require('../middleware/readUsers.js');
const fs = require("fs");
const readUser = require('../middleware/readLogin.js');
/* GET home page. */
router.get('/', readUser ,function(req, res, next) {
  if(res.locals.login){
    res.redirect("/errorpage")
  }else{
    res.render('signup');
  }
});

router.post("/",readUsers,async (req,res)=>{
  const {users} = res.locals
  try {
    const body = await schema.validateAsync(req.body);
    body.id = `${Math.round(Math.random()*1000)}`
    delete body.rpassword
    const hashPassword = bcrypt.hashSync(body.password,10)
    body.password = hashPassword
    body.login = false
    users.push(body)
    fs.promises.writeFile("./db/users.json", JSON.stringify(users))
    res.redirect("/login")
  }
  catch (err) {
    res.json(err.details)
   }
})

module.exports = router;
// gexam1234