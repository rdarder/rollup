System.register(['foo'], function (exports, module) {
	'use strict';
	var foo__default, named_export, foo;
	return {
		setters: [function (module) {
			foo__default = module.default;
			named_export = module.named_export;
			foo = module;
		}],
		execute: function () {

			console.log( foo__default );
			console.log( foo );
			console.log( named_export );

		}
	};
});
