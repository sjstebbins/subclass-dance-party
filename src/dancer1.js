var Dancer1 = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="http://img1.wikia.nocookie.net/__cb20140527121456/creepypasta/images/2/2e/Transparent_dancing_super_heroes_for_your_blog.gif"></img>');
};

Dancer1.prototype = Object.create(Dancer.prototype);

Dancer1.prototype.constructor = Dancer1;

Dancer1.prototype.step = function(){
    Dancer.prototype.step.call(this);
    this.$node.toggle();
};
