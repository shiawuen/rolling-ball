(function(global, undef) {

/**
 * Local cache
 */
var requestAnimFrame = window.requestAnimFrame;


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


global.addEventListener('deviceready', init);


function init() {

  /**
   * 2. Listen on accelerometer state update
   */
  accelerathor.watch(
      onAccelerometerUpdate
    , onAccelerometerError
    , options);


  /**
   * 3. Intialize the state of the ball
   */
  ball = new Ball(byId('ball'));
  // More stuff


  /**
   * 4. Wiring up the drawing for the ball movement
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
  requestAnimFrame(animate);
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