'use strict';

const $ = require('gulp-load-plugins')();
const gulp   = require('gulp');

module.exports = function(options) {

	return function() {
		return gulp.src(options.src, {base: options.gulpBase})
		.pipe($.zip(options.zipName))
		.pipe(gulp.dest(options.dst));
	};
	
};