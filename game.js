var createAnimation = function(prefix) {
  var frames = [];

  for (var i=1;;i++) {
    var name = prefix + "_" + i + ".png";
    var frame = cc.spriteFrameCache.getSpriteFrame(name);
    
    if (frame == null)
      break;

    frames.push(frame);
  }
  
  var animation = cc.Animation.create(frames, 0.07);
  return cc.Animate.create(animation);
}

var MyScene = cc.Scene.extend({
  onEnter:function () {
    this._super();

    cc.spriteFrameCache.addSpriteFrames("dog.plist");
    
    cc.eventManager.addListener({
      event: cc.EventListener.MOUSE,
      onMouseDown : this.onMouseDown,
      onMouseUp : this.onMouseUp,
      onMouseMove : this.onMouseMove
    }, this);

    this.dog = cc.Sprite.create();
    this.dog.setPosition(200,600);
    this.dog.setScale(2);
    this.addChild(this.dog);
    
    this.dog.runAction(
      cc.RepeatForever.create(
        createAnimation("dog_dangle")));
    this.dog.runAction(
      cc.MoveBy.create(3, cc.p(0, -200)));
  },
  
  onMouseDown:function(e) {
    var _this = e.getCurrentTarget();
  },
  onMouseUp:function(e) {
  },
  onMouseMove:function(e) {
  }
});
