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
    console.log(e);
    
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

    if (Math.random() > 0.5) {
      var x = Math.random() * 70 - 35;
      var y = Math.random() * 50 - 25;

      item = cc.Sprite.create("apple_1.png");
      item.setPosition(cc.p(200 + x, 200 + y));
      item.setOpacity(0);
      item.runAction(
        cc.EaseBackIn.create(
        cc.MoveBy.create(0.5, cc.p(0,-80 - y))));
      item.runAction(
        cc.Sequence.create(
          cc.FadeTo.create(0.2, 255),
          cc.DelayTime.create(0.5),
          cc.FadeTo.create(0.2, 0),
          cc.RemoveSelf.create()
        ));
      _this.addChild(item);
    }
  },
  onMouseUp:function(e) {
  },
  onMouseMove:function(e) {
  }
});
