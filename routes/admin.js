const express=require('express');

const router=express.Router();

const path=require('path');

const dir=require('../util/path');

const products=[];

router.get('/add-product',(req,res,next)=>{
    console.log('here');
    res.sendFile(path.join(dir,'views','add-product.html'));
});

router.post('/add-product',(req,res,next)=>{
    products.push({title:req.body.title});
    res.redirect('/');
});


const a=(a,b)=>{

}

exports.route=router;
exports.products=products;

