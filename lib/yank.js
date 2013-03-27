/**
 * Module Dependencies
 */

var cheerio = require('cheerio');

/**
 * Expose `Yank`
 */

module.exports = Yank;

/**
 * Initialize Yank
 *
 * @param {String} html
 * @return {Yank}
 * @api public
 */

function Yank(html) {
  if(!(this instanceof Yank)) return new Yank(html);
  this.$ = cheerio.load(html);
}

/**
 * Parse data
 *
 * @return {Object}
 * @api public
 */

Yank.prototype.parse = function() {
  return {
    scripts : this.scripts(),
    styles : this.styles(),
    images : this.images()
  };
};

/**
 * Parse scripts
 *
 * @return {Array} scripts
 * @api private
 */

Yank.prototype.scripts = function() {
  var $ = this.$,
      out = [];

  $('script[src]').each(function() {
    var src = $(this).attr('src');
    if(~src.indexOf('://')) return;
    out.push(src);
  });

  return out;
};

/**
 * Parse styles
 *
 * @return {Array} styles
 * @api private
 */

Yank.prototype.styles = function() {
  var $ = this.$,
      out = [];

  $('link[href]').each(function() {
    var href = $(this).attr('href');
    if(~href.indexOf('://')) return;
    out.push(href);
  });

  return out;
};

/**
 * Parse images
 *
 * @return {Array} images
 * @api private
 */

Yank.prototype.images = function() {
  var $ = this.$,
      out = [];

  $('img[src]').each(function() {
    var src = $(this).attr('src');
    if(~src.indexOf('://')) return;
    out.push(src);
  });

  return out;
};
