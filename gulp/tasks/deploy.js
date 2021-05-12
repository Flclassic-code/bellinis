'use strict';

const $ = require('gulp-load-plugins')();
const gulp   = require('gulp');

const ftp = require( 'vinyl-ftp' );
const gutil = require( 'gulp-util' );
const combine = require('stream-combiner2').obj;

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {

	return function() {
		var conn = options.settings;
		conn.log = $.util.log,
		conn = ftp.create(conn);
		// using base = '.' will transfer everything to /public_html correctly
		// turn off buffering in gulp.src for best performance
		return gulp.src( options.src, { base: options.gulpBase, buffer: false, since: gulp.lastRun('deploy') } )
		.pipe($.if( !isDevelopment, combine(
			conn.newer( options.remoteFolder ),
			conn.dest( options.remoteFolder )
			) )
		)
	};
	
};