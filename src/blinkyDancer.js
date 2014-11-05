var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="http://4.bp.blogspot.com/-1n9dFwSMIcg/U1qWoBaN7mI/AAAAAAAAS9I/kmHE750tpvE/s1600/carltondancing2.gif"></img>');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  console.log("goodbye");
    Dancer.prototype.step.call(this);
    this.$node.toggle();
};


