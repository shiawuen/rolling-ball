
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

  // Default stage to document
  stage || (stage = document);

  var stageWidth = stage.width
    , stageHeight = stage.height
    , elemWidth = element.offsetWidth
    , elemHeight = element.offsetHeight;

  this.element = element;
  this.stage = stage;

  this.dimension = {
      width: elemWidth
    , height: elemHeight
  };

  this.stageDimension = {
      width: stageWidth
    , height: stageHeight
  };

  this.center = {
      x: ~~ ((stageWidth - elemWidth) / 2)
    , y: ~~ ((stageHeight - elemHeight) / 2)
  };

  this.current = this.center;

  this.max = {
      x: stageWidth - elemWidth
    , y: stageHeight - elemHeight
  }
}


/**
 * Move the ball to another point based on acceleration
 *
 * @param {Float} ax Acceleration for x-axis
 * @param {Float} ay Acceleration for y-axis
 * @api public
 */
Ball.prototype.moveTo = function(ax, ay) {
  var current = this.current
    , currentX = current.x
    , currentY = current.y
    , maxX = this.max.x
    , maxY = this.max.y;


  var speed = 1.5
    /**
     * X = 0 = not moving
     * X < 0 = moving left
     * X > 0 = moving right
     */
  var speedX = ~~ (ax + (ax / ax * speed));
    /**
     * Y = 0 = not moving
     * Y < 0 = moving up
     * Y > 0 = moving down
     */
  var speedY = ~~ (ay + (ay / ay * speed));

  if (speedX > 10) speedX = 10;
  if (speedY > 10) speedY = 10;

  currentY = currentY + speedY;
  currentX = currentX + speedX;

  if (currentX < 0)
    currentX = 0;
  else if (currentX > maxX)
    currentX = maxX;

  if (currentY < 0)
    currentY = 0;
  else if (currentY > maxY)
    currentY = maxY;


  current.x = currentX;
  current.y = currentY;


  move(this.element, currentX, currentY);

};


/**
 * Move the ball to the center of the stage
 *
 * @api public
 */
Ball.prototype.moveToCenter = function() {
  move(this.element, this.center.x, this.center.y);
};


/**
 * Move element to x,y
 *
 * @param {Element} element
 * @param {Integer} x
 * @param {Integer} y
 * @api private
 */

function move(element, x, y) {
  element.style.top = y + 'px'
  element.style.left = x + 'px'
}


})();