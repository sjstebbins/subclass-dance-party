var Hammer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('hammer','dancer');
};

Hammer.prototype = Object.create(Dancer.prototype);

Hammer.prototype.constructor = Hammer;

Hammer.prototype.step = function(){
    Dancer.prototype.step.call(this);
    this.$node.toggle();
};