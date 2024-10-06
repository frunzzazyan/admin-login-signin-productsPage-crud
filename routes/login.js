const express = require('express');
const router = express.Router();
const loginSchema = require("../schema/loginSchema.js");
const readUsers = require('../middleware/readUsers');
const bcrypt = require('bcryptjs')
const fs = require("fs");
const readUser = require('../middleware/readLogin.js');

/* GET home page. */
router.get('/', readUser, function(req, res, next) {
    if(res.locals.login){
        res.redirect("/errorpage")
    }else{
        res.render('login');
    }
});

router.post("/", readUsers, async(req,res)=>{
    const {users} = res.locals
    const {email, password} = req.body
    if(email.trim() === "admin@gmail.com"){
        const admin = users.find(elem=>elem.email === email.trim())
        if(admin){
            const validationPassword = bcrypt.compareSync(password, admin.password)
            if(validationPassword){
                fs.promises.writeFile("./db/admin.json", JSON.stringify(admin))
                res.redirect("/admin")
            }else{
                res.json({"msg" : "invalid password"})
            }
        }
    }else{
        try {
            const  body = loginSchema.validateAsync(req.body)
            if(body){
            const user = users.find(elem=>elem.email === email.trim())
            if(user){
                const validationPassword = bcrypt.compareSync(password, user.password)
                if(validationPassword){
                    fs.promises.writeFile("./db/user.json", JSON.stringify(user))
                    res.redirect("/")
                }else{
                    res.json({"msg" : "invalid password"})
                }
            }
        }
        
    } catch (error) {
        res.json(err)
    }
}
})


module.exports = router;
