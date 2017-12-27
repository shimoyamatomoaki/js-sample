(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var person = function () {
  function person(name, age) {
    _classCallCheck(this, person);

    this.name = name;
    this.age = age;
  }

  _createClass(person, [{
    key: 'sayHello',
    value: function sayHello() {
      console.log('hello');
    }
  }, {
    key: 'sayBye',
    value: function sayBye() {
      console.log('Bye');
    }
  }, {
    key: 'sayName',
    value: function sayName() {
      console.log(this.name);
    }
  }, {
    key: 'check',
    value: function check() {
      console.log(this);
    }
  }, {
    key: 'showCard',
    value: function showCard() {
      console.log("This is " + this.name + "'s card.");
    }
  }]);

  return person;
}();

var student = function (_person) {
  _inherits(student, _person);

  function student(name, age, studentNumber) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'student';

    _classCallCheck(this, student);

    var _this = _possibleConstructorReturn(this, (student.__proto__ || Object.getPrototypeOf(student)).call(this, name, age));

    _this.type = type;
    _this.studentNumber = studentNumber;
    return _this;
  }

  return student;
}(person);

var teacher = function (_person2) {
  _inherits(teacher, _person2);

  function teacher(name, age, teacherNumber) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'teacher';

    _classCallCheck(this, teacher);

    var _this2 = _possibleConstructorReturn(this, (teacher.__proto__ || Object.getPrototypeOf(teacher)).call(this, name, age));

    _this2.type = type;
    _this2.teacherNumber = teacherNumber;
    return _this2;
  }

  return teacher;
}(person);

var tom = new person('tom', 30);
tom.sayHello();
tom.sayName();

var bob = new person('bob', 35);
bob.sayHello();
bob.sayName();

var tomy = new student('tomy', 16, '00001');
tomy.sayHello();
tomy.sayName();
tomy.showCard();
tomy.check();

var jon = new teacher('jon', 60, '00002');
jon.showCard();
jon.check();

},{}]},{},[1]);
