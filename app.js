// console.log('hello');
// const http=require('http');
//const routes=require('./routes');
const express=require('express');

const app=express();
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const bodyParser=require('body-parser');
const path=require('path');
const expressHbs=require('express-handlebars');


app.engine('hbs',expressHbs());
app.set('view engine', 'hbs');
app.set('views','views');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'/public')));
app.use('/admin',adminRoutes.route);
app.use(shopRoutes.route);

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'404 - Not Found page'});
});



// const server=http.createServer(app);
// server.listen(3000);
app.listen(3000);

console.log('Node server running on port 3000');