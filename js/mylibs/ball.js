
/*!
 * Ball
 * Copyright(c) 2011 Tan Shiaw Uen <shiawuen@gmail.com>
 * MIT Licensed
 */


(function() {

/**
 * Expose the object
 */
window.Ball = Ball;


/**
 * Constructor
 *
 * @param {Element} element
 * @api public
 */
function Ball(element, stage) {
  // Default stage to body
  stage || (stage = document.body);

  this.elem = element;
  this.stage = stage;

  this.dimension = {
      width: element.offsetWidth
    , height: element.offsetHeight
  };
  this.stageDimension = {
      width: stage.offsetWidth
    , height: stage.offsetHeight
  };

}

/**
 * Move the ball to another point
 *
 * @param {Float} x
 * @param {Float} y
 * @api public
 */
Ball.prototype.moveTo = function(x, y) {
  var self = this;
};


/**
 * Move the ball to the center of the stage
 *
 * @api public
 */
Ball.prototype.center = function() {
  var centerX = ~~(this.stageDimension.width - this.dimension.width) / 2;
  var centerY = ~~(this.stageDimension.height - this.dimension.height) / 2;

  this.elem.style.top = centerX +'px';
  this.elem.style.left = centerY +'px';
};

})();