(function(global, undef) {

/**
 * Local cache
 */
var requestAnimationFrame = window.requestAnimationFrame;


/**
 * The ball
 */

var ball;


/**
 * Accelerometer state
 */

var acceleration;


/**
 * Options for Accelerometer events
 */

var options = { frequency: 500 };


global.addEventListener('deviceready', onDeviceReady, false);
global.addEventListener('DOMContentLoaded', init, false);


function onDeviceReady() {
  /**
   * 1. Listen on accelerometer state update
   */

  accelerathor.watch(
      onAccelerometerUpdate
    , onAccelerometerError
    , options);
}

function init() {

  /**
   * 2.
   * Intialize the state of the ball and
   * move it to the center of stage
   */

  ball = new Ball(byId('ball'));
  ball.center();

  /**
   * 3. Rock'n'Roll
   */

  animate();
}


/**
 * Animatate the ball
 */

function move() {

  // skip if accelerometer state not ready
  if (typeof acceleration === 'undefined')
    return;


  // Move the ball!!!

}


function animate() {
  requestAnimationFrame(animate);
  move();
}


/**
 * Event handlers for Accelerometer
 */

function onAccelerometerUpdate(_acceleration) {
  acceleration = _acceleration;
}


function onAccelerometerError() {
  throw new Error("Unable to retrieve accelerometer");
}

})(window);