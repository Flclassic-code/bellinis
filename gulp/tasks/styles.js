'use strict';

const $ = require('gulp-load-plugins')();
const gulp   = require('gulp');
const combine = require('stream-combiner2').obj;

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {

	return function() {
		return gulp.src(options.src)
		.pipe($.plumber({
			errorHandler: $.notify.onError(function(err) {
				return {
					title: 'styles',
					message: err.message
				}
			})
		}))
		.pipe($.cached('styles'))
		.pipe( $.if( !isDevelopment, combine(
			$.groupCssMediaQueries(),
			$.autoprefixer(['last 15 versions'], { cascade: true }), 
			$.cleanCss({compatibility: 'ie8', keepSpecialComments: false })
			))
		)
		.pipe($.remember('styles'))
		.pipe($.concat(options.cssName))
		.pipe(gulp.dest(options.dst))
	};
	
};