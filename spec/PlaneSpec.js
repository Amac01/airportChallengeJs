'use strict';

describe('plane', function() {
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForlanding']);
  });
  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.clearForlanding).toHaveBeenCalledWith(plane);
  });
});
