'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const merge = require('merge-stream');

module.exports = function(options) {

	return function() {
		var spriteData = 
		gulp.src(options.src) 
		.pipe($.spritesmith({
			imgName: 'sprite.png',
			imgPath: '../img/sprite.png',
			cssName: '_sprite.scss',
			padding: 5,
			cssFormat: 'scss',
			cssTemplate: 'gulp/scss.template.new', // node node_modules/spritesheet-templates/lib/templates
		}));
		var imgStream = spriteData.img
		.pipe(gulp.dest(options.img));
		var cssStream = spriteData.css
		.pipe(gulp.dest(options.sass));

		return merge(imgStream, cssStream);
	};

};