requirejs.config({

	baseUrl: 'js/lib',
    paths: {
        index: '../index',
        jquery: 'jquery-1.8.3.min',
        springy: 'springy',
        springyui: 'springyui',
        backbone:'backbone-min',
        underscore:'underscore-min',
        bootstrap: 'bootstrap/js/bootstrap.min'
    },
    shim: {
    	'underscore': {
            exports: '_'
        },
    	'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'bootstrap':{deps: ['jquery']}
    }
});


requirejs(['jquery','bootstrap','index/demo'], function($, _bootstrap){
	return {};
});