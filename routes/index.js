var express = require('express')
var router = express.Router()
router.get('/index',(req,res)=>{
    res.render('pages/index')
})
//handle user
router.get('/user',(req,res)=>{
    res.render('pages/user')
})
module.exports = router

