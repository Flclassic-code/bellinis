'use strict';

const $ = require('gulp-load-plugins')();
const gulp   = require('gulp');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {

	return function() {
		return gulp.src(options.src)
		.pipe($.cached('scripts'))
		.pipe($.if( !isDevelopment, $.jsmin() )) 
		.pipe($.remember('scripts'))
		.pipe($.concat('libs.min.js')) 
		.pipe(gulp.dest(options.dst))
	};
	
};