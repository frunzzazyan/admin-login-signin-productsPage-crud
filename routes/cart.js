const express = require("express");
const readUser = require("../middleware/readLogin");
const readCart = require("../middleware/readCart");
const readProducts = require("../middleware/readProducts");
const findProduct = require("../middleware/findProduct");
const addCart = require("../middleware/addCart");
const deleteProductCart = require("../middleware/deleteProductCart");
const router = express.Router()

router.get("/", [readUser, readCart], (req,res)=>{
    if(res.locals.login){
        const {cart} = res.locals
        res.render("cart" ,{cart})
    }else{
        res.redirect("/login")
    }
})

router.post("/",[readProducts ,readCart, findProduct, addCart], (req,res)=>{
    res.send("ok")
})

router.delete("/:id", [readCart, deleteProductCart], (req,res)=>{
    res.send("ok")
})

module.exports = router;