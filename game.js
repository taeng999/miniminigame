var MyScene = cc.Scene.extend({
  onEnter:function () {
    this._super();
    
    cc.eventManager.addListener({
      event: cc.EventListener.MOUSE,
      onMouseDown : this.onMouseDown,
      onMouseUp : this.onMouseUp,
      onMouseMove : this.onMouseMove
    }, this);

    this.tree = cc.Sprite.create("tree.png");
    this.tree.setPosition(200,200);
    this.addChild(this.tree);

    this.apple = cc.Sprite.create("apple.png");
    this.apple.setPosition(50,100);
    this.tree.addChild(this.apple);
  },
  
  onMouseDown:function(e) {
    var _this = e.getCurrentTarget();

    _this.tree.runAction(
      cc.Sequence.create(
        cc.MoveBy.create(0.03, cc.p(6,0)),
        cc.MoveBy.create(0.02, cc.p(-12,0)),
        cc.MoveBy.create(0.03, cc.p(6,0))
      ));
    _this.apple.runAction(
      cc.Sequence.create(
        cc.MoveBy.create(0.03, cc.p(-3,0)),
        cc.MoveBy.create(0.02, cc.p(6,0)),
        cc.MoveBy.create(0.03, cc.p(-3,0))
      ));
  },
  onMouseUp:function(e) {
  },
  onMouseMove:function(e) {
  }
});
