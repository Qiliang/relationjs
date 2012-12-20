requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-1.8.3.min',
        springy: 'springy',
        springyui: 'springyui',
        backbone:'backbone-min',
        underscore:'underscore-min'
    },
    shim: {
    	'underscore': {
            exports: '_'
        },
    	'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

// Start the main app logic.
requirejs(['app/demo'],function   (demo) {

//	alert(springy);
//	alert(jQuery.fn.springy);
});