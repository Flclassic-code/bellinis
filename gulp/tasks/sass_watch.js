'use strict';

const $ = require('gulp-load-plugins')();
const gulp   = require('gulp');

module.exports = function(options) {

	return function() {
		gulp.watch( options.src, gulp.series('sass') );
	};
	
};