// Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.

function getFirstSelector(selector) {
  const firstElement = document.querySelector(selector);
  return firstElement;
}

// Define a function nestedTarget() that pulls a .target out of #nested

function nestedTarget() {
  const target = document.querySelector('#nested div div div .target');
  return target;
}

// Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node

function deepestChild() {
  const deepest = document.querySelector('#grand-node div div div div');
  return deepest;
}

// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
  }
  return rankedLists;
}