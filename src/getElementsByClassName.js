// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  var node = document.body;
  function getElements(node) {
    // check if node has any classes
    if (node.classList) {
      // check if node has classname
      if (node.classList.contains(className)) {
        results.push(node);
      }
      // check if node has children
      if (node.hasChildNodes()) {
        var nodeList = node.childNodes;
        // recursion on each child
        for (var i = 0; i < nodeList.length; i++) {
          getElements(nodeList[i]);
        }
      }
    }
  }
  getElements(node);
  return results;
};

