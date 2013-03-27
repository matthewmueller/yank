/**
 * Module Dependencies
 */

var expect = require('expect.js'),
    Yank = require('../'),
    read = require('fs').readFileSync;

/**
 * Files
 */

var component = read(__dirname + '/files/component.html', 'utf8');

describe('Yank', function () {

  describe('parse', function () {

    it('should pull out all scripts and styles', function () {
      var yank = Yank(component);
      var out = yank.parse();
      expect(out.scripts[0]).to.equal('../build/build.js')
      expect(out.styles[0]).to.equal('../build/build.css')
    });

  });

});
