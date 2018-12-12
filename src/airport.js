var Plane = function(){};

var Weather = function(){
  this.weather = "Sunny";
};

var Airport = function(){
  plane1 = new Plane();
  plane2 = new Plane();
  plane3 = new Plane();
  this.terminal = [plane1, plane2, plane3]
};

Airport.prototype.land = function (plane) {
  this.terminal.push(plane);
};

Airport.prototype.takeOff = function (airport) {
  this.terminal.pop();
};

Weather.prototype.forecast = function () {
  var num = Math.floor(Math.random() * 2);
  var weather_array = ["Sunny", "Stormy"];
  this.weather = weather_array[num];
};
