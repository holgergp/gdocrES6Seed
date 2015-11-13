'use strict';

var _foo = require('../main/foo.js');

var _foo2 = _interopRequireDefault(_foo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ES6 Foo', function () {

    var foo = undefined;

    beforeEach(function () {
        foo = new _foo2.default();
    });

    it('should return Do Something when calling doSomething', function () {
        expect(foo.doSomething()).toEqual('Do Something');
    });
});
//# sourceMappingURL=fooTest.js.map
