(function(global, undef) {

/*!
 * accelerathor
 * Copyright(c) 2011 Tan Shiaw Uen <shiawuen@gmail.com>
 * MIT Licensed
 */



/**
 * Feature detection
 */

if ('Accelerometer' in global === false)
  throw Error('Accelerometer not supported');


/**
 * Cache object locally
 */

var accelerometer = new Accelerometer();


/**
 * Expose the API to global
 */

var accelerathor = { watch: watch, unwatch: unwatch };
global.accelerathor = accelerathor;


/**
 * Bind to the clearWatch() provided by PhoneGap
 *
 * @param {Integer|String} watchID
 * @api public
 *
 */
function unwatch(watchID) {
  accelerometer.clearWatch(watchID);
}


/**
 * Wrap around the Accelerometer.watchAcceleration
 *
 * @param {Function} success
 * @param {Function} error
 * @param {Object} options
 * @returns {ID} id of the watch
 * @api public
 *
 */

function watch(success, error, options) {
  var currentX, previousX, lastX;
  var currentY, previousY, lastY;
  var currentZ, previousZ, lastZ;
  var currentTimestamp
    , previousTimestamp
    , lastTimestamp;

  var id = accelerometer.watchAcceleration(
      _success
    , error
    , options);


  return id;


  function _success(acceleration){
    lastX = previousX;
    previousX = currentX;
    currentX = acceleration.x;

    lastY = previousY;
    previousY = currentY;
    currentY = acceleration.y;

    lastZ = previousZ;
    previousZ = currentZ;
    currentZ = acceleration.z;

    lastTimestamp = previousTimestamp;
    previousTimestamp = currentTimestamp;
    currentTimestamp = acceleration.timestamp;

    success({
        x: currentX
      , y: currentY
      , z: currentZ
      , timestamp: currentTimestamp
      , previous: {
            x: previousX
          , y: previousY
          , z: previousZ
          , timestamp: previousTimestamp
        }
      , last: {
            x: lastX
          , y: lastY
          , z: lastZ
          , timestamp: lastTimestamp
        }
    });
  }
}

})(window);