'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combine = require('stream-combiner2').obj;

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {

	return function() {
		return gulp.src(options.src)
		.pipe($.plumber({
			errorHandler: $.notify.onError(function(err) {
				return {
					title: 'sass',
					message: err.message
				}
			})
		}))
		.pipe($.if(isDevelopment, $.sourcemaps.init()))	
		.pipe($.sass({outputStyle: 'expanded'}))
		.pipe( $.if( !isDevelopment, combine(
			$.groupCssMediaQueries(),
			$.autoprefixer(['last 15 versions'], { cascade: true }), 
			$.cleanCss({compatibility: 'ie8', keepSpecialComments: false })
			))
		)
		.pipe($.if(isDevelopment, $.sourcemaps.write('.')))	
		.pipe(gulp.dest(options.dst))
	};
	
};