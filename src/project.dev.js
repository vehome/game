require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Player":[function(require,module,exports){
"use strict";
cc._RFpush(module, '90f68VYGD5GIoCSDdE1rjX4', 'Player');
// script\Player.js

cc.Class({
    'extends': cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...

    },

    // use this for initialization
    onLoad: function onLoad() {},
    attack: function attack() {
        this.getComponent(cc.Animation).play('attack');
    },
    walk: function walk() {
        this.getComponent(cc.Animation).play('walk');
    },
    attackover: function attackover() {
        cc.log("over");
    },
    stopAllActions: function stopAllActions() {
        this.getComponent(cc.Animation).stop();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"game":[function(require,module,exports){
"use strict";
cc._RFpush(module, '38479Qr65BGeI2LyqQm9F+z', 'game');
// script\game.js

cc.Class({
    "extends": cc.Component,
    properties: {
        map: {
            "default": null,
            type: cc.TiledMap
        },
        hideLayer: {
            "default": null,
            type: cc.TiledLayer
        },
        mainLayer: {
            "default": null,
            type: cc.TiledLayer
        },
        player: {
            "default": null,
            type: cc.Prefab
        },
        player2: {
            "default": null,
            type: cc.Prefab
        },
        player3: {
            "default": null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {

        // 初始化键盘输入监听

        var scene = cc.director.getScene();
        var playnode = cc.instantiate(this.player);

        playnode.parent = this.node;
        playnode.setPosition(0, 0);
        playnode.name = "11";
        this.playerJS = playnode.getComponent("Player");

        var playnode2 = cc.instantiate(this.player2);

        playnode2.parent = this.node;
        playnode2.setPosition(60, 0);
        playnode2.name = "22";

        var playnode3 = cc.instantiate(this.player3);

        playnode3.parent = this.node;
        playnode3.setPosition(0, 60);
        playnode3.name = "33";
        //var touxiang = playnode3.getComponent(dragonBones.ArmatureDisplay).armature().getSlot('tou').childArmature;
        //var armature = playnode3.getComponent(dragonBones.ArmatureDisplay).armature();

        //armature.getSlot('tou').childArmature = playnode3.getComponent(dragonBones.ArmatureDisplay).buildArmature('tou1');

        this.setInputControl();
    },
    setInputControl: function setInputControl() {
        var self = this;
        // 添加键盘事件监听
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // 有按键按下时，判断是否是我们指定的方向控制键，并设置向对应方向速度
            onKeyPressed: function onKeyPressed(keyCode, event) {

                var nodes = self.node.getChildByName("11");
                var node2 = self.node.getChildByName("22");
                var node3 = self.node.getChildByName("33");
                var action, action2, action3;
                var an2 = node2.getComponent(dragonBones.ArmatureDisplay).armature().animation;
                var an3 = node3.getComponent(dragonBones.ArmatureDisplay).armature().animation;
                switch (keyCode) {
                    case cc.KEY.w:

                        action = cc.moveTo(0.5, nodes.x, nodes.y + 32);
                        action2 = cc.moveTo(0.5, node2.x, node2.y + 32);
                        action3 = cc.moveBy(1, 0, 32);
                        self.node.runAction(cc.moveBy(0.5, 0, -32));
                        //进行移动
                        //nodes.runAction(action);
                        self.playerJS.walk();
                        an2.play("walk");
                        an3.play("walk");
                        break;
                    case cc.KEY.s:

                        action = cc.moveTo(0.5, nodes.x, nodes.y - 32);
                        action2 = cc.moveTo(0.5, node2.x, node2.y - 32);
                        action3 = cc.moveBy(1, 0, 32);
                        self.node.runAction(cc.moveBy(0.5, 0, -32));
                        //进行移动
                        //nodes.runAction(action);
                        self.playerJS.walk();
                        an2.play("walk");
                        an3.play("walk");
                        break;
                    case cc.KEY.a:

                        action = cc.moveTo(0.5, nodes.x - 32, nodes.y);
                        action2 = cc.moveTo(0.5, node2.x - 32, node2.y);
                        action3 = cc.moveBy(1, -32, 0);
                        //进行移动
                        //nodes.runAction(action);
                        self.node.runAction(cc.moveBy(0.5, 32, 0));
                        self.playerJS.walk();
                        an2.play("walk");
                        an3.play("walk");
                        break;
                    case cc.KEY.d:

                        action = cc.moveTo(0.5, nodes.x + 32, nodes.y);
                        action2 = cc.moveTo(0.5, node2.x + 32, node2.y);
                        action3 = cc.moveBy(1, 32, 0);
                        //进行移动
                        //nodes.runAction(action);
                        self.node.runAction(cc.moveBy(0.5, -32, 0));
                        self.playerJS.walk();
                        an2.play("walk");
                        an3.play("walk");
                        break;
                    case cc.KEY.space:
                        action = cc.moveBy(1, 0, 0);
                        action2 = cc.moveBy(1, 0, 0);
                        action3 = cc.moveBy(1, 0, 0);
                        self.playerJS.attack();
                        an2.play("attack", 1);
                        an3.play("attack", 1);
                        break;
                }
                //移动完成过后。是玩家进入站立动画状态
                nodes.runAction(cc.sequence(action, cc.callFunc(function () {
                    self.playerJS.stopAllActions();
                })));

                node2.runAction(cc.sequence(action2, cc.callFunc(function () {
                    an2.play("stand");
                })));
                node3.runAction(cc.sequence(action3, cc.callFunc(function () {
                    an3.play("stand");
                })));

                cc.log(self.node);
            },
            // 松开按键时，停止向该方向的加速
            onKeyReleased: function onKeyReleased(keyCode, event) {
                switch (keyCode) {}
            }
        }, self.node);
    },
    //将地图中的像素单位坐标转化为瓦片单位坐标
    getTilePos: function getTilePos(posInPixel) {
        var mapSize = this.node.getContentSize();
        var tileSize = this.map.getTileSize();
        var x = Math.floor(posInPixel.x / tileSize.width);
        var y = Math.floor((mapSize.height - posInPixel.y) / tileSize.height);
        return cc.p(x, y);
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}]},{},["Player","game"]);
