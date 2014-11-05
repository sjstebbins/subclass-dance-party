var SuperChildren = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('superchildren','dancer');
};

SuperChildren.prototype = Object.create(Dancer.prototype);

SuperChildren.prototype.constructor = SuperChildren;

SuperChildren.prototype.step = function(){
    Dancer.prototype.step.call(this);
    this.$node.toggle();
};
