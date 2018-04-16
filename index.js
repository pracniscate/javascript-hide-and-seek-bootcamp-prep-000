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

/*function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('ul.ranked-list li');
  const firstList = rankedLists[0];
  const secondList = rankedLists[1];
  
  let children = firstList.children;
  let start = 1;
  
  for (let i = 0, l = children.length; i < l; i++) {
    parseInt(children[i].innerHTML) + n;
  }
  
  children = secondList.children;
  start = 12;

  for (let i = 0, l = children.length; i < l; i++) {
    parseInt(children[i].innerHTML) + start + i + n;
  }
  return rankedLists;
}*/

function increaseRankBy(n) {
  const children = document.querySelectorAll('ul.ranked-list li');
  
  for (let i = 0, l = children.length; i < l; i++) {
    parseInt(children[i].innerHTML) + n;
  }
  
  return children;
}