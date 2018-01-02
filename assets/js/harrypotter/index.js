!function (e) {
    function t() {
        return !(!/iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent.toLowerCase()) || /pc=1/.test(location.search))
    }

    e(function () {
        var r = window.innerHeight, a = window.innerWidth;
        var N = PIXI.Container,
            W = (PIXI.autoDetectRenderer, PIXI.loader),
            M = (PIXI.loader.resources, PIXI.utils.TextureCache, PIXI.Texture, PIXI.Text, new PIXI.ticker.Ticker, PIXI.Sprite),
            X = (PIXI.Rectangle, PIXI.Graphics),
            L = navigator.userAgent,
            R = L.indexOf("Android") > -1 || L.indexOf("Adr") > -1,
            U = (!!L.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), new N);
        U.width = a, U.height = r;
        var B = new PIXI.CanvasRenderer(a, r),
            // O = new PIXI.CanvasRenderer(a, r, {
            //     transparent: !0
            // });
            O = new PIXI.CanvasRenderer(600, 900, {
                transparent: !0
            });
        e(".potter_content")[0].appendChild(O.view);
        var H = "http://img2.cache.netease.com/f2e/news/potter/images/";
        W.add(H + "6/0.png").on("progress", t).load(n);

        var mt = {},
            yt = {},
            ft = {},
            bt = [],
            It = [],
            Ct = 0,
            Tt = [],
            Et = [],
            _t = !1,
            St = [{
                x: 0,
                y: 0
            }, {
                x: 1,
                y: 0
            }],
            Pt = new PIXI.Graphics;
        Pt.lineStyle(20, 15354189, 1);

        var Q = new N;
        var Ae = new N, je = new N, nt = new N, ot = new N, it = new N, st = new N;

        function n() {
            var ao = new M(W.resources[H + "6/0.png"].texture);
            ze = new N, ze.width = a, ze.height = r, ze.addChild(ao), ze.interactive = !0, ze.buttonMode = !0, ze.on("touchstart", T).on("touchmove", E).on("touchend", S);
            Ke = new N, Ke.position.set(348, 106), Ke.interactive = !0, Ze = new N;
            Ze.position.set(531, 106), Ze.interactive = !0, ze.addChild(nt, ot, it, st, Ke, Ze), e("canvas").eq(1).hide(), Q.interactive = !0, Q.buttonMode = !0, B.render(U), O.render(ze), A()
        }

        function A() {
            requestAnimationFrame(A), B.render(U), O.render(ze)
        }

        function C() {
            $t = !1, mt = {}, yt = {}, ft = {}, bt = [], It = [], Ct = 0, Tt = [], Et = [], Pt = new PIXI.Graphics, Pt.lineStyle(20, 15354189, 1), nt.removeChildren(), ot.removeChildren(), Nt = 0, Gt = !1
        }

        function T(e) {
            Ae.visible = !1, je.visible = !1,  C(), yt = e.data.getLocalPosition(this), Pt.moveTo(yt.x, yt.y), bt.push(yt), It.push(yt), Tt.push(yt);
            var t = new X;
            console.log(yt);
            t.beginFill(16777215), t.drawCircle(yt.x, yt.y, 3), t.endFill(), ot.addChild(t)
        }

        function E(e) {
            //console.log(e);
            var t = e.data.getLocalPosition(this),
                n = j(It[It.length - 1], t);
            F(yt, t);
            if (Pt.moveTo(yt.x, yt.y), Pt.lineTo(t.x, t.y), nt.addChild(Pt), n > 10) {
                It.push(t);
                var o = new X;
                if (o.beginFill(16777215), o.drawCircle(t.x, t.y, 3), o.endFill(), ot.addChild(o), It.length >= 3 && It.length - Ct >= 5) {
                    var i = It[Ct],
                        s = It[Ct + 1],
                        a = It[It.length - 1],
                        r = It[It.length - 3],
                        d = It[It.length - 2],
                        p = k(r, d, d, a),
                        l = k(i, s, s, a),
                        u = new X;
                    if (u.lineStyle(2, 65535, 1), u.moveTo(Tt[Tt.length - 1].x, Tt[Tt.length - 1].y), u.lineTo(It[It.length - 1].x, It[It.length - 1].y), p < 40 && l < 20);
                    else {
                        Ct = It.length - 1, Tt.push(It[Ct - 1]), Tt.push(It[Ct]), Tt.length > 1 && Et.push({
                            firstPoint: Tt[Tt.length - 3],
                            endPoint: Tt[Tt.length - 2]
                        });
                        var g = new X;
                        g.lineStyle(4, 16711935, 1), g.moveTo(Tt[Tt.length - 3].x, Tt[Tt.length - 3].y), g.lineTo(Tt[Tt.length - 2].x, Tt[Tt.length - 2].y), _()
                    }
                }
            }
            bt.push(t), yt = t
        }

        function S(e) {
            if ($t = !0, It.length - Ct == 1);
            else {
                if (Ct = It.length - 1, Tt.push(It[Ct - 1]), Tt.push(It[Ct]), Tt.length > 1 && Et.push({
                        firstPoint: Tt[Tt.length - 2],
                        endPoint: Tt[Tt.length - 1]
                    }), Tt.length <= 2) return;
                var t = new X;
                t.lineStyle(4, 16711935, 1), t.moveTo(Tt[Tt.length - 3].x, Tt[Tt.length - 3].y), t.lineTo(Tt[Tt.length - 1].x, Tt[Tt.length - 1].y);
            }
            _();
            //console.log(Et);
            for (var n = Et.length, i = "", s = 0; s < n; s++) i += " " + Et[s].styleName;
            for (var a = "", s = 0; s < At.length; s++) {
                var r = P(Et, At[s].rule);
                r === !0 && (a = At[s].figureName, Nt = At[s].figure)
            }
            1 == Nt ? alert('w正确') : '';
            2 == Nt ? alert('方形正确') : '';
            3 == Nt ? alert('z正确') : '';
            // 1 == Vt ? 1 == Nt ? o() : p() : 2 == Vt && (2 == Nt ? l() : u()), setTimeout(function () {
            //     Zt && C()
            // }, 300)
            setTimeout(function () {
                C()
            }, 300)
        }

        function j(e, t) {
            var n = Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
            return n
        }

        function F(e, t) {
            var n = 100 * Math.atan((t.y - e.y) / (t.x - e.x));
            return n
        }

        function k(e, t, n, o) {
            var i = {
                    x: t.x - e.x,
                    y: t.y - e.y
                },
                s = {
                    x: o.x - n.x,
                    y: o.y - n.y
                },
                a = i.x * s.x + i.y * s.y,
                r = Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2)) * Math.sqrt(Math.pow(s.x, 2) + Math.pow(s.y, 2)),
                d = a / r;
            d > 1 && (d = 1);
            var p = Math.acos(d),
                l = 180 * p / Math.PI;
            return l
        }

        function _() {
            for (var e = Et.length, t = 0; t < e; t++) {
                var n = k(Et[t].firstPoint, Et[t].endPoint, St[0], St[1]),
                    o = Et[t].firstPoint.x,
                    i = Et[t].firstPoint.y,
                    s = Et[t].endPoint.x,
                    a = Et[t].endPoint.y,
                    r = en;
                n < r ? (Et[t].style = 1, Et[t].styleName = "right") : n > 180 - r ? (Et[t].style = 0, Et[t].styleName = "left") : n > 90 - r && n < 90 + r ? a >= i ? (Et[t].style = 2, Et[t].styleName = "down") : (Et[t].style = 3, Et[t].styleName = "up") : s >= o && a <= i ? (Et[t].style = 4, Et[t].styleName = "up-right") : s < o && a < i ? (Et[t].style = 5, Et[t].styleName = "up-left") : s >= o && a >= i ? (Et[t].style = 6, Et[t].styleName = "down-right") : s < o && a > i && (Et[t].style = 7, Et[t].styleName = "down-left")
            }
        }

        function P(e, t) {
            for (var n = e.length, o = n - 1, i = t.length - 1; i >= 0; i--) {
                for (var s = 0; o >= 0; o--) {
                    for (var a = !1, r = 0; r < t[i].style.length; r++)
                        if (e[o].style == t[i].style[r]) {
                            s++, a = !0;
                            break
                        }
                    if (!a) break
                }
                if (!(s >= t[i].min && s <= t[i].max)) return !1
            }
            return !(o > -1)
        }

        var At = [{
            figure: 1,
            figureName: "W\u5f62",
            rule: [{
                style: [2, 6, 7],
                min: 1,
                max: 3
            }, {
                style: [1],
                min: 0,
                max: 1
            }, {
                style: [3, 4, 5],
                min: 1,
                max: 3
            }, {
                style: [1],
                min: 0,
                max: 1
            }, {
                style: [2, 6, 7],
                min: 1,
                max: 3
            }, {
                style: [1],
                min: 0,
                max: 1
            }, {
                style: [3, 4, 5],
                min: 1,
                max: 3
            }]
        }, {
            figure: 2,
            figureName: "\u65b9\u5f62",
            rule: [{
                style: [2, 6, 7],
                min: 1,
                max: 3
            }, {
                style: [0],
                min: 1,
                max: 3
            }, {
                style: [3, 4, 5],
                min: 1,
                max: 3
            }, {
                style: [1],
                min: 1,
                max: 3
            }, {
                style: [2, 6, 7],
                min: 1,
                max: 3
            }, {
                style: [0],
                min: 1,
                max: 3
            }, {
                style: [3, 4, 5],
                min: 1,
                max: 3
            }, {
                style: [1],
                min: 1,
                max: 3
            }, {
                style: [2, 6, 7],
                min: 1,
                max: 3
            }]
        },{
        figure: 3,
            figureName: "Z\u5f62",
            rule: [{
                style: [1],
                min: 0,
                max: 1
            }, {
                style: [7],
                min: 1,
                max: 1
            }, {
                style: [1],
                min: 0,
                max: 1
            }]
        }],
        en = 20
    });

}(jQuery);