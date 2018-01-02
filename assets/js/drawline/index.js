$(function(){
    $('body').on('touchmove', function (event) {
        event.preventDefault();
    });

    var U = $('canvas')[0],
    q = U.getContext('2d');
    U.width = 550, U.height = 580, q.rect(0, 0, 550, 580), q.fillStyle = "transparent", q.fill();
    var G = {
        x: 0,
        y: 0
    }, V;

    U.addEventListener("touchstart", function (e) {
        e.preventDefault(), V = e.touches[0], r({x: V.pageX,y: V.pageY}, U)
    }), U.addEventListener("touchmove", function (e) {
        e.preventDefault(), V = e.touches[0], q.globalCompositeOperation = "source-over", h({x: V.pageX,y: V.pageY}, q, U)
    }), U.addEventListener("touchend", function (e) {
        e.preventDefault(), p()
    });

    $('button').on('touchstart', function(){
        v()
    });

    function r(e, a) {
        G = m(e.x, e.y, a)
    }

    function m(e, a, t) {
        var n = t.getBoundingClientRect();
        return {
            x: Math.round(e - n.left),
            y: Math.round(a - n.top)
        }
    }

    function h(e, a, t) {
        var n = m(e.x, e.y, t),
            o = u(n, G);
        a.beginPath(), a.moveTo(G.x, G.y), a.lineTo(n.x, n.y), a.strokeStyle = "rgba(82,72,51,2)",
            a.lineWidth = 20, a.lineCap = "round", a.lineJoin = "round", a.stroke(), G = n
    }

    function u(e, a) {
        return Math.sqrt((e.x - a.x) * (e.x - a.x) + (e.y - a.y) * (e.y - a.y))
    }

    function p() {
        $('img').attr('src', U.toDataURL())
    }

    function v() {
        q.clearRect(0, 0, 750, 1e3);
        $('img').attr('src', 'http://cms-bucket.nosdn.127.net/fd9e7f9a8bd24d79b76ce7597e10c11420170417151828.jpeg');
    }
});