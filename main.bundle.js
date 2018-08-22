/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Frog.js":
/*!*********************!*\
  !*** ./lib/Frog.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

// extend GamePiece class
module.exports = function (_GamePiece) {
  _inherits(Frog, _GamePiece);

  function Frog(x, y, height, width, color, borderColor) {
    _classCallCheck(this, Frog);

    var _this = _possibleConstructorReturn(this, (Frog.__proto__ || Object.getPrototypeOf(Frog)).call(this, x, y, height, width, color));
    // invoke parent class constructor


    _this.borderColor = borderColor;
    _this.lives = 3;
    _this.dx = 0;
    _this.dxv = 0;
    return _this;
  }

  _createClass(Frog, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          borderColor = this.borderColor;


      _get(Frog.prototype.__proto__ || Object.getPrototypeOf(Frog.prototype), 'draw', this).call(this, ctx);
      // draw block border
      ctx.strokeStyle = borderColor;
      ctx.strokeRect(x, y, width, height);
    }
  }, {
    key: 'isDead',
    value: function isDead() {
      //use closure for counting of lives
      this.lives--;
      if (this.lives === 0) {

        return true;
        //push the new number of lives to the DOM
      }
    }
  }, {
    key: 'isCollidingWith',
    value: function isCollidingWith(objects, frog) {
      var _this2 = this;

      var frogIsColliding = objects.find(function (object) {
        return _this2.x < object.x + object.width && _this2.x + _this2.width > object.x && _this2.y < object.y + object.height && _this2.y + _this2.height > object.y;
      });

      if (frogIsColliding) {
        frog.x = frogIsColliding.x;
        frog.dx = frogIsColliding.dx;
        frog.dxv = frogIsColliding.dxv;
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'frogMove',
    value: function frogMove(frog, dir) {
      //prevent from leaving bounds initially. perhaps set canvas coordinates.
      var col = this.isCollidingWithWall(580, 580);

      if (dir === 'right' && col === false) {
        this.x += 50;
      } else if (dir === 'right' && col === true && this.x + this.width > 560) {
        this.x += 0;
      } else if (dir === 'right' && col === true && this.x + this.width < 550) {
        this.x += 50;
      } else if (dir === 'left' && col === false) {
        this.x -= 50;
      } else if (dir === 'left' && col === true && this.x < 0) {
        this.x -= 0;
      } else if (dir === 'left' && col === true && this.x > 0) {
        this.x -= 50;
      } else if (dir === 'up' && col === false) {
        this.y -= 50;
      } else if (dir === 'up' && col === true && this.y < 20) {
        this.y -= 0;
      } else if (dir === 'up' && col === true && this.y > 20) {
        this.y -= 50;
      } else if (dir === 'down' && col === false) {
        this.y += 50;
      } else if (dir === 'down' && col === true && this.y + this.height > 580) {
        this.y += 0;
      } else if (dir === 'down' && col === true && this.y + this.height < 580) {
        this.y += 50;
      }
    }
  }]);

  return Frog;
}(GamePiece);

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Frog = __webpack_require__(/*! ./Frog */ "./lib/Frog.js");
var Obstacle = __webpack_require__(/*! ./obstacle */ "./lib/obstacle.js");
var Log = __webpack_require__(/*! ./Log */ "./lib/Log.js");
var Water = __webpack_require__(/*! ./water */ "./lib/water.js");

