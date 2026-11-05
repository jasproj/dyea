/* D'YEA signal rain — binary + D's, dim, behind everything */
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var c = document.createElement('canvas');
  c.id = 'rain';
  c.setAttribute('aria-hidden', 'true');
  c.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:.55';
  document.body.insertBefore(c, document.body.firstChild);
  var ctx = c.getContext('2d');
  var CHARS = '0101010101D01010D010110D';
  var FONT = 18, cols = [], W, H, dpr;

  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = c.width = innerWidth * dpr; H = c.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = FONT + 'px "VT323", monospace';
    var n = Math.ceil(innerWidth / FONT);
    cols = [];
    for (var i = 0; i < n; i++) cols.push({ y: Math.random() * -innerHeight / FONT, v: .35 + Math.random() * .65 });
  }
  var last = 0;
  function frame(t) {
    requestAnimationFrame(frame);
    if (t - last < 50) return; last = t;
    ctx.fillStyle = 'rgba(0,0,0,.14)';
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < cols.length; i++) {
      var col = cols[i], ch = CHARS[(Math.random() * CHARS.length) | 0], x = i * FONT, y = col.y * FONT;
      if (ch === 'D') { ctx.fillStyle = '#E8B23A'; ctx.font = 'bold ' + (FONT + 2) + 'px "VT323", monospace'; }
      else { ctx.fillStyle = Math.random() < .08 ? '#9dffb3' : '#33ff66'; ctx.font = FONT + 'px "VT323", monospace'; }
      ctx.fillText(ch, x, y);
      col.y += col.v;
      if (y > innerHeight && Math.random() > .975) { col.y = 0; col.v = .35 + Math.random() * .65; }
    }
  }
  size(); addEventListener('resize', size); requestAnimationFrame(frame);
})();
