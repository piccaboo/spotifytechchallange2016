function getMotion(event){
  document.getElementById("accelerometer").innerHTML = "Accelerometer: "
    + event.accelerationIncludingGravity.x + ", "
    + event.accelerationIncludingGravity.y + ", "
    + event.accelerationIncludingGravity.z;
}
function getOrientation(event){
  document.getElementById("magnetometer").innerHTML = "Magnetometer: "
    + event.alpha + ", "
    + event.beta + ", "
    + event.gamma;
}
function go(){
  if(window.DeviceMotionEvent){
    window.addEventListener("devicemotion", getMotion, false);
  }
  else{
    var status = document.getElementById("status");
    status.innerHTML = status.innerHTML.replace(
      "is supported", "is not supported"
    );
  }
  if(window.DeviceOrientationEvent){
    window.addEventListener("deviceorientation", getOrientation, false);
  }else{
    var status = document.getElementById("status");
    status.innerHTML = status.innerHTML.replace(
      "is supported", "is not supported"
    );
  }
}