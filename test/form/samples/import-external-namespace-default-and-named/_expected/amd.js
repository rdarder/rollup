define(['foo'], function (foo) { 'use strict';

	var foo__default = 'default' in foo ? foo['default'] : foo;

	console.log( foo__default );
	console.log( foo );
	console.log( foo.named_export );

});
