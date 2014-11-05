var FatBoy = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('fatboy','dancer');
};

FatBoy.prototype = Object.create(Dancer.prototype);

FatBoy.prototype.constructor = FatBoy;

FatBoy.prototype.step = function(){
    Dancer.prototype.step.call(this);
    this.$node.toggle();
};
