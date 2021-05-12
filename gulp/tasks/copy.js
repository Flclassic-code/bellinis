'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');

module.exports = function(options) {

	return function() {
		return gulp.src(options.src, {
				base: options.gulpBase, 
				// since: gulp.lastRun('copy') // better performance (without live add file in prod)
			})
		.pipe($.cached('copy')) // if need add file in prod(live)
		.pipe($.newer(options.dst))
		.pipe(gulp.dest(options.dst))
	};
	
};