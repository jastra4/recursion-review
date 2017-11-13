// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // return a JSON string of the parameter
  //var result = "";
  // check data type of obj
  if (obj === null){
    return "null";
  }
  if (Array.isArray(obj)) {
    var result = "";
    for (var i = 0; i < obj.length; i++) {
      result.concat(",");
    }
    result.slice(0,result.length-1);
    return "[" + result + "]";
  } else if (typeof obj === 'object') {
    var result = "";
    for (var key in obj) {
      // add key in brackets to result
      // add : and space to result
      // add property to result
      result.concat(stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",");
    }
    result.slice(0,result.length-1);
    return "{" + result + "}";
    
  } else if (typeof obj === 'string')
      return "\"" + obj + "\"";
        else if (typeof obj === 'undefined')
           return "undefined";
            else 
              return obj.toString();
};
