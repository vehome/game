require = function e(c, t, n) {
    function a(r, i) {
        if (!t[r]) {
            if (!c[r]) {
                var l = "function" == typeof require && require;
                if (!i && l) return l(r, !0);
                if (o) return o(r, !0);
                var p = new Error("Cannot find module '" + r + "'");
                throw p.code = "MODULE_NOT_FOUND",
                p
            }
            var s = t[r] = {
                exports: {}
            };
            c[r][0].call(s.exports,
            function(e) {
                var t = c[r][1][e];
                return a(t ? t: e)
            },
            s, s.exports, e, c, t, n)
        }
        return t[r].exports
    }
    for (var o = "function" == typeof require && require,
    r = 0; r < n.length; r++) a(n[r]);
    return a
} ({
    Player: [function(e, c, t) {
        "use strict";
        cc._RFpush(c, "90f68VYGD5GIoCSDdE1rjX4", "Player"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {},
            attack: function() {
                this.getComponent(cc.Animation).play("attack")
            },
            walk: function() {
                this.getComponent(cc.Animation).play("walk")
            },
            attackover: function() {
                cc.log("over")
            },
            stopAllActions: function() {
                this.getComponent(cc.Animation).stop()
            }
        }),
        cc._RFpop()
    },
    {}],
    game: [function(e, c, t) {
        "use strict";
        cc._RFpush(c, "38479Qr65BGeI2LyqQm9F+z", "game"),
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
            onLoad: function() {
                this.setInputControl();
                var e = (cc.director.getScene(), cc.instantiate(this.player));
                e.parent = this.node,
                e.setPosition(0, 0),
                e.name = "11",
                this.playerJS = e.getComponent("Player");
                var c = cc.instantiate(this.player2);
                c.parent = this.node,
                c.setPosition(60, 0),
                c.name = "22";
                var t = cc.instantiate(this.player3);
                t.parent = this.node,
                t.setPosition(0, 60),
                t.name = "33"
            },
            setInputControl: function() {
                var e = this;
                cc.eventManager.addListener({
                    event: cc.EventListener.KEYBOARD,
                    onKeyPressed: function(c, t) {
                        var n, a, o, r = e.node.getChildByName("11"),
                        i = e.node.getChildByName("22"),
                        l = e.node.getChildByName("33"),
                        p = i.getComponent(dragonBones.ArmatureDisplay).armature().animation,
                        s = l.getComponent(dragonBones.ArmatureDisplay).armature().animation;
                        switch (c) {
                        case cc.KEY.w:
                            n = cc.moveTo(.5, r.x, r.y + 32),
                            a = cc.moveTo(.5, i.x, i.y + 32),
                            o = cc.moveBy(1, 0, 32),
                            e.node.runAction(cc.moveBy(.5, 0, -32)),
                            e.playerJS.walk(),
                            p.play("walk"),
                            s.play("walk");
                            break;
                        case cc.KEY.s:
                            n = cc.moveTo(.5, r.x, r.y - 32),
                            a = cc.moveTo(.5, i.x, i.y - 32),
                            o = cc.moveBy(1, 0, -32),
                            e.node.runAction(cc.moveBy(.5, 0, 32)),
                            e.playerJS.walk(),
                            p.play("walk"),
                            s.play("walk");
                            break;
                        case cc.KEY.a:
                            n = cc.moveTo(.5, r.x - 32, r.y),
                            a = cc.moveTo(.5, i.x - 32, i.y),
                            o = cc.moveBy(1, -32, 0),
                            e.node.runAction(cc.moveBy(.5, 32, 0)),
                            e.playerJS.walk(),
                            p.play("walk"),
                            s.play("walk");
                            break;
                        case cc.KEY.d:
                            n = cc.moveTo(.5, r.x + 32, r.y),
                            a = cc.moveTo(.5, i.x + 32, i.y),
                            o = cc.moveBy(1, 32, 0),
                            e.node.runAction(cc.moveBy(.5, -32, 0)),
                            e.playerJS.walk(),
                            p.play("walk"),
                            s.play("walk");
                            break;
                        case cc.KEY.space:
                            n = cc.moveBy(1, 0, 0),
                            a = cc.moveBy(1, 0, 0),
                            o = cc.moveBy(1, 0, 0),
                            e.playerJS.attack(),
                            p.play("attack"),
                            s.play("attack");
                            break;
                        }
                        r.runAction(cc.sequence(n, cc.callFunc(function() {
                            e.playerJS.stopAllActions()
                        }))),
                        i.runAction(cc.sequence(a, cc.callFunc(function() {
                            p.play("attack")
                        }))),
                        l.runAction(cc.sequence(o, cc.callFunc(function() {
                            s.play("stand")
                        }))),
                        cc.log(e.node)
                    },
                    onKeyReleased: function(e, c) {}
                },
                e.node)
            },
            getTilePos: function(e) {
                var c = this.node.getContentSize(),
                t = this.map.getTileSize(),
                n = Math.floor(e.x / t.width),
                a = Math.floor((c.height - e.y) / t.height);
                return cc.p(n, a)
            }
        }),
        cc._RFpop()
    },
    {}]
},
{},
["Player", "game"]);
