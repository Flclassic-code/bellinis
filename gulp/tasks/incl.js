'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');

module.exports = function(options) {

	return function() {
		return gulp.src(options.src)
		.pipe($.debug({
			title: 'file'
		}))
		.pipe($.plumber({
			errorHandler: $.notify.onError(function(err) {
				return {
					title: 'htmlIncl',
					message: err.message
				}
			})
		}))
		.pipe($.fileInclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest(options.dst));	
	};

};