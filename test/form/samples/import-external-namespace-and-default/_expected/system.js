System.register(['foo'], function (exports, module) {
	'use strict';
	var foo, foo__default;
	return {
		setters: [function (module) {
			foo = module;
			foo__default = module.default;
		}],
		execute: function () {

			console.log( foo );

			console.log( foo__default );

		}
	};
});
