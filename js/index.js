'use strict';

console.clear();
var log = console.log.bind(console);

var index = 0;
var arr = [201, 202, 203, 204, 205, 206, 201, 202, 203, 204, 205, 206, 201, 202, 203, 204, 205, 206, 201, 202, 203, 204, 205, 206, 201, 202, 203, 204, 205, 206, 201, 202, 203, 204, 205, 206, 201, 202, 203, 204, 205, 206, 201, 202, 203, 204, 205, 206];

var items1 = [],
    items2 = [];

for (var i = 1; i <= 12; i++) {
  items1.push({
    name: 'Bill M',
    img: 'http://fillmurray.com/' + arr[index] + '/' + arr[index],
    circleStyleObject: {
      backgroundImage: 'url("http://fillmurray.com/' + arr[index] + '/' + arr[index++] + '")'
    }
  });
}
for (var i = 1; i <= 10; i++) {
  items2.push({
    name: 'Bill M',
    img: 'http://fillmurray.com/' + arr[index] + '/' + arr[index],
    circleStyleObject: {
      backgroundImage: 'url("http://fillmurray.com/' + arr[index] + '/' + arr[index++] + '")'
    }
  });
}

var app = new Vue({
  mounted: function mounted() {
    init();
  },

  el: '#app',
  data: {
    imageConfig: {
      width: 200,
      height: 200
    },
    items1: items1,
    items2: items2
  },
  methods: {
    handleClick: function handleClick(event) {
      //log(event.currentTarget);
      if (event.currentTarget.style.transform) {
        event.currentTarget.style.transform = '';
        event.currentTarget.style.zIndex = '';
      } else {
        event.currentTarget.style.zIndex = 2 + '';
        event.currentTarget.style.transform = 'scale(2)';
      }
    }
  }
});

function init() {
  log('init - ' + new Date());
}