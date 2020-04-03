const express = require('express');

const router = express.Router();

const path = require('path');

const dir = require('../util/path');

const admin = require('../routes/admin');

router.get('/', (req, res, next) => {
  // res.sendFile(path.join(dir,'views','shop.html'));
  res.render('shop', {
    pageTitle: 'shop',
    prod: admin.products,
    hasProd: admin.products.length > 0,
    path: '/'
  });
});

exports.route = router;
