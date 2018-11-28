'use strict';

function Plane(){}
Plane.prototype.land = function(airport){
  airport.clearForlanding(this);
};
