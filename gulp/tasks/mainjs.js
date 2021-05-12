'use strict';

const $ = require('gulp-load-plugins')();
const gulp   = require('gulp');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {

	return function() {
		return gulp.src(options.src)
		.pipe($.concat(options.jsName)) 

		.pipe($.if( !isDevelopment, $.stripDebug() ))
		.pipe($.if( !isDevelopment, $.jsmin() ))
		.pipe($.debug({title: 'newer main'}))
		.pipe(gulp.dest(options.dst)); 
	};
	
};