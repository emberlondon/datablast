import Ember from 'ember';
import $ from 'jquery';


  var paths = [],
      points = [],
      lastPointPath = 0,
      lastLinePath = 0,
      pointAppearWindow = 1000,
      t = 0, //draw cycle counter
      svg;

  function init() {
    svg = document.querySelector('.crowdstrike svg');
    paths = svg.querySelectorAll('path.edge');
    dm.current.push(timeTick);
    dm.current.push(drawPoints);
    dm.current.push(drawLines);
    dm.init();
    setTimeout(function() {
      fills();
    }, 2000);
  }

  function timeTick() {
    t += 1;
  }

  function drawPoint(x,y) {
    var ne = document.createElementNS("http://www.w3.org/2000/svg",'circle');
    ne.setAttribute('cx', x);
    ne.setAttribute('cy', y);
    ne.setAttribute('r', 2);
    points.push(ne);
    svg.appendChild(ne);
    return ne;
  }

  function drawPoints() {
    var nextTickPoint = (pointAppearWindow / paths.length) * lastPointPath,
        tt = t*16;

    var path = paths[lastPointPath];
    if (path) {
      if (tt < pointAppearWindow && tt > nextTickPoint) {
        var loc = path.getPointAtLength(0),
            point = drawPoint(loc.x, loc.y);
        setTimeout(function() {
          tween(point, 'opacity', 1, 0, 1000);
        }, 1000);
        lastPointPath += 1;
      }
    } else {
      dm.remove(drawPoints);
    }
  }

  function drawLines() {
    var nextTickPoint = (pointAppearWindow / paths.length) * lastLinePath,
    tt = t*16;

    var path = paths[lastLinePath];
    if (path) {
      if (tt < pointAppearWindow && tt > nextTickPoint) {
        var length = path.getTotalLength();
        path.style.strokeDashoffset = length;
        path.style.strokeDasharray = length;
        path.style.stroke= '#bbb';
        tween(path, 'strokeDashoffset', length, 0, 1000);
        lastLinePath += 1;
      }
    } else {
      dm.remove(drawLines);
    }
  }

  function fills() {
    var reds = document.querySelectorAll('path.red'),
        darks = document.querySelectorAll('polygon.dark, path.dark'),
        edges = document.querySelectorAll('path.edge');
    Array.prototype.forEach.call(reds, function(r) {
      r.style.opacity = '0';
      r.style.fill = '#EA3A26';
      tween(r, 'opacity', 0, 1, 2000);
    });
    Array.prototype.forEach.call(darks, function(r) {
      r.style.opacity = '0';
      r.style.fill = '#474748';
      tween(r, 'opacity', 0, 1, 2000);
    });
    Array.prototype.forEach.call(edges, function(r) {
      tween(r, 'opacity', 1, 0, 2000);
    });
    setTimeout(function() {
      tween($('.crowdstrike ol')[0], 'opacity', 0, 1, 2000);
    }, 2000);
  }

  var tween = function(elem, prop, startVal, endVal, time) {
    var ease = cubic,
        t0 = t,
        i = interpolate(startVal, endVal),
        tick;

    tick = function() {
      var tx = ((t - t0) * 16) / time;
      if (tx >= 1) {
        dm.remove(tick);
      }
      elem.style[prop] = i(ease(tx));
    };

    dm.current.push(tick);
  };

  //DrawManager
  var dm = {
    init: function() {
      dm.draw();
    },

    current: [],

    draw: function() {
      dm.current.forEach(function(f) {
        f();
      });
      if (dm.current.length > 1) {
        window.requestAnimationFrame( dm.draw );
      }
    },

    remove: function(func) {
      dm.current = dm.current.filter(function(f) {
        return f !== func;
      });
    }
  };

  //D3 Borrowed
  function cubic(t) {
    if (t <= 0) { return 0; }
    if (t >= 1) { return 1; }
    var t2 = t * t, t3 = t2 * t;
    return 4 * (t < 0.5 ? t3 : 3 * (t - t2) + t3 - 0.75);
  }

  function interpolate(a, b) {
    a = +a;
    b = +b;
    return function(t) { return a * (1 - t) + b * t; };
  }



export default Ember.View.extend({
  classNames: ['crowdstrike'],

  didInsertElement: function() {
    init();
  }
});

