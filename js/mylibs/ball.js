
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
    
  this.elem = element;
  this.stage = stage;

  this.dimension = {
      width: elem.width
    , height: elem.height
  };
  this.stageDimension = {
      width: stage.width
    , height: stage.height
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
 * @param {Float} x
 * @param {Float} y
 * @api public
 */
Ball.prototype.center = function() {
  var self = this;
  
  var centerX = (this.stageDimension.width - this.dimension.width) / 2;
  var centerY = (this.stageDimension.height - this.dimension.width) / 2;

  this.elem.style.top = centerX +'px';
  this.elem.style.left = centerY +'px';
};

})();