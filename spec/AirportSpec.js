describe('Plane', function(){
  it('can be created', function(){
    plane = new Plane
    expect(plane).toEqual(new Plane)
  });
});

describe('Weather', function(){

  beforeEach(function(){
    weather = new Weather();
  });

  it('#forecast returns the weather', function(){
    spyOn(Math, "random").and.returnValue(0);
    weather.forecast();
    expect(weather.weather).toEqual("Sunny");
  });

  it('#forecast returns the weather', function(){
    spyOn(Math, "random").and.returnValue(1);
    weather.forecast();
    expect(weather.weather).toEqual("Stormy");
  });

});

describe('Airport', function(){

  var airport
  var plane

  beforeEach(function(){
    airport = new Airport
    plane = new Plane
  });

  describe('an airport', function(){
    it('will start life with a few planes', function(){
      expect(airport.terminal[0]).toEqual(new Plane);
    });
  });

  describe('land', function(){
    it('can add a plane to the terminal', function(){
      airport.land(plane)
      expect(airport.terminal.length).toEqual(4)
    });
  });

  describe('takeOff', function(){
    it('can make a plane leave the airport', function(){
      airport.takeOff();
      expect(airport.terminal.length).toEqual(2)
    });
  });

});
