
# Yank

  Yank the relative dependencies out of an html file

## Example

```html
<html>
<head>
  <link rel="stylesheet" href="../build/build.css">
</head>
<body>
  <h1>component</h1>
  <script src="../build/build.js" type="text/javascript"></script>
  <script type="text/javascript">
    var component = require('component');
  </script>
</body>
</html>
```

```js
var assets = yank(component).parse();
assets.styles // [ '../build/build.css' ]
assets.scripts // [ '../build/build.js' ]
```

## API

### `Yank(str)`

Initialize `Yank` with a given string.

### `parse()`

Pull the resources out of the string.

## License

(The MIT License)

Copyright (c) 2013 Matthew Mueller &lt;mattmuelle@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
