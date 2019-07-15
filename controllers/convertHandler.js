/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
  var firstChar = input.match('[a-zA-Z]');
  var index = input.indexOf(firstChar);

  var result = input.slice(0, index);
    
  if(result.indexOf('/') != -1){
    let slashArr = result.split('/')
    let firstPart = slashArr[0];
    let secondPart = slashArr[1];
    
    if(Number(firstPart) && Number(secondPart) && slashArr.length <= 2){
      result = firstPart / secondPart
      return result;
    } else {
      return false;
    }
  }
    return Number(result || 1);
  };
  
  this.getUnit = function(input) {
    const regex1 = new RegExp(/[a-zA-Z]+/g)
    
    var result = input.match(regex1)[0]
    return result;
  };
  
  this.getConvInfo = (input) => {
	var firstChar = input.match('[a-zA-Z]');
  var index = input.indexOf(firstChar);

  var unitString = input.slice(index, input.length - 1);
	unitString = unitString.toLowerCase();
    
	switch(unitString){
		case 'gal':
		return {str: 'l', rate: 3.78541}
		case 'l':
		return {str: 'gal', rate: (1/3.78541)}
		case 'lbs':
		return {str: 'kg', rate: 0.453592}
		case 'kg':
		return {str: 'lbs', rate: (1/0.453592)}
		case 'mi':
		return {str: 'km', rate: (1.60934)}
		case 'km':
		return {str: 'mi', rate: (1/1.60934)}
    default:
    return {str: 'invalid unit', rate: 1}
	}
}
  
  this.convert = function(initNum, initUnit) {
    const convRate = this.getConvInfo(initUnit).rate
    
    var result = initNum * convRate;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
    
    return result;
  };
  
}

module.exports = ConvertHandler;
