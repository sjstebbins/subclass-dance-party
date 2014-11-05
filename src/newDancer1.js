var Chihuahua = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('chihuahua','dancer');
};

Chihuahua.prototype = Object.create(Dancer.prototype);

Chihuahua.prototype.constructor = Chihuahua;

Chihuahua.prototype.step = function(){
    Dancer.prototype.step.call(this);
    this.$node.toggle();
};






