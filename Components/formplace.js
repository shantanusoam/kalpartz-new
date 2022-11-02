{
  function name(params) {
    (function () {
      let r;
      const d = document;
      const gt = d.getElementById;
      const cr = d.createElement;
      const tg = d.getElementsByTagName;
      const id = 'aidaform-embed';
      if (!gt.call(d, id)) {
        r = cr.call(d, 'script');
        r.id = id;
        r.src = 'https://embed.aidaform.com/embed.js';
        (d.head || tg.call(d, 'head')[0]).appendChild(r);
      }
    })();
  }
}
