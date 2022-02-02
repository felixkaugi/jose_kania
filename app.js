var express = require('express')
var app = express()
//set ejs as the view engine
app.set('view engine', 'ejs')
app.use( express.static( "public" ) );
app.use('/', require('./routes/index'))
app.listen(2220, (req,res)=>{
    console.log('server running at port 2220')
    
})
