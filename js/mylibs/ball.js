
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
  var stageWidth = stage.width
    , stageHeight = stage.height
    , elemWidth = elem.offsetWidth
    , elemHeight = elem.offsetHeight;

  // Default stage to document
  stage || (stage = document);

  this.elem = element;
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

}


/**
 * Move the ball to another point
 *
 * @param {Acceleration} acceleration
 * @api public
 */
Ball.prototype.moveTo = function(acceleration) {

};


/**
 * Move the ball to the center of the stage
 *
 * @api public
 */
Ball.prototype.moveToCenter = function() {
  this.elem.style.top = this.center.y +'px';
  this.elem.style.left = this.center.x +'px';
};

})();