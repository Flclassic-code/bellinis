'use strict';

const $ = require('gulp-load-plugins')();
const gulp   = require('gulp');
const path = require('path'); 

module.exports = function(options) {

	return function() {
		gulp.watch(options.src, gulp.series('styles')).on('unlink', function(filepath) {
			$.remember.forget('styles', path.resolve(filepath));
			delete $.cached.caches.styles[path.resolve(filepath)];
		});
	};
	
};