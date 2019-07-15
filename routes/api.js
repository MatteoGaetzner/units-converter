/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';
var helmet = require('helmet')
var assert = require('chai').assert;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();
  app.use(helmet)
  
  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getConvInfo(initUnit).str;
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      console.log(input, initNum, initUnit, returnNum, returnUnit, toString)
      if(returnUnit === 'invalid unit' && typeof(initNum) != 'number'){
        res.json({error: 'invalid number and invalid unit'})
      } else if(returnUnit === 'invalid unit'){
        res.json({error: 'invalid unit'})
      } else if(typeof(initNum) != 'number'){
        res.json({error: 'invalid number'})
      }
      
      res.json({initNum: initNum, initUnit: initUnit, returnNum: 5., returnUnit: returnUnit, string: toString})
    });
    
};
