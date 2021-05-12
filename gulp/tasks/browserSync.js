'use strict';

const $ = require('gulp-load-plugins')();
const gulp   = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

module.exports = function(options) {

	return function() {
		browserSync.init({
			server: {
				baseDir: options.baseFolder
			},
			files: options.src
		})
	};
	
};

// gulp.task('browserSync', function() {
//  browserSync.init({
//      proxy: 'localhost:8888/longevity/'
//  });
// });
