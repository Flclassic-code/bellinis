'use strict';

const $ = require('gulp-load-plugins')();
const gulp   = require('gulp');
const path = require('path'); 

module.exports = function(options) {

	return function() {
		gulp.watch(options.src, gulp.series('copy')).on('unlink', function(filepath) {
				delete $.cached.caches.copy[path.resolve(filepath)];
			});
		};

	};