var Dancer2 = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="http://i.imgur.com/ymU48Db.gif"></img>');
};

Dancer2.prototype = Object.create(Dancer.prototype);

Dancer2.prototype.constructor = Dancer2;

Dancer2.prototype.step = function(){
    Dancer.prototype.step.call(this);
    this.$node.toggle();
};
