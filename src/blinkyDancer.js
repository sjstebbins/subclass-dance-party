var Carelton = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky','dancer');
};

Carelton.prototype = Object.create(Dancer.prototype);

Carelton.prototype.constructor = Carelton;

Carelton.prototype.step = function(){
    Dancer.prototype.step.call(this);
    this.$node.toggle();
};