module.exports = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    var fGreen = 'rgb(87 144 44)';
    var fYellow = 'rgb(240 252 117)';
    var wBlue = 'rgb(56 141 236)';
    var lBrown = 'rgb(116 89 69)';
    var tBrown = 'rgb(75 71 38)';
    var rBlack = 'rgb(48 42 35)';
    var rYellow = 'rgb(252 248 86)';
    var rWhite = 'rgb(254 255 255)';
    var lGreen = 'rgb(87 144 44)';
    var oPink = 'rgb(238 149 151)';
    var oRed = 'rgb(216 55 49)';
    var oTeal = 'rgb(57 106 175)';
    var oYellow = 'rgb(229 196 65)';
    var oPurple = 'rgb(172, 128, 251)';

    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.level = 1;
    // level 1
    this.water = [new Water(0, 50, 200, 600, wBlue, wBlue)];
    this.frog = [new Frog(280, 555, 40, 40, 'green', oPink)];

    if (this.level === 1) {
      this.obstacle = [new Obstacle(-10, 515, 20, 40, oPink, rWhite, 1, 5), new Obstacle(-100, 515, 20, 40, oRed, oTeal, 1, 5), new Obstacle(295, 455, 40, 80, lGreen, oPink, 1, 1), new Obstacle(-195, 455, 40, 80, oTeal, oYellow, 1, 1), new Obstacle(-55, 405, 40, 40, oYellow, oPurple, 1, 2), new Obstacle(-195, 405, 40, 40, oPurple, oPink, 1, 2), new Obstacle(650, 355, 40, 80, oPink, oTeal, -1, 2), new Obstacle(605, 305, 40, 80, lGreen, oYellow, -1, 1), new Obstacle(790, 305, 40, 60, fYellow, oRed, -1, 1)];
      this.log = [new Log(-10, 205, 40, 150, lBrown, fGreen, 1, 1), new Log(380, 205, 40, 150, lBrown, fGreen, 1, 1), new Log(650, 155, 40, 100, lBrown, tBrown, -1, 2), new Log(250, 155, 40, 100, lBrown, tBrown, -1, 2), new Log(-100, 105, 40, 130, lBrown, rBlack, 1, 4), new Log(350, 105, 40, 130, lBrown, rBlack, 1, 4), new Log(710, 55, 40, 200, lBrown, rYellow, -1, 3)];
    } else if (this.level === 2) {
      this.obstacle = [new Obstacle(-10, 455, 20, 40, oPink, rWhite, 1, 5), new Obstacle(-100, 455, 20, 40, wBlue, oTeal, 1, 5), new Obstacle(250, 455, 20, 40, oTeal, oYellow, 1, 5), new Obstacle(-195, 505, 40, 100, oYellow, oPurple, 1, 2), new Obstacle(300, 505, 40, 100, oPurple, oPink, 1, 2), new Obstacle(155, 405, 40, 40, oPink, oTeal, 1, 3), new Obstacle(-55, 405, 40, 40, rWhite, fYellow, 1, 3), new Obstacle(-195, 405, 40, 40, lGreen, oYellow, 1, 3), new Obstacle(650, 355, 40, 80, fYellow, oRed, -1, 6), new Obstacle(605, 305, 40, 80, oPink, lGreen, -1, 3), new Obstacle(200, 305, 40, 80, oTeal, fYellow, -1, 3), new Obstacle(790, 305, 40, 60, rWhite, oRed, -1, 3)];
      this.log = [new Log(0, 205, 40, 50, lBrown, fGreen, 1, 0.5), new Log(-80, 205, 40, 50, lBrown, tBrown, 1, 0.5), new Log(-160, 205, 40, 50, lBrown, rBlack, 1, 0.5), new Log(650, 155, 40, 170, lBrown, rYellow, -1, 1), new Log(10, 105, 40, 50, lBrown, fGreen, 1, 2), new Log(90, 105, 40, 50, lBrown, tBrown, 1, 2), new Log(170, 105, 40, 50, lBrown, rBlack, 1, 2), new Log(710, 55, 40, 110, lBrown, tBrown, -1, 3), new Log(310, 55, 40, 110, lBrown, tBrown, -1, 3)];
    } else if (this.level === 3) {
      this.obstacle = [new Obstacle(-10, 455, 20, 40, oPink, rWhite, 1, 5), new Obstacle(-100, 455, 20, 40, wBlue, oTeal, 1, 5), new Obstacle(250, 455, 20, 40, oTeal, oYellow, 1, 5), new Obstacle(450, 455, 20, 40, oPurple, oTeal, 1, 5), new Obstacle(-5, 505, 40, 40, rWhite, oRed, 1, 4), new Obstacle(255, 505, 40, 40, oTeal, oRed, 1, 4), new Obstacle(455, 505, 40, 40, oPurple, lGreen, 1, 4), new Obstacle(-105, 405, 40, 60, oPink, oTeal, 1, 4), new Obstacle(195, 405, 40, 60, lGreen, oYellow, 1, 4), new Obstacle(495, 405, 40, 60, lGreen, oYellow, 1, 4), new Obstacle(650, 355, 40, 80, fYellow, oRed, -1, 8), new Obstacle(605, 305, 40, 80, oPink, lGreen, -1, 3), new Obstacle(200, 305, 40, 80, oTeal, fYellow, -1, 3), new Obstacle(790, 305, 40, 60, rWhite, oRed, -1, 3)];
      this.log = [new Log(0, 205, 40, 50, lBrown, fGreen, 1, 1.5), new Log(-80, 205, 40, 50, lBrown, tBrown, 1, 1.5), new Log(-160, 205, 40, 50, lBrown, rBlack, 1, 1.5), new Log(650, 155, 40, 170, lBrown, rYellow, -1, 4), new Log(10, 105, 40, 50, lBrown, fGreen, 1, 0.25), new Log(90, 105, 40, 50, lBrown, tBrown, 1, 0.25), new Log(170, 105, 40, 50, lBrown, rBlack, 1, 0.25), new Log(710, 55, 40, 120, lBrown, tBrown, -1, 7), new Log(310, 55, 40, 120, lBrown, tBrown, -1, 7)];
    } else if (this.level >= 4) {
      // add You Win!!! message
    }
  }

  // draw one frame of our game


  _createClass(Game, [{
    key: 'animate',
    value: function animate() {
      var _this = this;

      this.water.forEach(function (water) {
        // this.handleWater(water);
        water.draw(_this.ctx);
      });
      this.log.forEach(function (log) {
        _this.handleLog(log);
        log.draw(_this.ctx);
      });
      this.frog.forEach(function (frog) {
        _this.handleFrog(frog);
        frog.draw(_this.ctx);
      });
      this.obstacle.forEach(function (obstacle) {
        _this.handleObstacle(obstacle);
        obstacle.draw(_this.ctx);
      });
    }
  }, {
    key: 'handleFrog',
    value: function handleFrog(frog) {
      if (frog.isCollidingWith(this.obstacle, frog)) {
        this.endGame();
      } else if (frog.isCollidingWith(this.log, frog)) {
        return;
      } else if (frog.isCollidingWith(this.water, frog)) {
        this.endGame();
      } else {
        this.handleKeyPress(frog);
      }
    }
  }, {
    key: 'handleObstacle',
    value: function handleObstacle(obstacle) {
      if (obstacle.x >= 800) {
        obstacle.x = 0;
        // console.log(this.obstacle[0]);
      } else if (obstacle.x <= -200) {
        obstacle.x = 600;
      } else {
        obstacle.move();
      }
    }
  }, {
    key: 'handleLog',
    value: function handleLog(log) {
      if (log.x >= 800) {
        log.x = 0;
      } else if (log.x <= -200) {
        log.x = 600;
      } else {
        log.move();
      }
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      this.gameOver = true;
    }
  }, {
    key: 'isOver',
    value: function isOver() {
      return this.gameOver;
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      this.paused = !this.paused;
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {

      if (e.key === 'ArrowRight') {
        var right = 'right';

        this.frog.forEach(function (frog) {
          frog.frogMove(frog, right);
        });
      } else if (e.key === 'ArrowLeft') {
        var left = 'left';

        this.frog.forEach(function (frog) {
          frog.frogMove(frog, left);
        });
      } else if (e.key === 'ArrowDown') {
        var down = 'down';

        this.frog.forEach(function (frog) {
          frog.frogMove(frog, down);
        });
      } else if (e.key === 'ArrowUp') {
        var up = 'up';

        this.frog.forEach(function (frog) {
          frog.frogMove(frog, up);
        });
      }
    }

    // This code sets up the background on the canvas

  }, {
    key: 'drawBackground',
    value: function drawBackground() {
      // drawing water
      var ctx = this.ctx;

      // ctx.fillStyle = 'rgb(56, 141, 236)';
      // ctx.fillRect(0, 50, 600, 200); 

      // drawing 3 safe grass areas
      ctx.fillStyle = 'rgb(87, 144, 44)';
      ctx.fillRect(0, 0, 600, 50);
      ctx.fillRect(0, 250, 600, 50);
      ctx.fillRect(0, 550, 600, 50);

      // drawing white dash lane dividing lines and yellow center lines 
      ctx.beginPath();
      ctx.moveTo(0, 499);
      ctx.lineTo(600, 499);
      ctx.strokeStyle = 'rgb(254, 255, 255)';
      ctx.setLineDash([10]);
      ctx.strokeWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 449);
      ctx.lineTo(600, 449);
      ctx.strokeStyle = 'rgb(254, 255, 255)';
      ctx.setLineDash([10]);
      ctx.strokeWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 349);
      ctx.lineTo(600, 349);
      ctx.strokeStyle = 'rgb(254, 255, 255)';
      ctx.setLineDash([10]);
      ctx.strokeWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 397);
      ctx.lineTo(600, 397);
      ctx.strokeStyle = 'rgb(252, 248, 86)';
      ctx.setLineDash([0]);
      ctx.strokeWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 401);
      ctx.lineTo(600, 401);
      ctx.strokeStyle = 'rgb(252, 248, 86)';
      ctx.setLineDash([0]);
      ctx.strokeWidth = 2;
      ctx.stroke();
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function GamePiece(x, y, height, width, color) {
    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = 1;
    this.dy = 0;
    this.dxv = 1;
    this.dyv = 1;
  }

  _createClass(GamePiece, [{
    key: "isCollidingWithWall",
    value: function isCollidingWithWall(canvasWidth, canvasHeight) {
      return this.x < 50 || this.x + this.width > canvasWidth || this.y < 20 || this.y + this.height > canvasHeight;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  }, {
    key: "move",
    value: function move() {
      this.x += this.dx * this.dxv;
      this.y += this.dy * this.dyv;
    }
  }, {
    key: "changeDirection",
    value: function changeDirection(direction) {
      this.dx = direction.dx;
      this.dy = direction.dy;
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/Log.js":
/*!********************!*\
  !*** ./lib/Log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

//extends Gampiece
module.exports = function (_GamePiece) {
  _inherits(Log, _GamePiece);

  function Log(x, y, height, width, color, borderColor) {
    var dx = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
    var dxv = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;

    _classCallCheck(this, Log);

    var _this = _possibleConstructorReturn(this, (Log.__proto__ || Object.getPrototypeOf(Log)).call(this, x, y, height, width, color));

    _this.borderColor = borderColor;
    _this.x = x;
    _this.y = y;
    _this.height = height;
    _this.width = width;
    _this.color = color;
    _this.dx = dx;
    _this.dy = 0;
    _this.dxv = dxv;
    _this.dyv = 1;
    return _this;
  }

  _createClass(Log, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          borderColor = this.borderColor;

      // call parent class draw function

      _get(Log.prototype.__proto__ || Object.getPrototypeOf(Log.prototype), 'draw', this).call(this, ctx);

      // draw obstacle border
      ctx.strokeStyle = borderColor;
      ctx.strokeRect(x, y, width, height);
    }
    //

  }]);

  return Log;
}(GamePiece);

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");

var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var game = new Game(ctx);

// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop() {

  if (game.isOver()) {
    // console.log('Game Over');
    // write code for game over on screen

  } else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.drawBackground();
    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop);
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  e.preventDefault();
  game.handleKeyPress(e);
}

/***/ }),

/***/ "./lib/obstacle.js":
/*!*************************!*\
  !*** ./lib/obstacle.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

// extend GamePiece class
module.exports = function (_GamePiece) {
  _inherits(Obstacle, _GamePiece);

  function Obstacle(x, y, height, width, color, borderColor) {
    var dx = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
    var dxv = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;

    _classCallCheck(this, Obstacle);

    var _this = _possibleConstructorReturn(this, (Obstacle.__proto__ || Object.getPrototypeOf(Obstacle)).call(this, x, y, height, width, color));
    // invoke parent class constructor


    _this.x = x;
    _this.y = y;
    _this.height = height;
    _this.width = width;
    _this.color = color;
    _this.borderColor = borderColor;
    _this.dx = dx;
    _this.dy = 0;
    _this.dxv = dxv;
    _this.dyv = 1;
    return _this;
  }

  _createClass(Obstacle, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          borderColor = this.borderColor;

      // call parent class draw function

      _get(Obstacle.prototype.__proto__ || Object.getPrototypeOf(Obstacle.prototype), 'draw', this).call(this, ctx);

      // draw obstacle border
      ctx.strokeStyle = borderColor;
      ctx.strokeRect(x, y, width, height);
    }
  }]);

  return Obstacle;
}(GamePiece);

/***/ }),

/***/ "./lib/water.js":
/*!**********************!*\
  !*** ./lib/water.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

// extend GamePiece class
module.exports = function (_GamePiece) {
  _inherits(Water, _GamePiece);

  function Water(x, y, height, width, color) {
    _classCallCheck(this, Water);

    // invoke parent class constructor
    return _possibleConstructorReturn(this, (Water.__proto__ || Object.getPrototypeOf(Water)).call(this, x, y, height, width, color));
  }

  _createClass(Water, [{
    key: 'draw',
    value: function draw(ctx) {
      _get(Water.prototype.__proto__ || Object.getPrototypeOf(Water.prototype), 'draw', this).call(this, ctx);
    }
  }]);

  return Water;
}(GamePiece);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Zyb2cuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvb2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3dhdGVyLmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJsaXZlcyIsImR4IiwiZHh2IiwiY3R4Iiwic3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0Iiwib2JqZWN0cyIsImZyb2ciLCJmcm9nSXNDb2xsaWRpbmciLCJmaW5kIiwib2JqZWN0IiwiZGlyIiwiY29sIiwiaXNDb2xsaWRpbmdXaXRoV2FsbCIsIkZyb2ciLCJPYnN0YWNsZSIsIkxvZyIsIldhdGVyIiwiZkdyZWVuIiwiZlllbGxvdyIsIndCbHVlIiwibEJyb3duIiwidEJyb3duIiwickJsYWNrIiwiclllbGxvdyIsInJXaGl0ZSIsImxHcmVlbiIsIm9QaW5rIiwib1JlZCIsIm9UZWFsIiwib1llbGxvdyIsIm9QdXJwbGUiLCJwYXVzZWQiLCJnYW1lT3ZlciIsImxldmVsIiwid2F0ZXIiLCJvYnN0YWNsZSIsImxvZyIsImZvckVhY2giLCJkcmF3IiwiaGFuZGxlTG9nIiwiaGFuZGxlRnJvZyIsImhhbmRsZU9ic3RhY2xlIiwiaXNDb2xsaWRpbmdXaXRoIiwiZW5kR2FtZSIsImhhbmRsZUtleVByZXNzIiwibW92ZSIsImUiLCJrZXkiLCJyaWdodCIsImZyb2dNb3ZlIiwibGVmdCIsImRvd24iLCJ1cCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic2V0TGluZURhc2giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsImR5IiwiZHl2IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJkaXJlY3Rpb24iLCJHYW1lIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnYW1lTG9vcCIsImlzT3ZlciIsImNsZWFyUmVjdCIsImRyYXdCYWNrZ3JvdW5kIiwiYW5pbWF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxZQUFZLG1CQUFBQyxDQUFRLHVDQUFSLENBQWxCOztBQUVBO0FBQ0FDLE9BQU9DLE9BQVA7QUFBQTs7QUFDRSxnQkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxNQUFsQixFQUEwQkMsS0FBMUIsRUFBaUNDLEtBQWpDLEVBQXdDQyxXQUF4QyxFQUFxRDtBQUFBOztBQUFBLDRHQUU3Q0wsQ0FGNkMsRUFFMUNDLENBRjBDLEVBRXZDQyxNQUZ1QyxFQUUvQkMsS0FGK0IsRUFFeEJDLEtBRndCO0FBQ25EOzs7QUFFQSxVQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsVUFBS0MsRUFBTCxHQUFVLENBQVY7QUFDQSxVQUFLQyxHQUFMLEdBQVcsQ0FBWDtBQU5tRDtBQU9wRDs7QUFSSDtBQUFBO0FBQUEseUJBVU9DLEdBVlAsRUFVWTtBQUFBLFVBQ0RULENBREMsR0FDb0MsSUFEcEMsQ0FDREEsQ0FEQztBQUFBLFVBQ0VDLENBREYsR0FDb0MsSUFEcEMsQ0FDRUEsQ0FERjtBQUFBLFVBQ0tDLE1BREwsR0FDb0MsSUFEcEMsQ0FDS0EsTUFETDtBQUFBLFVBQ2FDLEtBRGIsR0FDb0MsSUFEcEMsQ0FDYUEsS0FEYjtBQUFBLFVBQ29CRSxXQURwQixHQUNvQyxJQURwQyxDQUNvQkEsV0FEcEI7OztBQUdSLHVHQUFXSSxHQUFYO0FBQ0E7QUFDQUEsVUFBSUMsV0FBSixHQUFrQkwsV0FBbEI7QUFDQUksVUFBSUUsVUFBSixDQUFlWCxDQUFmLEVBQWtCQyxDQUFsQixFQUFxQkUsS0FBckIsRUFBNEJELE1BQTVCO0FBQ0Q7QUFqQkg7QUFBQTtBQUFBLDZCQW1CVztBQUNQO0FBQ0EsV0FBS0ksS0FBTDtBQUNBLFVBQUksS0FBS0EsS0FBTCxLQUFlLENBQW5CLEVBQXNCOztBQUVwQixlQUFPLElBQVA7QUFDQTtBQUNEO0FBQ0Y7QUEzQkg7QUFBQTtBQUFBLG9DQTZCa0JNLE9BN0JsQixFQTZCMkJDLElBN0IzQixFQTZCaUM7QUFBQTs7QUFFN0IsVUFBSUMsa0JBQWtCRixRQUFRRyxJQUFSLENBQWMsa0JBQVU7QUFDNUMsZUFDRSxPQUFLZixDQUFMLEdBQVNnQixPQUFPaEIsQ0FBUCxHQUFXZ0IsT0FBT2IsS0FBM0IsSUFDQSxPQUFLSCxDQUFMLEdBQVMsT0FBS0csS0FBZCxHQUFzQmEsT0FBT2hCLENBRDdCLElBRUEsT0FBS0MsQ0FBTCxHQUFTZSxPQUFPZixDQUFQLEdBQVdlLE9BQU9kLE1BRjNCLElBR0EsT0FBS0QsQ0FBTCxHQUFTLE9BQUtDLE1BQWQsR0FBdUJjLE9BQU9mLENBSmhDO0FBTUQsT0FQcUIsQ0FBdEI7O0FBU0EsVUFBSWEsZUFBSixFQUFxQjtBQUNuQkQsYUFBS2IsQ0FBTCxHQUFTYyxnQkFBZ0JkLENBQXpCO0FBQ0FhLGFBQUtOLEVBQUwsR0FBV08sZ0JBQWdCUCxFQUEzQjtBQUNBTSxhQUFLTCxHQUFMLEdBQVdNLGdCQUFnQk4sR0FBM0I7QUFDQSxlQUFPLElBQVA7QUFDRCxPQUxELE1BS087QUFDTCxlQUFPLEtBQVA7QUFDRDtBQUVGO0FBakRIO0FBQUE7QUFBQSw2QkFtRFdLLElBbkRYLEVBbURpQkksR0FuRGpCLEVBbURzQjtBQUNsQjtBQUNBLFVBQUlDLE1BQU0sS0FBS0MsbUJBQUwsQ0FBeUIsR0FBekIsRUFBOEIsR0FBOUIsQ0FBVjs7QUFFQSxVQUFJRixRQUFRLE9BQVIsSUFBbUJDLFFBQVEsS0FBL0IsRUFBc0M7QUFDcEMsYUFBS2xCLENBQUwsSUFBVSxFQUFWO0FBQ0QsT0FGRCxNQUVPLElBQUlpQixRQUFRLE9BQVIsSUFBbUJDLFFBQVEsSUFBM0IsSUFBbUMsS0FBS2xCLENBQUwsR0FBUyxLQUFLRyxLQUFkLEdBQXNCLEdBQTdELEVBQWtFO0FBQ3ZFLGFBQUtILENBQUwsSUFBVSxDQUFWO0FBQ0QsT0FGTSxNQUVBLElBQUlpQixRQUFRLE9BQVIsSUFBbUJDLFFBQVEsSUFBM0IsSUFBbUMsS0FBS2xCLENBQUwsR0FBUyxLQUFLRyxLQUFkLEdBQXNCLEdBQTdELEVBQWtFO0FBQ3ZFLGFBQUtILENBQUwsSUFBVSxFQUFWO0FBQ0QsT0FGTSxNQUVBLElBQUlpQixRQUFRLE1BQVIsSUFBa0JDLFFBQVEsS0FBOUIsRUFBcUM7QUFDMUMsYUFBS2xCLENBQUwsSUFBVSxFQUFWO0FBQ0QsT0FGTSxNQUVBLElBQUlpQixRQUFRLE1BQVIsSUFBa0JDLFFBQVEsSUFBMUIsSUFBa0MsS0FBS2xCLENBQUwsR0FBUyxDQUEvQyxFQUFrRDtBQUN2RCxhQUFLQSxDQUFMLElBQVUsQ0FBVjtBQUNELE9BRk0sTUFFQSxJQUFJaUIsUUFBUSxNQUFSLElBQWtCQyxRQUFRLElBQTFCLElBQWtDLEtBQUtsQixDQUFMLEdBQVMsQ0FBL0MsRUFBa0Q7QUFDdkQsYUFBS0EsQ0FBTCxJQUFVLEVBQVY7QUFDRCxPQUZNLE1BRUEsSUFBSWlCLFFBQVEsSUFBUixJQUFnQkMsUUFBUSxLQUE1QixFQUFtQztBQUN4QyxhQUFLakIsQ0FBTCxJQUFVLEVBQVY7QUFDRCxPQUZNLE1BRUEsSUFBSWdCLFFBQVEsSUFBUixJQUFnQkMsUUFBUSxJQUF4QixJQUFnQyxLQUFLakIsQ0FBTCxHQUFTLEVBQTdDLEVBQWlEO0FBQ3RELGFBQUtBLENBQUwsSUFBVSxDQUFWO0FBQ0QsT0FGTSxNQUVBLElBQUlnQixRQUFRLElBQVIsSUFBZ0JDLFFBQVEsSUFBeEIsSUFBZ0MsS0FBS2pCLENBQUwsR0FBUyxFQUE3QyxFQUFpRDtBQUN0RCxhQUFLQSxDQUFMLElBQVUsRUFBVjtBQUNELE9BRk0sTUFFQSxJQUFJZ0IsUUFBUSxNQUFSLElBQWtCQyxRQUFRLEtBQTlCLEVBQXFDO0FBQzFDLGFBQUtqQixDQUFMLElBQVUsRUFBVjtBQUNELE9BRk0sTUFFQSxJQUFJZ0IsUUFBUSxNQUFSLElBQWtCQyxRQUFRLElBQTFCLElBQWtDLEtBQUtqQixDQUFMLEdBQVMsS0FBS0MsTUFBZCxHQUF1QixHQUE3RCxFQUFrRTtBQUN2RSxhQUFLRCxDQUFMLElBQVUsQ0FBVjtBQUNELE9BRk0sTUFFQSxJQUFJZ0IsUUFBUSxNQUFSLElBQWtCQyxRQUFRLElBQTFCLElBQWtDLEtBQUtqQixDQUFMLEdBQVMsS0FBS0MsTUFBZCxHQUF1QixHQUE3RCxFQUFrRTtBQUN2RSxhQUFLRCxDQUFMLElBQVUsRUFBVjtBQUNEO0FBQ0Y7QUFoRkg7O0FBQUE7QUFBQSxFQUFvQ0wsU0FBcEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsSUFBTXdCLE9BQU8sbUJBQUF2QixDQUFRLDZCQUFSLENBQWI7QUFDQSxJQUFNd0IsV0FBVyxtQkFBQXhCLENBQVEscUNBQVIsQ0FBakI7QUFDQSxJQUFNeUIsTUFBTSxtQkFBQXpCLENBQVEsMkJBQVIsQ0FBWjtBQUNBLElBQU0wQixRQUFRLG1CQUFBMUIsQ0FBUSwrQkFBUixDQUFkOztBQUVBQyxPQUFPQyxPQUFQO0FBQ0UsZ0JBQVlVLEdBQVosRUFBaUI7QUFBQTs7QUFDZixRQUFJZSxTQUFTLGdCQUFiO0FBQ0EsUUFBSUMsVUFBVSxrQkFBZDtBQUNBLFFBQUlDLFFBQVEsaUJBQVo7QUFDQSxRQUFJQyxTQUFTLGdCQUFiO0FBQ0EsUUFBSUMsU0FBUyxlQUFiO0FBQ0EsUUFBSUMsU0FBUyxlQUFiO0FBQ0EsUUFBSUMsVUFBVSxpQkFBZDtBQUNBLFFBQUlDLFNBQVMsa0JBQWI7QUFDQSxRQUFJQyxTQUFTLGdCQUFiO0FBQ0EsUUFBSUMsUUFBUSxrQkFBWjtBQUNBLFFBQUlDLE9BQU8sZ0JBQVg7QUFDQSxRQUFJQyxRQUFRLGlCQUFaO0FBQ0EsUUFBSUMsVUFBVSxpQkFBZDtBQUNBLFFBQUlDLFVBQVUsb0JBQWQ7O0FBRUEsU0FBSzVCLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUs2QixNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQ1gsSUFBSWxCLEtBQUosQ0FBVSxDQUFWLEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQkcsS0FBM0IsRUFBa0NBLEtBQWxDLENBRFcsQ0FBYjtBQUdBLFNBQUtiLElBQUwsR0FBWSxDQUNWLElBQUlPLElBQUosQ0FBUyxHQUFULEVBQWMsR0FBZCxFQUFtQixFQUFuQixFQUF1QixFQUF2QixFQUEyQixPQUEzQixFQUFvQ2EsS0FBcEMsQ0FEVSxDQUFaOztBQUlBLFFBQUksS0FBS08sS0FBTCxLQUFlLENBQW5CLEVBQXNCO0FBQ3BCLFdBQUtFLFFBQUwsR0FBZ0IsQ0FDZCxJQUFJckIsUUFBSixDQUFhLENBQUMsRUFBZCxFQUFrQixHQUFsQixFQUF1QixFQUF2QixFQUEyQixFQUEzQixFQUErQlksS0FBL0IsRUFBc0NGLE1BQXRDLEVBQThDLENBQTlDLEVBQWlELENBQWpELENBRGMsRUFFZCxJQUFJVixRQUFKLENBQWEsQ0FBQyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLEVBQWdDYSxJQUFoQyxFQUFzQ0MsS0FBdEMsRUFBNkMsQ0FBN0MsRUFBZ0QsQ0FBaEQsQ0FGYyxFQUdkLElBQUlkLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLEVBQStCVyxNQUEvQixFQUF1Q0MsS0FBdkMsRUFBOEMsQ0FBOUMsRUFBaUQsQ0FBakQsQ0FIYyxFQUlkLElBQUlaLFFBQUosQ0FBYSxDQUFDLEdBQWQsRUFBbUIsR0FBbkIsRUFBd0IsRUFBeEIsRUFBNEIsRUFBNUIsRUFBZ0NjLEtBQWhDLEVBQXVDQyxPQUF2QyxFQUFnRCxDQUFoRCxFQUFtRCxDQUFuRCxDQUpjLEVBS2QsSUFBSWYsUUFBSixDQUFhLENBQUMsRUFBZCxFQUFrQixHQUFsQixFQUF1QixFQUF2QixFQUEyQixFQUEzQixFQUErQmUsT0FBL0IsRUFBd0NDLE9BQXhDLEVBQWlELENBQWpELEVBQW9ELENBQXBELENBTGMsRUFNZCxJQUFJaEIsUUFBSixDQUFhLENBQUMsR0FBZCxFQUFtQixHQUFuQixFQUF3QixFQUF4QixFQUE0QixFQUE1QixFQUFnQ2dCLE9BQWhDLEVBQXlDSixLQUF6QyxFQUFnRCxDQUFoRCxFQUFtRCxDQUFuRCxDQU5jLEVBT2QsSUFBSVosUUFBSixDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsRUFBdkIsRUFBMkIsRUFBM0IsRUFBK0JZLEtBQS9CLEVBQXNDRSxLQUF0QyxFQUE2QyxDQUFDLENBQTlDLEVBQWlELENBQWpELENBUGMsRUFRZCxJQUFJZCxRQUFKLENBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixFQUF2QixFQUEyQixFQUEzQixFQUErQlcsTUFBL0IsRUFBdUNJLE9BQXZDLEVBQWdELENBQUMsQ0FBakQsRUFBb0QsQ0FBcEQsQ0FSYyxFQVNkLElBQUlmLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLEVBQStCSSxPQUEvQixFQUF3Q1MsSUFBeEMsRUFBOEMsQ0FBQyxDQUEvQyxFQUFrRCxDQUFsRCxDQVRjLENBQWhCO0FBV0EsV0FBS1MsR0FBTCxHQUFXLENBQ1QsSUFBSXJCLEdBQUosQ0FBUyxDQUFDLEVBQVYsRUFBYyxHQUFkLEVBQW1CLEVBQW5CLEVBQXVCLEdBQXZCLEVBQTRCSyxNQUE1QixFQUFvQ0gsTUFBcEMsRUFBNEMsQ0FBNUMsRUFBK0MsQ0FBL0MsQ0FEUyxFQUVULElBQUlGLEdBQUosQ0FBUyxHQUFULEVBQWMsR0FBZCxFQUFtQixFQUFuQixFQUF1QixHQUF2QixFQUE0QkssTUFBNUIsRUFBb0NILE1BQXBDLEVBQTRDLENBQTVDLEVBQStDLENBQS9DLENBRlMsRUFHVCxJQUFJRixHQUFKLENBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsRUFBbkIsRUFBdUIsR0FBdkIsRUFBNEJLLE1BQTVCLEVBQW9DQyxNQUFwQyxFQUE0QyxDQUFDLENBQTdDLEVBQWdELENBQWhELENBSFMsRUFJVCxJQUFJTixHQUFKLENBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsRUFBbkIsRUFBdUIsR0FBdkIsRUFBNEJLLE1BQTVCLEVBQW9DQyxNQUFwQyxFQUE0QyxDQUFDLENBQTdDLEVBQWdELENBQWhELENBSlMsRUFLVCxJQUFJTixHQUFKLENBQVMsQ0FBQyxHQUFWLEVBQWUsR0FBZixFQUFvQixFQUFwQixFQUF3QixHQUF4QixFQUE2QkssTUFBN0IsRUFBcUNFLE1BQXJDLEVBQTZDLENBQTdDLEVBQWdELENBQWhELENBTFMsRUFNVCxJQUFJUCxHQUFKLENBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsRUFBbkIsRUFBdUIsR0FBdkIsRUFBNEJLLE1BQTVCLEVBQW9DRSxNQUFwQyxFQUE0QyxDQUE1QyxFQUErQyxDQUEvQyxDQU5TLEVBT1QsSUFBSVAsR0FBSixDQUFTLEdBQVQsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEdBQXRCLEVBQTJCSyxNQUEzQixFQUFtQ0csT0FBbkMsRUFBNEMsQ0FBQyxDQUE3QyxFQUFnRCxDQUFoRCxDQVBTLENBQVg7QUFTRCxLQXJCRCxNQXFCTyxJQUFJLEtBQUtVLEtBQUwsS0FBZSxDQUFuQixFQUFzQjtBQUMzQixXQUFLRSxRQUFMLEdBQWdCLENBQ2QsSUFBSXJCLFFBQUosQ0FBYSxDQUFDLEVBQWQsRUFBa0IsR0FBbEIsRUFBdUIsRUFBdkIsRUFBMkIsRUFBM0IsRUFBK0JZLEtBQS9CLEVBQXNDRixNQUF0QyxFQUE4QyxDQUE5QyxFQUFpRCxDQUFqRCxDQURjLEVBRWQsSUFBSVYsUUFBSixDQUFhLENBQUMsR0FBZCxFQUFtQixHQUFuQixFQUF3QixFQUF4QixFQUE0QixFQUE1QixFQUFnQ0ssS0FBaEMsRUFBdUNTLEtBQXZDLEVBQThDLENBQTlDLEVBQWlELENBQWpELENBRmMsRUFHZCxJQUFJZCxRQUFKLENBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixFQUF2QixFQUEyQixFQUEzQixFQUErQmMsS0FBL0IsRUFBc0NDLE9BQXRDLEVBQStDLENBQS9DLEVBQWtELENBQWxELENBSGMsRUFJZCxJQUFJZixRQUFKLENBQWEsQ0FBQyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEVBQXhCLEVBQTRCLEdBQTVCLEVBQWlDZSxPQUFqQyxFQUEwQ0MsT0FBMUMsRUFBbUQsQ0FBbkQsRUFBc0QsQ0FBdEQsQ0FKYyxFQUtkLElBQUloQixRQUFKLENBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixFQUF2QixFQUEyQixHQUEzQixFQUFnQ2dCLE9BQWhDLEVBQXlDSixLQUF6QyxFQUFnRCxDQUFoRCxFQUFtRCxDQUFuRCxDQUxjLEVBTWQsSUFBSVosUUFBSixDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsRUFBdkIsRUFBMkIsRUFBM0IsRUFBK0JZLEtBQS9CLEVBQXNDRSxLQUF0QyxFQUE2QyxDQUE3QyxFQUFnRCxDQUFoRCxDQU5jLEVBT2QsSUFBSWQsUUFBSixDQUFhLENBQUMsRUFBZCxFQUFrQixHQUFsQixFQUF1QixFQUF2QixFQUEyQixFQUEzQixFQUErQlUsTUFBL0IsRUFBdUNOLE9BQXZDLEVBQWdELENBQWhELEVBQW1ELENBQW5ELENBUGMsRUFRZCxJQUFJSixRQUFKLENBQWEsQ0FBQyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLEVBQWdDVyxNQUFoQyxFQUF3Q0ksT0FBeEMsRUFBaUQsQ0FBakQsRUFBb0QsQ0FBcEQsQ0FSYyxFQVNkLElBQUlmLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLEVBQStCSSxPQUEvQixFQUF3Q1MsSUFBeEMsRUFBOEMsQ0FBQyxDQUEvQyxFQUFrRCxDQUFsRCxDQVRjLEVBVWQsSUFBSWIsUUFBSixDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsRUFBdkIsRUFBMkIsRUFBM0IsRUFBK0JZLEtBQS9CLEVBQXNDRCxNQUF0QyxFQUE4QyxDQUFDLENBQS9DLEVBQWtELENBQWxELENBVmMsRUFXZCxJQUFJWCxRQUFKLENBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixFQUF2QixFQUEyQixFQUEzQixFQUErQmMsS0FBL0IsRUFBc0NWLE9BQXRDLEVBQStDLENBQUMsQ0FBaEQsRUFBbUQsQ0FBbkQsQ0FYYyxFQVlkLElBQUlKLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLEVBQStCVSxNQUEvQixFQUF1Q0csSUFBdkMsRUFBNkMsQ0FBQyxDQUE5QyxFQUFpRCxDQUFqRCxDQVpjLENBQWhCO0FBY0EsV0FBS1MsR0FBTCxHQUFXLENBQ1QsSUFBSXJCLEdBQUosQ0FBUyxDQUFULEVBQVksR0FBWixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QkssTUFBekIsRUFBaUNILE1BQWpDLEVBQXlDLENBQXpDLEVBQTRDLEdBQTVDLENBRFMsRUFFVCxJQUFJRixHQUFKLENBQVMsQ0FBQyxFQUFWLEVBQWMsR0FBZCxFQUFtQixFQUFuQixFQUF1QixFQUF2QixFQUEyQkssTUFBM0IsRUFBbUNDLE1BQW5DLEVBQTJDLENBQTNDLEVBQThDLEdBQTlDLENBRlMsRUFHVCxJQUFJTixHQUFKLENBQVMsQ0FBQyxHQUFWLEVBQWUsR0FBZixFQUFvQixFQUFwQixFQUF3QixFQUF4QixFQUE0QkssTUFBNUIsRUFBb0NFLE1BQXBDLEVBQTRDLENBQTVDLEVBQStDLEdBQS9DLENBSFMsRUFJVCxJQUFJUCxHQUFKLENBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsRUFBbkIsRUFBdUIsR0FBdkIsRUFBNEJLLE1BQTVCLEVBQW9DRyxPQUFwQyxFQUE2QyxDQUFDLENBQTlDLEVBQWlELENBQWpELENBSlMsRUFLVCxJQUFJUixHQUFKLENBQVMsRUFBVCxFQUFhLEdBQWIsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEJLLE1BQTFCLEVBQWtDSCxNQUFsQyxFQUEwQyxDQUExQyxFQUE2QyxDQUE3QyxDQUxTLEVBTVQsSUFBSUYsR0FBSixDQUFTLEVBQVQsRUFBYSxHQUFiLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCSyxNQUExQixFQUFrQ0MsTUFBbEMsRUFBMEMsQ0FBMUMsRUFBNkMsQ0FBN0MsQ0FOUyxFQU9ULElBQUlOLEdBQUosQ0FBUyxHQUFULEVBQWMsR0FBZCxFQUFtQixFQUFuQixFQUF1QixFQUF2QixFQUEyQkssTUFBM0IsRUFBbUNFLE1BQW5DLEVBQTJDLENBQTNDLEVBQThDLENBQTlDLENBUFMsRUFRVCxJQUFJUCxHQUFKLENBQVMsR0FBVCxFQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0IsR0FBdEIsRUFBMkJLLE1BQTNCLEVBQW1DQyxNQUFuQyxFQUEyQyxDQUFDLENBQTVDLEVBQStDLENBQS9DLENBUlMsRUFTVCxJQUFJTixHQUFKLENBQVMsR0FBVCxFQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0IsR0FBdEIsRUFBMkJLLE1BQTNCLEVBQW1DQyxNQUFuQyxFQUEyQyxDQUFDLENBQTVDLEVBQStDLENBQS9DLENBVFMsQ0FBWDtBQVdELEtBMUJNLE1BMEJBLElBQUksS0FBS1ksS0FBTCxLQUFlLENBQW5CLEVBQXNCO0FBQzNCLFdBQUtFLFFBQUwsR0FBZ0IsQ0FDZCxJQUFJckIsUUFBSixDQUFhLENBQUMsRUFBZCxFQUFrQixHQUFsQixFQUF1QixFQUF2QixFQUEyQixFQUEzQixFQUErQlksS0FBL0IsRUFBc0NGLE1BQXRDLEVBQThDLENBQTlDLEVBQWlELENBQWpELENBRGMsRUFFZCxJQUFJVixRQUFKLENBQWEsQ0FBQyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLEVBQWdDSyxLQUFoQyxFQUF1Q1MsS0FBdkMsRUFBOEMsQ0FBOUMsRUFBaUQsQ0FBakQsQ0FGYyxFQUdkLElBQUlkLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLEVBQStCYyxLQUEvQixFQUFzQ0MsT0FBdEMsRUFBK0MsQ0FBL0MsRUFBa0QsQ0FBbEQsQ0FIYyxFQUlkLElBQUlmLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLEVBQStCZ0IsT0FBL0IsRUFBd0NGLEtBQXhDLEVBQStDLENBQS9DLEVBQWtELENBQWxELENBSmMsRUFLZCxJQUFJZCxRQUFKLENBQWEsQ0FBQyxDQUFkLEVBQWlCLEdBQWpCLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLEVBQThCVSxNQUE5QixFQUFzQ0csSUFBdEMsRUFBNEMsQ0FBNUMsRUFBK0MsQ0FBL0MsQ0FMYyxFQU1kLElBQUliLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLEVBQStCYyxLQUEvQixFQUFzQ0QsSUFBdEMsRUFBNEMsQ0FBNUMsRUFBK0MsQ0FBL0MsQ0FOYyxFQU9kLElBQUliLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLEVBQStCZ0IsT0FBL0IsRUFBd0NMLE1BQXhDLEVBQWdELENBQWhELEVBQW1ELENBQW5ELENBUGMsRUFRZCxJQUFJWCxRQUFKLENBQWEsQ0FBQyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLEVBQWdDWSxLQUFoQyxFQUF1Q0UsS0FBdkMsRUFBOEMsQ0FBOUMsRUFBaUQsQ0FBakQsQ0FSYyxFQVNkLElBQUlkLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLEVBQStCVyxNQUEvQixFQUF1Q0ksT0FBdkMsRUFBZ0QsQ0FBaEQsRUFBbUQsQ0FBbkQsQ0FUYyxFQVVkLElBQUlmLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLEVBQStCVyxNQUEvQixFQUF1Q0ksT0FBdkMsRUFBZ0QsQ0FBaEQsRUFBbUQsQ0FBbkQsQ0FWYyxFQVdkLElBQUlmLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLEVBQStCSSxPQUEvQixFQUF3Q1MsSUFBeEMsRUFBOEMsQ0FBQyxDQUEvQyxFQUFrRCxDQUFsRCxDQVhjLEVBWWQsSUFBSWIsUUFBSixDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsRUFBdkIsRUFBMkIsRUFBM0IsRUFBK0JZLEtBQS9CLEVBQXNDRCxNQUF0QyxFQUE4QyxDQUFDLENBQS9DLEVBQWtELENBQWxELENBWmMsRUFhZCxJQUFJWCxRQUFKLENBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixFQUF2QixFQUEyQixFQUEzQixFQUErQmMsS0FBL0IsRUFBc0NWLE9BQXRDLEVBQStDLENBQUMsQ0FBaEQsRUFBbUQsQ0FBbkQsQ0FiYyxFQWNkLElBQUlKLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLEVBQStCVSxNQUEvQixFQUF1Q0csSUFBdkMsRUFBNkMsQ0FBQyxDQUE5QyxFQUFpRCxDQUFqRCxDQWRjLENBQWhCO0FBZ0JBLFdBQUtTLEdBQUwsR0FBVyxDQUNULElBQUlyQixHQUFKLENBQVMsQ0FBVCxFQUFZLEdBQVosRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUJLLE1BQXpCLEVBQWlDSCxNQUFqQyxFQUF5QyxDQUF6QyxFQUE0QyxHQUE1QyxDQURTLEVBRVQsSUFBSUYsR0FBSixDQUFTLENBQUMsRUFBVixFQUFjLEdBQWQsRUFBbUIsRUFBbkIsRUFBdUIsRUFBdkIsRUFBMkJLLE1BQTNCLEVBQW1DQyxNQUFuQyxFQUEyQyxDQUEzQyxFQUE4QyxHQUE5QyxDQUZTLEVBR1QsSUFBSU4sR0FBSixDQUFTLENBQUMsR0FBVixFQUFlLEdBQWYsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEJLLE1BQTVCLEVBQW9DRSxNQUFwQyxFQUE0QyxDQUE1QyxFQUErQyxHQUEvQyxDQUhTLEVBSVQsSUFBSVAsR0FBSixDQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLEVBQW5CLEVBQXVCLEdBQXZCLEVBQTRCSyxNQUE1QixFQUFvQ0csT0FBcEMsRUFBNkMsQ0FBQyxDQUE5QyxFQUFpRCxDQUFqRCxDQUpTLEVBS1QsSUFBSVIsR0FBSixDQUFTLEVBQVQsRUFBYSxHQUFiLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCSyxNQUExQixFQUFrQ0gsTUFBbEMsRUFBMEMsQ0FBMUMsRUFBNkMsSUFBN0MsQ0FMUyxFQU1ULElBQUlGLEdBQUosQ0FBUyxFQUFULEVBQWEsR0FBYixFQUFrQixFQUFsQixFQUFzQixFQUF0QixFQUEwQkssTUFBMUIsRUFBa0NDLE1BQWxDLEVBQTBDLENBQTFDLEVBQTZDLElBQTdDLENBTlMsRUFPVCxJQUFJTixHQUFKLENBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsRUFBbkIsRUFBdUIsRUFBdkIsRUFBMkJLLE1BQTNCLEVBQW1DRSxNQUFuQyxFQUEyQyxDQUEzQyxFQUE4QyxJQUE5QyxDQVBTLEVBUVQsSUFBSVAsR0FBSixDQUFTLEdBQVQsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEdBQXRCLEVBQTJCSyxNQUEzQixFQUFtQ0MsTUFBbkMsRUFBMkMsQ0FBQyxDQUE1QyxFQUErQyxDQUEvQyxDQVJTLEVBU1QsSUFBSU4sR0FBSixDQUFTLEdBQVQsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEdBQXRCLEVBQTJCSyxNQUEzQixFQUFtQ0MsTUFBbkMsRUFBMkMsQ0FBQyxDQUE1QyxFQUErQyxDQUEvQyxDQVRTLENBQVg7QUFZRCxLQTdCTSxNQTZCQSxJQUFJLEtBQUtZLEtBQUwsSUFBYyxDQUFsQixFQUFxQjtBQUMxQjtBQUNEO0FBRUY7O0FBR0Q7OztBQWhIRjtBQUFBO0FBQUEsOEJBaUhZO0FBQUE7O0FBQ1IsV0FBS0MsS0FBTCxDQUFXRyxPQUFYLENBQXFCLGlCQUFTO0FBQzVCO0FBQ0FILGNBQU1JLElBQU4sQ0FBVyxNQUFLcEMsR0FBaEI7QUFDRCxPQUhEO0FBSUEsV0FBS2tDLEdBQUwsQ0FBU0MsT0FBVCxDQUFtQixlQUFPO0FBQ3hCLGNBQUtFLFNBQUwsQ0FBZUgsR0FBZjtBQUNBQSxZQUFJRSxJQUFKLENBQVMsTUFBS3BDLEdBQWQ7QUFDRCxPQUhEO0FBSUEsV0FBS0ksSUFBTCxDQUFVK0IsT0FBVixDQUFtQixnQkFBUTtBQUN6QixjQUFLRyxVQUFMLENBQWdCbEMsSUFBaEI7QUFDQUEsYUFBS2dDLElBQUwsQ0FBVSxNQUFLcEMsR0FBZjtBQUNELE9BSEQ7QUFJQSxXQUFLaUMsUUFBTCxDQUFjRSxPQUFkLENBQXVCLG9CQUFZO0FBQ2pDLGNBQUtJLGNBQUwsQ0FBb0JOLFFBQXBCO0FBQ0FBLGlCQUFTRyxJQUFULENBQWMsTUFBS3BDLEdBQW5CO0FBQ0QsT0FIRDtBQUlEO0FBbElIO0FBQUE7QUFBQSwrQkFvSWFJLElBcEliLEVBb0ltQjtBQUNmLFVBQUlBLEtBQUtvQyxlQUFMLENBQXFCLEtBQUtQLFFBQTFCLEVBQW9DN0IsSUFBcEMsQ0FBSixFQUErQztBQUM3QyxhQUFLcUMsT0FBTDtBQUNELE9BRkQsTUFFTyxJQUFJckMsS0FBS29DLGVBQUwsQ0FBcUIsS0FBS04sR0FBMUIsRUFBK0I5QixJQUEvQixDQUFKLEVBQTBDO0FBQy9DO0FBQ0QsT0FGTSxNQUVBLElBQUlBLEtBQUtvQyxlQUFMLENBQXFCLEtBQUtSLEtBQTFCLEVBQWlDNUIsSUFBakMsQ0FBSixFQUE0QztBQUNqRCxhQUFLcUMsT0FBTDtBQUNELE9BRk0sTUFFQTtBQUNMLGFBQUtDLGNBQUwsQ0FBb0J0QyxJQUFwQjtBQUNEO0FBQ0Y7QUE5SUg7QUFBQTtBQUFBLG1DQWdKaUI2QixRQWhKakIsRUFnSjJCO0FBQ3ZCLFVBQUlBLFNBQVMxQyxDQUFULElBQWMsR0FBbEIsRUFBdUI7QUFDckIwQyxpQkFBUzFDLENBQVQsR0FBYSxDQUFiO0FBQ0E7QUFDRCxPQUhELE1BR08sSUFBSTBDLFNBQVMxQyxDQUFULElBQWMsQ0FBQyxHQUFuQixFQUF3QjtBQUM3QjBDLGlCQUFTMUMsQ0FBVCxHQUFhLEdBQWI7QUFDRCxPQUZNLE1BRUE7QUFDTDBDLGlCQUFTVSxJQUFUO0FBQ0Q7QUFDRjtBQXpKSDtBQUFBO0FBQUEsOEJBMkpZVCxHQTNKWixFQTJKaUI7QUFDYixVQUFJQSxJQUFJM0MsQ0FBSixJQUFTLEdBQWIsRUFBa0I7QUFDaEIyQyxZQUFJM0MsQ0FBSixHQUFRLENBQVI7QUFDRCxPQUZELE1BRU8sSUFBSTJDLElBQUkzQyxDQUFKLElBQVMsQ0FBQyxHQUFkLEVBQW1CO0FBQ3hCMkMsWUFBSTNDLENBQUosR0FBUSxHQUFSO0FBQ0QsT0FGTSxNQUVBO0FBQ0wyQyxZQUFJUyxJQUFKO0FBQ0Q7QUFDRjtBQW5LSDtBQUFBO0FBQUEsOEJBcUtZO0FBQ1IsV0FBS2IsUUFBTCxHQUFnQixJQUFoQjtBQUNEO0FBdktIO0FBQUE7QUFBQSw2QkF5S1c7QUFDUCxhQUFPLEtBQUtBLFFBQVo7QUFDRDtBQTNLSDtBQUFBO0FBQUEsa0NBNktnQjtBQUNaLFdBQUtELE1BQUwsR0FBYyxDQUFDLEtBQUtBLE1BQXBCO0FBQ0Q7QUEvS0g7QUFBQTtBQUFBLG1DQWlMaUJlLENBakxqQixFQWlMb0I7O0FBRWhCLFVBQUlBLEVBQUVDLEdBQUYsS0FBVSxZQUFkLEVBQTRCO0FBQzFCLFlBQUlDLFFBQVEsT0FBWjs7QUFFQSxhQUFLMUMsSUFBTCxDQUFVK0IsT0FBVixDQUFtQixnQkFBUTtBQUN6Qi9CLGVBQUsyQyxRQUFMLENBQWMzQyxJQUFkLEVBQW9CMEMsS0FBcEI7QUFDRCxTQUZEO0FBR0QsT0FORCxNQU1PLElBQUlGLEVBQUVDLEdBQUYsS0FBVSxXQUFkLEVBQTJCO0FBQ2hDLFlBQUlHLE9BQU8sTUFBWDs7QUFFQSxhQUFLNUMsSUFBTCxDQUFVK0IsT0FBVixDQUFtQixnQkFBUTtBQUN6Qi9CLGVBQUsyQyxRQUFMLENBQWMzQyxJQUFkLEVBQW9CNEMsSUFBcEI7QUFDRCxTQUZEO0FBR0QsT0FOTSxNQU1BLElBQUlKLEVBQUVDLEdBQUYsS0FBVSxXQUFkLEVBQTJCO0FBQ2hDLFlBQUlJLE9BQU8sTUFBWDs7QUFFQSxhQUFLN0MsSUFBTCxDQUFVK0IsT0FBVixDQUFtQixnQkFBUTtBQUN6Qi9CLGVBQUsyQyxRQUFMLENBQWMzQyxJQUFkLEVBQW9CNkMsSUFBcEI7QUFDRCxTQUZEO0FBR0QsT0FOTSxNQU1BLElBQUlMLEVBQUVDLEdBQUYsS0FBVSxTQUFkLEVBQXlCO0FBQzlCLFlBQUlLLEtBQUssSUFBVDs7QUFFQSxhQUFLOUMsSUFBTCxDQUFVK0IsT0FBVixDQUFtQixnQkFBUTtBQUN6Qi9CLGVBQUsyQyxRQUFMLENBQWMzQyxJQUFkLEVBQW9COEMsRUFBcEI7QUFDRCxTQUZEO0FBR0Q7QUFDRjs7QUFFRDs7QUE5TUY7QUFBQTtBQUFBLHFDQStNbUI7QUFDakI7QUFDRSxVQUFNbEQsTUFBTSxLQUFLQSxHQUFqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0FBLFVBQUltRCxTQUFKLEdBQWdCLGtCQUFoQjtBQUNBbkQsVUFBSW9ELFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEdBQW5CLEVBQXdCLEVBQXhCO0FBQ0FwRCxVQUFJb0QsUUFBSixDQUFhLENBQWIsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsRUFBMUI7QUFDQXBELFVBQUlvRCxRQUFKLENBQWEsQ0FBYixFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixFQUExQjs7QUFFQTtBQUNBcEQsVUFBSXFELFNBQUo7QUFDQXJELFVBQUlzRCxNQUFKLENBQVcsQ0FBWCxFQUFjLEdBQWQ7QUFDQXRELFVBQUl1RCxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtBQUNBdkQsVUFBSUMsV0FBSixHQUFrQixvQkFBbEI7QUFDQUQsVUFBSXdELFdBQUosQ0FBZ0IsQ0FBQyxFQUFELENBQWhCO0FBQ0F4RCxVQUFJeUQsV0FBSixHQUFrQixDQUFsQjtBQUNBekQsVUFBSTBELE1BQUo7O0FBRUExRCxVQUFJcUQsU0FBSjtBQUNBckQsVUFBSXNELE1BQUosQ0FBVyxDQUFYLEVBQWMsR0FBZDtBQUNBdEQsVUFBSXVELE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0FBQ0F2RCxVQUFJQyxXQUFKLEdBQWtCLG9CQUFsQjtBQUNBRCxVQUFJd0QsV0FBSixDQUFnQixDQUFDLEVBQUQsQ0FBaEI7QUFDQXhELFVBQUl5RCxXQUFKLEdBQWtCLENBQWxCO0FBQ0F6RCxVQUFJMEQsTUFBSjs7QUFFQTFELFVBQUlxRCxTQUFKO0FBQ0FyRCxVQUFJc0QsTUFBSixDQUFXLENBQVgsRUFBYyxHQUFkO0FBQ0F0RCxVQUFJdUQsTUFBSixDQUFXLEdBQVgsRUFBZ0IsR0FBaEI7QUFDQXZELFVBQUlDLFdBQUosR0FBa0Isb0JBQWxCO0FBQ0FELFVBQUl3RCxXQUFKLENBQWdCLENBQUMsRUFBRCxDQUFoQjtBQUNBeEQsVUFBSXlELFdBQUosR0FBa0IsQ0FBbEI7QUFDQXpELFVBQUkwRCxNQUFKOztBQUVBMUQsVUFBSXFELFNBQUo7QUFDQXJELFVBQUlzRCxNQUFKLENBQVcsQ0FBWCxFQUFjLEdBQWQ7QUFDQXRELFVBQUl1RCxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQjtBQUNBdkQsVUFBSUMsV0FBSixHQUFrQixtQkFBbEI7QUFDQUQsVUFBSXdELFdBQUosQ0FBZ0IsQ0FBQyxDQUFELENBQWhCO0FBQ0F4RCxVQUFJeUQsV0FBSixHQUFrQixDQUFsQjtBQUNBekQsVUFBSTBELE1BQUo7O0FBRUExRCxVQUFJcUQsU0FBSjtBQUNBckQsVUFBSXNELE1BQUosQ0FBVyxDQUFYLEVBQWMsR0FBZDtBQUNBdEQsVUFBSXVELE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCO0FBQ0F2RCxVQUFJQyxXQUFKLEdBQWtCLG1CQUFsQjtBQUNBRCxVQUFJd0QsV0FBSixDQUFnQixDQUFDLENBQUQsQ0FBaEI7QUFDQXhELFVBQUl5RCxXQUFKLEdBQWtCLENBQWxCO0FBQ0F6RCxVQUFJMEQsTUFBSjtBQUNEO0FBcFFIOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEFyRSxPQUFPQyxPQUFQO0FBQ0UscUJBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsTUFBbEIsRUFBMEJDLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3QztBQUFBOztBQUN0QyxTQUFLSixDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLRyxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUs2RCxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUs1RCxHQUFMLEdBQVcsQ0FBWDtBQUNBLFNBQUs2RCxHQUFMLEdBQVcsQ0FBWDtBQUNEOztBQVhIO0FBQUE7QUFBQSx3Q0Fjc0JDLFdBZHRCLEVBY21DQyxZQWRuQyxFQWNpRDtBQUM3QyxhQUNFLEtBQUt2RSxDQUFMLEdBQVMsRUFBVCxJQUNBLEtBQUtBLENBQUwsR0FBUyxLQUFLRyxLQUFkLEdBQXNCbUUsV0FEdEIsSUFFQSxLQUFLckUsQ0FBTCxHQUFTLEVBRlQsSUFHQSxLQUFLQSxDQUFMLEdBQVMsS0FBS0MsTUFBZCxHQUF1QnFFLFlBSnpCO0FBTUQ7QUFyQkg7QUFBQTtBQUFBLHlCQXVCTzlELEdBdkJQLEVBdUJZO0FBQUEsVUFDQVQsQ0FEQSxHQUMrQixJQUQvQixDQUNBQSxDQURBO0FBQUEsVUFDR0MsQ0FESCxHQUMrQixJQUQvQixDQUNHQSxDQURIO0FBQUEsVUFDTUMsTUFETixHQUMrQixJQUQvQixDQUNNQSxNQUROO0FBQUEsVUFDY0MsS0FEZCxHQUMrQixJQUQvQixDQUNjQSxLQURkO0FBQUEsVUFDcUJDLEtBRHJCLEdBQytCLElBRC9CLENBQ3FCQSxLQURyQjs7O0FBR1JLLFVBQUltRCxTQUFKLEdBQWdCeEQsS0FBaEI7QUFDQUssVUFBSW9ELFFBQUosQ0FBYTdELENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CRSxLQUFuQixFQUEwQkQsTUFBMUI7QUFDRDtBQTVCSDtBQUFBO0FBQUEsMkJBOEJTO0FBQ0wsV0FBS0YsQ0FBTCxJQUFVLEtBQUtPLEVBQUwsR0FBVSxLQUFLQyxHQUF6QjtBQUNBLFdBQUtQLENBQUwsSUFBVSxLQUFLbUUsRUFBTCxHQUFVLEtBQUtDLEdBQXpCO0FBQ0Q7QUFqQ0g7QUFBQTtBQUFBLG9DQW1Da0JHLFNBbkNsQixFQW1DNkI7QUFDekIsV0FBS2pFLEVBQUwsR0FBVWlFLFVBQVVqRSxFQUFwQjtBQUNBLFdBQUs2RCxFQUFMLEdBQVVJLFVBQVVKLEVBQXBCO0FBQ0Q7QUF0Q0g7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNeEUsWUFBWSxtQkFBQUMsQ0FBUSx1Q0FBUixDQUFsQjs7QUFFQTtBQUNBQyxPQUFPQyxPQUFQO0FBQUE7O0FBQ0UsZUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxNQUFsQixFQUEwQkMsS0FBMUIsRUFBaUNDLEtBQWpDLEVBQXdDQyxXQUF4QyxFQUFzRTtBQUFBLFFBQWpCRSxFQUFpQix1RUFBWixDQUFZO0FBQUEsUUFBVEMsR0FBUyx1RUFBSCxDQUFHOztBQUFBOztBQUFBLDBHQUM5RFIsQ0FEOEQsRUFDM0RDLENBRDJELEVBQ3hEQyxNQUR3RCxFQUNoREMsS0FEZ0QsRUFDekNDLEtBRHlDOztBQUdwRSxVQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFVBQUtMLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFVBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtHLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFVBQUs2RCxFQUFMLEdBQVUsQ0FBVjtBQUNBLFVBQUs1RCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxVQUFLNkQsR0FBTCxHQUFXLENBQVg7QUFab0U7QUFhckU7O0FBZEg7QUFBQTtBQUFBLHlCQWVPNUQsR0FmUCxFQWVZO0FBQUEsVUFDRFQsQ0FEQyxHQUNvQyxJQURwQyxDQUNEQSxDQURDO0FBQUEsVUFDRUMsQ0FERixHQUNvQyxJQURwQyxDQUNFQSxDQURGO0FBQUEsVUFDS0MsTUFETCxHQUNvQyxJQURwQyxDQUNLQSxNQURMO0FBQUEsVUFDYUMsS0FEYixHQUNvQyxJQURwQyxDQUNhQSxLQURiO0FBQUEsVUFDb0JFLFdBRHBCLEdBQ29DLElBRHBDLENBQ29CQSxXQURwQjs7QUFHUjs7QUFDQSxxR0FBV0ksR0FBWDs7QUFFQTtBQUNBQSxVQUFJQyxXQUFKLEdBQWtCTCxXQUFsQjtBQUNBSSxVQUFJRSxVQUFKLENBQWVYLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCRSxLQUFyQixFQUE0QkQsTUFBNUI7QUFDRDtBQUNEOztBQXpCRjs7QUFBQTtBQUFBLEVBQW1DTixTQUFuQyxFOzs7Ozs7Ozs7Ozs7OztBQ0hBLElBQU02RSxPQUFPLG1CQUFBNUUsQ0FBUSw2QkFBUixDQUFiOztBQUVBLElBQU02RSxTQUFTQyxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQWY7QUFDQSxJQUFNbkUsTUFBTWlFLE9BQU9HLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQU1DLE9BQU8sSUFBSUwsSUFBSixDQUFTaEUsR0FBVCxDQUFiOztBQUVBO0FBQ0FzRSxPQUFPQyxxQkFBUCxDQUE2QkMsUUFBN0I7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjs7QUFFbEIsTUFBSUgsS0FBS0ksTUFBTCxFQUFKLEVBQW1CO0FBQ2pCO0FBQ0E7O0FBRUQsR0FKRCxNQUlPO0FBQ0w7QUFDQXpFLFFBQUkwRSxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQlQsT0FBT3ZFLEtBQTNCLEVBQWtDdUUsT0FBT3hFLE1BQXpDO0FBQ0E0RSxTQUFLTSxjQUFMO0FBQ0E7QUFDQU4sU0FBS08sT0FBTDtBQUNEOztBQUVEO0FBQ0FOLFNBQU9DLHFCQUFQLENBQTZCQyxRQUE3QjtBQUNEOztBQUVEO0FBQ0FOLFNBQVNXLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDbkMsY0FBckM7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkUsQ0FBeEIsRUFBMkI7QUFDekJBLElBQUVrQyxjQUFGO0FBQ0FULE9BQUszQixjQUFMLENBQW9CRSxDQUFwQjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDRCxJQUFNekQsWUFBWSxtQkFBQUMsQ0FBUSx1Q0FBUixDQUFsQjs7QUFFQTtBQUNBQyxPQUFPQyxPQUFQO0FBQUE7O0FBQ0Usb0JBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsTUFBbEIsRUFBMEJDLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3Q0MsV0FBeEMsRUFBc0U7QUFBQSxRQUFqQkUsRUFBaUIsdUVBQVosQ0FBWTtBQUFBLFFBQVRDLEdBQVMsdUVBQUgsQ0FBRzs7QUFBQTs7QUFBQSxvSEFFOURSLENBRjhELEVBRTNEQyxDQUYyRCxFQUV4REMsTUFGd0QsRUFFaERDLEtBRmdELEVBRXpDQyxLQUZ5QztBQUNwRTs7O0FBR0EsVUFBS0osQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsVUFBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxVQUFLRSxFQUFMLEdBQVVBLEVBQVY7QUFDQSxVQUFLNkQsRUFBTCxHQUFVLENBQVY7QUFDQSxVQUFLNUQsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsVUFBSzZELEdBQUwsR0FBVyxDQUFYO0FBYm9FO0FBY3JFOztBQWZIO0FBQUE7QUFBQSx5QkFpQk81RCxHQWpCUCxFQWlCWTtBQUFBLFVBQ0RULENBREMsR0FDb0MsSUFEcEMsQ0FDREEsQ0FEQztBQUFBLFVBQ0VDLENBREYsR0FDb0MsSUFEcEMsQ0FDRUEsQ0FERjtBQUFBLFVBQ0tDLE1BREwsR0FDb0MsSUFEcEMsQ0FDS0EsTUFETDtBQUFBLFVBQ2FDLEtBRGIsR0FDb0MsSUFEcEMsQ0FDYUEsS0FEYjtBQUFBLFVBQ29CRSxXQURwQixHQUNvQyxJQURwQyxDQUNvQkEsV0FEcEI7O0FBR1I7O0FBQ0EsK0dBQVdJLEdBQVg7O0FBRUE7QUFDQUEsVUFBSUMsV0FBSixHQUFrQkwsV0FBbEI7QUFDQUksVUFBSUUsVUFBSixDQUFlWCxDQUFmLEVBQWtCQyxDQUFsQixFQUFxQkUsS0FBckIsRUFBNEJELE1BQTVCO0FBQ0Q7QUExQkg7O0FBQUE7QUFBQSxFQUF3Q04sU0FBeEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsSUFBTUEsWUFBWSxtQkFBQUMsQ0FBUSx1Q0FBUixDQUFsQjs7QUFFQTtBQUNBQyxPQUFPQyxPQUFQO0FBQUE7O0FBQ0UsaUJBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsTUFBbEIsRUFBMEJDLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3QztBQUFBOztBQUN0QztBQURzQyx5R0FFaENKLENBRmdDLEVBRTdCQyxDQUY2QixFQUUxQkMsTUFGMEIsRUFFbEJDLEtBRmtCLEVBRVhDLEtBRlc7QUFHdkM7O0FBSkg7QUFBQTtBQUFBLHlCQU1PSyxHQU5QLEVBTVk7QUFDUix5R0FBV0EsR0FBWDtBQUNEO0FBUkg7O0FBQUE7QUFBQSxFQUFxQ2IsU0FBckMsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxuLy8gZXh0ZW5kIEdhbWVQaWVjZSBjbGFzc1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBGcm9nIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGJvcmRlckNvbG9yKSB7XG4gICAgLy8gaW52b2tlIHBhcmVudCBjbGFzcyBjb25zdHJ1Y3RvclxuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3I7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gICAgdGhpcy5keCA9IDA7XG4gICAgdGhpcy5keHYgPSAwO1xuICB9IFxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3Qge3gsIHksIGhlaWdodCwgd2lkdGgsIGJvcmRlckNvbG9yIH0gPSB0aGlzO1xuXG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICAgIC8vIGRyYXcgYmxvY2sgYm9yZGVyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBpc0RlYWQoKSB7XG4gICAgLy91c2UgY2xvc3VyZSBmb3IgY291bnRpbmcgb2YgbGl2ZXNcbiAgICB0aGlzLmxpdmVzIC0tO1xuICAgIGlmICh0aGlzLmxpdmVzID09PSAwKSB7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgICAgLy9wdXNoIHRoZSBuZXcgbnVtYmVyIG9mIGxpdmVzIHRvIHRoZSBET01cbiAgICB9XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0cywgZnJvZykge1xuICAgIFxuICAgIGxldCBmcm9nSXNDb2xsaWRpbmcgPSBvYmplY3RzLmZpbmQoIG9iamVjdCA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnggPCBvYmplY3QueCArIG9iamVjdC53aWR0aCAmJlxuICAgICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gb2JqZWN0LnggJiZcbiAgICAgICAgdGhpcy55IDwgb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0ICYmXG4gICAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gb2JqZWN0LnlcbiAgICAgICk7XG4gICAgfSk7XG4gICAgXG4gICAgaWYgKGZyb2dJc0NvbGxpZGluZykge1xuICAgICAgZnJvZy54ID0gZnJvZ0lzQ29sbGlkaW5nLng7XG4gICAgICBmcm9nLmR4ICA9IGZyb2dJc0NvbGxpZGluZy5keDtcbiAgICAgIGZyb2cuZHh2ID0gZnJvZ0lzQ29sbGlkaW5nLmR4djtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBmcm9nTW92ZShmcm9nLCBkaXIpIHtcbiAgICAvL3ByZXZlbnQgZnJvbSBsZWF2aW5nIGJvdW5kcyBpbml0aWFsbHkuIHBlcmhhcHMgc2V0IGNhbnZhcyBjb29yZGluYXRlcy5cbiAgICBsZXQgY29sID0gdGhpcy5pc0NvbGxpZGluZ1dpdGhXYWxsKDU4MCwgNTgwKTtcblxuICAgIGlmIChkaXIgPT09ICdyaWdodCcgJiYgY29sID09PSBmYWxzZSkge1xuICAgICAgdGhpcy54ICs9IDUwO1xuICAgIH0gZWxzZSBpZiAoZGlyID09PSAncmlnaHQnICYmIGNvbCA9PT0gdHJ1ZSAmJiB0aGlzLnggKyB0aGlzLndpZHRoID4gNTYwKSB7XG4gICAgICB0aGlzLnggKz0gMDtcbiAgICB9IGVsc2UgaWYgKGRpciA9PT0gJ3JpZ2h0JyAmJiBjb2wgPT09IHRydWUgJiYgdGhpcy54ICsgdGhpcy53aWR0aCA8IDU1MCkge1xuICAgICAgdGhpcy54ICs9IDUwO1xuICAgIH0gZWxzZSBpZiAoZGlyID09PSAnbGVmdCcgJiYgY29sID09PSBmYWxzZSkge1xuICAgICAgdGhpcy54IC09IDUwO1xuICAgIH0gZWxzZSBpZiAoZGlyID09PSAnbGVmdCcgJiYgY29sID09PSB0cnVlICYmIHRoaXMueCA8IDApIHtcbiAgICAgIHRoaXMueCAtPSAwO1xuICAgIH0gZWxzZSBpZiAoZGlyID09PSAnbGVmdCcgJiYgY29sID09PSB0cnVlICYmIHRoaXMueCA+IDApIHtcbiAgICAgIHRoaXMueCAtPSA1MDtcbiAgICB9IGVsc2UgaWYgKGRpciA9PT0gJ3VwJyAmJiBjb2wgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnkgLT0gNTA7XG4gICAgfSBlbHNlIGlmIChkaXIgPT09ICd1cCcgJiYgY29sID09PSB0cnVlICYmIHRoaXMueSA8IDIwKSB7XG4gICAgICB0aGlzLnkgLT0gMDtcbiAgICB9IGVsc2UgaWYgKGRpciA9PT0gJ3VwJyAmJiBjb2wgPT09IHRydWUgJiYgdGhpcy55ID4gMjApIHtcbiAgICAgIHRoaXMueSAtPSA1MDtcbiAgICB9IGVsc2UgaWYgKGRpciA9PT0gJ2Rvd24nICYmIGNvbCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMueSArPSA1MDtcbiAgICB9IGVsc2UgaWYgKGRpciA9PT0gJ2Rvd24nICYmIGNvbCA9PT0gdHJ1ZSAmJiB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IDU4MCkge1xuICAgICAgdGhpcy55ICs9IDA7XG4gICAgfSBlbHNlIGlmIChkaXIgPT09ICdkb3duJyAmJiBjb2wgPT09IHRydWUgJiYgdGhpcy55ICsgdGhpcy5oZWlnaHQgPCA1ODApIHtcbiAgICAgIHRoaXMueSArPSA1MDtcbiAgICB9XG4gIH1cbn07XG5cbiIsImNvbnN0IEZyb2cgPSByZXF1aXJlKCcuL0Zyb2cnKTtcbmNvbnN0IE9ic3RhY2xlID0gcmVxdWlyZSgnLi9vYnN0YWNsZScpO1xuY29uc3QgTG9nID0gcmVxdWlyZSgnLi9Mb2cnKTtcbmNvbnN0IFdhdGVyID0gcmVxdWlyZSgnLi93YXRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICBsZXQgZkdyZWVuID0gJ3JnYig4NyAxNDQgNDQpJztcbiAgICBsZXQgZlllbGxvdyA9ICdyZ2IoMjQwIDI1MiAxMTcpJztcbiAgICBsZXQgd0JsdWUgPSAncmdiKDU2IDE0MSAyMzYpJztcbiAgICBsZXQgbEJyb3duID0gJ3JnYigxMTYgODkgNjkpJztcbiAgICBsZXQgdEJyb3duID0gJ3JnYig3NSA3MSAzOCknO1xuICAgIGxldCByQmxhY2sgPSAncmdiKDQ4IDQyIDM1KSc7XG4gICAgbGV0IHJZZWxsb3cgPSAncmdiKDI1MiAyNDggODYpJztcbiAgICBsZXQgcldoaXRlID0gJ3JnYigyNTQgMjU1IDI1NSknO1xuICAgIGxldCBsR3JlZW4gPSAncmdiKDg3IDE0NCA0NCknO1xuICAgIGxldCBvUGluayA9ICdyZ2IoMjM4IDE0OSAxNTEpJztcbiAgICBsZXQgb1JlZCA9ICdyZ2IoMjE2IDU1IDQ5KSc7XG4gICAgbGV0IG9UZWFsID0gJ3JnYig1NyAxMDYgMTc1KSc7XG4gICAgbGV0IG9ZZWxsb3cgPSAncmdiKDIyOSAxOTYgNjUpJztcbiAgICBsZXQgb1B1cnBsZSA9ICdyZ2IoMTcyLCAxMjgsIDI1MSknO1xuICAgIFxuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgIC8vIGxldmVsIDFcbiAgICB0aGlzLndhdGVyID0gW1xuICAgICAgbmV3IFdhdGVyKDAsIDUwLCAyMDAsIDYwMCwgd0JsdWUsIHdCbHVlKVxuICAgIF07XG4gICAgdGhpcy5mcm9nID0gW1xuICAgICAgbmV3IEZyb2coMjgwLCA1NTUsIDQwLCA0MCwgJ2dyZWVuJywgb1BpbmspXG4gICAgXTtcblxuICAgIGlmICh0aGlzLmxldmVsID09PSAxKSB7XG4gICAgICB0aGlzLm9ic3RhY2xlID0gW1xuICAgICAgICBuZXcgT2JzdGFjbGUoLTEwLCA1MTUsIDIwLCA0MCwgb1BpbmssIHJXaGl0ZSwgMSwgNSksIFxuICAgICAgICBuZXcgT2JzdGFjbGUoLTEwMCwgNTE1LCAyMCwgNDAsIG9SZWQsIG9UZWFsLCAxLCA1KSwgXG4gICAgICAgIG5ldyBPYnN0YWNsZSgyOTUsIDQ1NSwgNDAsIDgwLCBsR3JlZW4sIG9QaW5rLCAxLCAxKSxcbiAgICAgICAgbmV3IE9ic3RhY2xlKC0xOTUsIDQ1NSwgNDAsIDgwLCBvVGVhbCwgb1llbGxvdywgMSwgMSksXG4gICAgICAgIG5ldyBPYnN0YWNsZSgtNTUsIDQwNSwgNDAsIDQwLCBvWWVsbG93LCBvUHVycGxlLCAxLCAyKSxcbiAgICAgICAgbmV3IE9ic3RhY2xlKC0xOTUsIDQwNSwgNDAsIDQwLCBvUHVycGxlLCBvUGluaywgMSwgMiksXG4gICAgICAgIG5ldyBPYnN0YWNsZSg2NTAsIDM1NSwgNDAsIDgwLCBvUGluaywgb1RlYWwsIC0xLCAyICksIFxuICAgICAgICBuZXcgT2JzdGFjbGUoNjA1LCAzMDUsIDQwLCA4MCwgbEdyZWVuLCBvWWVsbG93LCAtMSwgMSApLFxuICAgICAgICBuZXcgT2JzdGFjbGUoNzkwLCAzMDUsIDQwLCA2MCwgZlllbGxvdywgb1JlZCwgLTEsIDEgKSxcbiAgICAgIF07XG4gICAgICB0aGlzLmxvZyA9IFtcbiAgICAgICAgbmV3IExvZyAoLTEwLCAyMDUsIDQwLCAxNTAsIGxCcm93biwgZkdyZWVuLCAxLCAxKSxcbiAgICAgICAgbmV3IExvZyAoMzgwLCAyMDUsIDQwLCAxNTAsIGxCcm93biwgZkdyZWVuLCAxLCAxKSxcbiAgICAgICAgbmV3IExvZyAoNjUwLCAxNTUsIDQwLCAxMDAsIGxCcm93biwgdEJyb3duLCAtMSwgMiksXG4gICAgICAgIG5ldyBMb2cgKDI1MCwgMTU1LCA0MCwgMTAwLCBsQnJvd24sIHRCcm93biwgLTEsIDIpLFxuICAgICAgICBuZXcgTG9nICgtMTAwLCAxMDUsIDQwLCAxMzAsIGxCcm93biwgckJsYWNrLCAxLCA0KSxcbiAgICAgICAgbmV3IExvZyAoMzUwLCAxMDUsIDQwLCAxMzAsIGxCcm93biwgckJsYWNrLCAxLCA0KSxcbiAgICAgICAgbmV3IExvZyAoNzEwLCA1NSwgNDAsIDIwMCwgbEJyb3duLCByWWVsbG93LCAtMSwgMyksXG4gICAgICBdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sZXZlbCA9PT0gMikge1xuICAgICAgdGhpcy5vYnN0YWNsZSA9IFtcbiAgICAgICAgbmV3IE9ic3RhY2xlKC0xMCwgNDU1LCAyMCwgNDAsIG9QaW5rLCByV2hpdGUsIDEsIDUpLCBcbiAgICAgICAgbmV3IE9ic3RhY2xlKC0xMDAsIDQ1NSwgMjAsIDQwLCB3Qmx1ZSwgb1RlYWwsIDEsIDUpLFxuICAgICAgICBuZXcgT2JzdGFjbGUoMjUwLCA0NTUsIDIwLCA0MCwgb1RlYWwsIG9ZZWxsb3csIDEsIDUpLCBcbiAgICAgICAgbmV3IE9ic3RhY2xlKC0xOTUsIDUwNSwgNDAsIDEwMCwgb1llbGxvdywgb1B1cnBsZSwgMSwgMiksXG4gICAgICAgIG5ldyBPYnN0YWNsZSgzMDAsIDUwNSwgNDAsIDEwMCwgb1B1cnBsZSwgb1BpbmssIDEsIDIpLFxuICAgICAgICBuZXcgT2JzdGFjbGUoMTU1LCA0MDUsIDQwLCA0MCwgb1BpbmssIG9UZWFsLCAxLCAzKSxcbiAgICAgICAgbmV3IE9ic3RhY2xlKC01NSwgNDA1LCA0MCwgNDAsIHJXaGl0ZSwgZlllbGxvdywgMSwgMyksXG4gICAgICAgIG5ldyBPYnN0YWNsZSgtMTk1LCA0MDUsIDQwLCA0MCwgbEdyZWVuLCBvWWVsbG93LCAxLCAzKSxcbiAgICAgICAgbmV3IE9ic3RhY2xlKDY1MCwgMzU1LCA0MCwgODAsIGZZZWxsb3csIG9SZWQsIC0xLCA2ICksIFxuICAgICAgICBuZXcgT2JzdGFjbGUoNjA1LCAzMDUsIDQwLCA4MCwgb1BpbmssIGxHcmVlbiwgLTEsIDMgKSxcbiAgICAgICAgbmV3IE9ic3RhY2xlKDIwMCwgMzA1LCA0MCwgODAsIG9UZWFsLCBmWWVsbG93LCAtMSwgMyApLFxuICAgICAgICBuZXcgT2JzdGFjbGUoNzkwLCAzMDUsIDQwLCA2MCwgcldoaXRlLCBvUmVkLCAtMSwgMyApLFxuICAgICAgXTtcbiAgICAgIHRoaXMubG9nID0gW1xuICAgICAgICBuZXcgTG9nICgwLCAyMDUsIDQwLCA1MCwgbEJyb3duLCBmR3JlZW4sIDEsIDAuNSksXG4gICAgICAgIG5ldyBMb2cgKC04MCwgMjA1LCA0MCwgNTAsIGxCcm93biwgdEJyb3duLCAxLCAwLjUpLFxuICAgICAgICBuZXcgTG9nICgtMTYwLCAyMDUsIDQwLCA1MCwgbEJyb3duLCByQmxhY2ssIDEsIDAuNSksXG4gICAgICAgIG5ldyBMb2cgKDY1MCwgMTU1LCA0MCwgMTcwLCBsQnJvd24sIHJZZWxsb3csIC0xLCAxKSxcbiAgICAgICAgbmV3IExvZyAoMTAsIDEwNSwgNDAsIDUwLCBsQnJvd24sIGZHcmVlbiwgMSwgMiksXG4gICAgICAgIG5ldyBMb2cgKDkwLCAxMDUsIDQwLCA1MCwgbEJyb3duLCB0QnJvd24sIDEsIDIpLFxuICAgICAgICBuZXcgTG9nICgxNzAsIDEwNSwgNDAsIDUwLCBsQnJvd24sIHJCbGFjaywgMSwgMiksICBcbiAgICAgICAgbmV3IExvZyAoNzEwLCA1NSwgNDAsIDExMCwgbEJyb3duLCB0QnJvd24sIC0xLCAzKSxcbiAgICAgICAgbmV3IExvZyAoMzEwLCA1NSwgNDAsIDExMCwgbEJyb3duLCB0QnJvd24sIC0xLCAzKSxcbiAgICAgIF07XG4gICAgfSBlbHNlIGlmICh0aGlzLmxldmVsID09PSAzKSB7XG4gICAgICB0aGlzLm9ic3RhY2xlID0gW1xuICAgICAgICBuZXcgT2JzdGFjbGUoLTEwLCA0NTUsIDIwLCA0MCwgb1BpbmssIHJXaGl0ZSwgMSwgNSksIFxuICAgICAgICBuZXcgT2JzdGFjbGUoLTEwMCwgNDU1LCAyMCwgNDAsIHdCbHVlLCBvVGVhbCwgMSwgNSksXG4gICAgICAgIG5ldyBPYnN0YWNsZSgyNTAsIDQ1NSwgMjAsIDQwLCBvVGVhbCwgb1llbGxvdywgMSwgNSksIFxuICAgICAgICBuZXcgT2JzdGFjbGUoNDUwLCA0NTUsIDIwLCA0MCwgb1B1cnBsZSwgb1RlYWwsIDEsIDUpLCBcbiAgICAgICAgbmV3IE9ic3RhY2xlKC01LCA1MDUsIDQwLCA0MCwgcldoaXRlLCBvUmVkLCAxLCA0KSxcbiAgICAgICAgbmV3IE9ic3RhY2xlKDI1NSwgNTA1LCA0MCwgNDAsIG9UZWFsLCBvUmVkLCAxLCA0KSxcbiAgICAgICAgbmV3IE9ic3RhY2xlKDQ1NSwgNTA1LCA0MCwgNDAsIG9QdXJwbGUsIGxHcmVlbiwgMSwgNCksXG4gICAgICAgIG5ldyBPYnN0YWNsZSgtMTA1LCA0MDUsIDQwLCA2MCwgb1BpbmssIG9UZWFsLCAxLCA0KSxcbiAgICAgICAgbmV3IE9ic3RhY2xlKDE5NSwgNDA1LCA0MCwgNjAsIGxHcmVlbiwgb1llbGxvdywgMSwgNCksXG4gICAgICAgIG5ldyBPYnN0YWNsZSg0OTUsIDQwNSwgNDAsIDYwLCBsR3JlZW4sIG9ZZWxsb3csIDEsIDQpLFxuICAgICAgICBuZXcgT2JzdGFjbGUoNjUwLCAzNTUsIDQwLCA4MCwgZlllbGxvdywgb1JlZCwgLTEsIDggKSwgXG4gICAgICAgIG5ldyBPYnN0YWNsZSg2MDUsIDMwNSwgNDAsIDgwLCBvUGluaywgbEdyZWVuLCAtMSwgMyApLFxuICAgICAgICBuZXcgT2JzdGFjbGUoMjAwLCAzMDUsIDQwLCA4MCwgb1RlYWwsIGZZZWxsb3csIC0xLCAzICksXG4gICAgICAgIG5ldyBPYnN0YWNsZSg3OTAsIDMwNSwgNDAsIDYwLCByV2hpdGUsIG9SZWQsIC0xLCAzICksXG4gICAgICBdO1xuICAgICAgdGhpcy5sb2cgPSBbXG4gICAgICAgIG5ldyBMb2cgKDAsIDIwNSwgNDAsIDUwLCBsQnJvd24sIGZHcmVlbiwgMSwgMS41KSxcbiAgICAgICAgbmV3IExvZyAoLTgwLCAyMDUsIDQwLCA1MCwgbEJyb3duLCB0QnJvd24sIDEsIDEuNSksXG4gICAgICAgIG5ldyBMb2cgKC0xNjAsIDIwNSwgNDAsIDUwLCBsQnJvd24sIHJCbGFjaywgMSwgMS41KSxcbiAgICAgICAgbmV3IExvZyAoNjUwLCAxNTUsIDQwLCAxNzAsIGxCcm93biwgclllbGxvdywgLTEsIDQpLFxuICAgICAgICBuZXcgTG9nICgxMCwgMTA1LCA0MCwgNTAsIGxCcm93biwgZkdyZWVuLCAxLCAwLjI1KSxcbiAgICAgICAgbmV3IExvZyAoOTAsIDEwNSwgNDAsIDUwLCBsQnJvd24sIHRCcm93biwgMSwgMC4yNSksXG4gICAgICAgIG5ldyBMb2cgKDE3MCwgMTA1LCA0MCwgNTAsIGxCcm93biwgckJsYWNrLCAxLCAwLjI1KSwgIFxuICAgICAgICBuZXcgTG9nICg3MTAsIDU1LCA0MCwgMTIwLCBsQnJvd24sIHRCcm93biwgLTEsIDcpLFxuICAgICAgICBuZXcgTG9nICgzMTAsIDU1LCA0MCwgMTIwLCBsQnJvd24sIHRCcm93biwgLTEsIDcpLFxuICAgICAgXTtcblxuICAgIH0gZWxzZSBpZiAodGhpcy5sZXZlbCA+PSA0KSB7XG4gICAgICAvLyBhZGQgWW91IFdpbiEhISBtZXNzYWdlXG4gICAgfVxuXG4gIH1cblxuXG4gIC8vIGRyYXcgb25lIGZyYW1lIG9mIG91ciBnYW1lXG4gIGFuaW1hdGUoKSB7XG4gICAgdGhpcy53YXRlci5mb3JFYWNoICggd2F0ZXIgPT4ge1xuICAgICAgLy8gdGhpcy5oYW5kbGVXYXRlcih3YXRlcik7XG4gICAgICB3YXRlci5kcmF3KHRoaXMuY3R4KTtcbiAgICB9KTtcbiAgICB0aGlzLmxvZy5mb3JFYWNoICggbG9nID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlTG9nKGxvZyk7XG4gICAgICBsb2cuZHJhdyh0aGlzLmN0eCk7XG4gICAgfSk7XG4gICAgdGhpcy5mcm9nLmZvckVhY2goIGZyb2cgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVGcm9nKGZyb2cpO1xuICAgICAgZnJvZy5kcmF3KHRoaXMuY3R4KTtcbiAgICB9KTtcbiAgICB0aGlzLm9ic3RhY2xlLmZvckVhY2goIG9ic3RhY2xlID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlT2JzdGFjbGUob2JzdGFjbGUpO1xuICAgICAgb2JzdGFjbGUuZHJhdyh0aGlzLmN0eCk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVGcm9nKGZyb2cpIHtcbiAgICBpZiAoZnJvZy5pc0NvbGxpZGluZ1dpdGgodGhpcy5vYnN0YWNsZSwgZnJvZykpIHtcbiAgICAgIHRoaXMuZW5kR2FtZSgpOyBcbiAgICB9IGVsc2UgaWYgKGZyb2cuaXNDb2xsaWRpbmdXaXRoKHRoaXMubG9nLCBmcm9nKSkgeyBcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGZyb2cuaXNDb2xsaWRpbmdXaXRoKHRoaXMud2F0ZXIsIGZyb2cpKSB7XG4gICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVLZXlQcmVzcyhmcm9nKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVPYnN0YWNsZShvYnN0YWNsZSkge1xuICAgIGlmIChvYnN0YWNsZS54ID49IDgwMCkge1xuICAgICAgb2JzdGFjbGUueCA9IDA7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9ic3RhY2xlWzBdKTtcbiAgICB9IGVsc2UgaWYgKG9ic3RhY2xlLnggPD0gLTIwMCkge1xuICAgICAgb2JzdGFjbGUueCA9IDYwMDtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JzdGFjbGUubW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUxvZyhsb2cpIHtcbiAgICBpZiAobG9nLnggPj0gODAwKSB7XG4gICAgICBsb2cueCA9IDA7XG4gICAgfSBlbHNlIGlmIChsb2cueCA8PSAtMjAwKSB7XG4gICAgICBsb2cueCA9IDYwMDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nLm1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBlbmRHYW1lKCkge1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICB9XG5cbiAgaXNPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVPdmVyO1xuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG5cbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgbGV0IHJpZ2h0ID0gJ3JpZ2h0JztcblxuICAgICAgdGhpcy5mcm9nLmZvckVhY2goIGZyb2cgPT4ge1xuICAgICAgICBmcm9nLmZyb2dNb3ZlKGZyb2csIHJpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICBsZXQgbGVmdCA9ICdsZWZ0JztcblxuICAgICAgdGhpcy5mcm9nLmZvckVhY2goIGZyb2cgPT4ge1xuICAgICAgICBmcm9nLmZyb2dNb3ZlKGZyb2csIGxlZnQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGxldCBkb3duID0gJ2Rvd24nO1xuICAgICAgXG4gICAgICB0aGlzLmZyb2cuZm9yRWFjaCggZnJvZyA9PiB7XG4gICAgICAgIGZyb2cuZnJvZ01vdmUoZnJvZywgZG93bik7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIGxldCB1cCA9ICd1cCc7XG5cbiAgICAgIHRoaXMuZnJvZy5mb3JFYWNoKCBmcm9nID0+IHtcbiAgICAgICAgZnJvZy5mcm9nTW92ZShmcm9nLCB1cCk7XG4gICAgICB9KTtcbiAgICB9IFxuICB9XG5cbiAgLy8gVGhpcyBjb2RlIHNldHMgdXAgdGhlIGJhY2tncm91bmQgb24gdGhlIGNhbnZhc1xuICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgLy8gZHJhd2luZyB3YXRlclxuICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgIFxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSAncmdiKDU2LCAxNDEsIDIzNiknO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLCA1MCwgNjAwLCAyMDApOyBcblxuICAgIC8vIGRyYXdpbmcgMyBzYWZlIGdyYXNzIGFyZWFzXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoODcsIDE0NCwgNDQpJztcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgNjAwLCA1MCk7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDI1MCwgNjAwLCA1MCk7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDU1MCwgNjAwLCA1MCk7XG5cbiAgICAvLyBkcmF3aW5nIHdoaXRlIGRhc2ggbGFuZSBkaXZpZGluZyBsaW5lcyBhbmQgeWVsbG93IGNlbnRlciBsaW5lcyBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCA0OTkpO1xuICAgIGN0eC5saW5lVG8oNjAwLCA0OTkpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2IoMjU0LCAyNTUsIDI1NSknO1xuICAgIGN0eC5zZXRMaW5lRGFzaChbMTBdKTtcbiAgICBjdHguc3Ryb2tlV2lkdGggPSAyO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIDQ0OSk7XG4gICAgY3R4LmxpbmVUbyg2MDAsIDQ0OSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYigyNTQsIDI1NSwgMjU1KSc7XG4gICAgY3R4LnNldExpbmVEYXNoKFsxMF0pO1xuICAgIGN0eC5zdHJva2VXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgMzQ5KTtcbiAgICBjdHgubGluZVRvKDYwMCwgMzQ5KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiKDI1NCwgMjU1LCAyNTUpJztcbiAgICBjdHguc2V0TGluZURhc2goWzEwXSk7XG4gICAgY3R4LnN0cm9rZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCAzOTcpO1xuICAgIGN0eC5saW5lVG8oNjAwLCAzOTcpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2IoMjUyLCAyNDgsIDg2KSc7XG4gICAgY3R4LnNldExpbmVEYXNoKFswXSk7XG4gICAgY3R4LnN0cm9rZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCA0MDEpO1xuICAgIGN0eC5saW5lVG8oNjAwLCA0MDEpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2IoMjUyLCAyNDgsIDg2KSc7XG4gICAgY3R4LnNldExpbmVEYXNoKFswXSk7XG4gICAgY3R4LnN0cm9rZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5keCA9IDE7XG4gICAgdGhpcy5keSA9IDA7XG4gICAgdGhpcy5keHYgPSAxO1xuICAgIHRoaXMuZHl2ID0gMTtcbiAgfVxuXG5cbiAgaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IDUwIHx8XG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gY2FudmFzV2lkdGggfHxcbiAgICAgIHRoaXMueSA8IDIwIHx8IFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBjYW52YXNIZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMuZHggKiB0aGlzLmR4djtcbiAgICB0aGlzLnkgKz0gdGhpcy5keSAqIHRoaXMuZHl2O1xuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIHRoaXMuZHggPSBkaXJlY3Rpb24uZHg7XG4gICAgdGhpcy5keSA9IGRpcmVjdGlvbi5keTtcbiAgfVxuXG59OyIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5cbi8vZXh0ZW5kcyBHYW1waWVjZVxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBMb2cgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgYm9yZGVyQ29sb3IsIGR4ID0gMSwgZHh2ID0gMSkge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcblxuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmR4ID0gZHg7XG4gICAgdGhpcy5keSA9IDA7XG4gICAgdGhpcy5keHYgPSBkeHY7XG4gICAgdGhpcy5keXYgPSAxO1xuICB9XG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3Qge3gsIHksIGhlaWdodCwgd2lkdGgsIGJvcmRlckNvbG9yIH0gPSB0aGlzO1xuXG4gICAgLy8gY2FsbCBwYXJlbnQgY2xhc3MgZHJhdyBmdW5jdGlvblxuICAgIHN1cGVyLmRyYXcoY3R4KTtcblxuICAgIC8vIGRyYXcgb2JzdGFjbGUgYm9yZGVyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cbiAgLy9cbn07IiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZScpO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcblxuLy8gU3RhcnQgYW5pbWF0aW9uIGxvb3BcbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcblxuICBpZiAoZ2FtZS5pc092ZXIoKSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdHYW1lIE92ZXInKTtcbiAgICAvLyB3cml0ZSBjb2RlIGZvciBnYW1lIG92ZXIgb24gc2NyZWVuXG5cbiAgfSBlbHNlIHtcbiAgICAvLyBjbGVhciBwcmV2aW91cyBmcmFtZVxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBnYW1lLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgLy8gZHJhdyB0aGlzIGZyYW1lXG4gICAgZ2FtZS5hbmltYXRlKCk7XG4gIH1cblxuICAvLyBwcmVwYXJlIHRvIGRyYXcgbmV4dCBmcmFtZVxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn1cblxuLy8gQWRkIGtleSBwcmVzcyBldmVudCBoYW5kbGVyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZ2FtZS5oYW5kbGVLZXlQcmVzcyhlKTtcbn1cblxuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxuLy8gZXh0ZW5kIEdhbWVQaWVjZSBjbGFzc1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBPYnN0YWNsZSBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBib3JkZXJDb2xvciwgZHggPSAxLCBkeHYgPSAxKSB7XG4gICAgLy8gaW52b2tlIHBhcmVudCBjbGFzcyBjb25zdHJ1Y3RvclxuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcblxuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcbiAgICB0aGlzLmR4ID0gZHg7XG4gICAgdGhpcy5keSA9IDA7XG4gICAgdGhpcy5keHYgPSBkeHY7XG4gICAgdGhpcy5keXYgPSAxO1xuICB9IFxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3Qge3gsIHksIGhlaWdodCwgd2lkdGgsIGJvcmRlckNvbG9yIH0gPSB0aGlzO1xuXG4gICAgLy8gY2FsbCBwYXJlbnQgY2xhc3MgZHJhdyBmdW5jdGlvblxuICAgIHN1cGVyLmRyYXcoY3R4KTtcblxuICAgIC8vIGRyYXcgb2JzdGFjbGUgYm9yZGVyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cbn07IiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxuLy8gZXh0ZW5kIEdhbWVQaWVjZSBjbGFzc1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBXYXRlciBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgLy8gaW52b2tlIHBhcmVudCBjbGFzcyBjb25zdHJ1Y3RvclxuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgfSBcblxuICBkcmF3KGN0eCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgfVxufTsiXSwic291cmNlUm9vdCI6IiJ9