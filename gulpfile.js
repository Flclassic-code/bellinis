'use strict';

const $ = require('gulp-load-plugins')();
const gulp   = require('gulp');
const cfg = require('./gulp/config.json').config;

const emitty = require('emitty').setup(cfg.src.templates, 'pug');

var copyArray = [
cfg.src.fonts + '/**', 
cfg.src.img + '/**', 
cfg.src.phpMailer + '/**', 
cfg.src.sendmail,
cfg.src.favicon
];

function lazyRequiredTask(taskName, path, options) {
	options = options || {};
	options.taskName = taskName;
	gulp.task(taskName, function(callback) {
		let task = require(path).call(this, options);

		return task(callback);
	})
}

lazyRequiredTask('sass', './gulp/tasks/sass', {
	src: cfg.src.sass + '/**/*.{scss,sass}',
	dst: cfg.dest.css
});
lazyRequiredTask('sass:watch', './gulp/tasks/sass_watch', {
	src: cfg.src.sass + '/**/*.{scss,sass}',
});

lazyRequiredTask('clean', './gulp/tasks/clean', {
	dst: cfg.dest.root
});

lazyRequiredTask('browserSync', './gulp/tasks/browserSync', {
	src: [ cfg.dest.js+'/**/*.js', cfg.dest.root+'/**/*.html', cfg.dest.css+'/**/*.css' ],
	baseFolder: cfg.dest.root
});

lazyRequiredTask('deploy', './gulp/tasks/deploy', {
	settings: {
		host:     'styleup.ftp.tools',
		user:     '',
		password: '',
		parallel: 10,
		maxConnections: 10,
		timeOffset: 120 //vinyl-ftp > filter.js / change remote.ftp.date (equal file.stat.mtime)
	},
	src: cfg.dest.root + '/**',
	gulpBase: cfg.dest.root,
	remoteFolder: '/divclass.org/dev/tar77777/'
});
lazyRequiredTask('deploy:watch', './gulp/tasks/deploy_watch', {
	src: cfg.dest.root + '/**'
});

lazyRequiredTask('copy', './gulp/tasks/copy', {
	src: copyArray,
	gulpBase: cfg.src.root,
	dst: cfg.dest.root
});
lazyRequiredTask('copy:watch', './gulp/tasks/copy_watch', {
	src: copyArray
});

lazyRequiredTask('styles', './gulp/tasks/styles', {
	src: cfg.src.css + '/**/*.css',
	cssName: 'main.css',
	dst: cfg.dest.css
});
lazyRequiredTask('styles:watch', './gulp/tasks/styles_watch', {
	src: cfg.src.css + '/**/*.css'
});

lazyRequiredTask('scripts', './gulp/tasks/scripts', {
	src: cfg.src.jslibs + '/**/*.js',
	dst: cfg.dest.js
});
lazyRequiredTask('scripts:watch', './gulp/tasks/scripts_watch', {
	src: cfg.src.jslibs + '/**/*.js',
});

lazyRequiredTask('mainjs', './gulp/tasks/mainjs', {
	src: cfg.src.js + '/main.js',
	jsName: 'main.min.js',
	dst: cfg.dest.js
});
lazyRequiredTask('mainjs:watch', './gulp/tasks/mainjs_watch', {
	src: cfg.src.js + '/main.js',
});

lazyRequiredTask('zip', './gulp/tasks/zip', {
	src: [ cfg.src.root + '/**', cfg.dest.root + '/**' ],
	dst: '.',
	gulpBase: '.',
	zipName: cfg.dest.root+'.zip'
});

lazyRequiredTask('sprite', './gulp/tasks/sprite', {
	src: cfg.src.sprite + '/*.*',
	img: cfg.src.img,
	sass: cfg.src.sass
});

lazyRequiredTask('incl', './gulp/tasks/incl', {
	src: cfg.src.root + '/*.html',
	dst: cfg.dest.root
});
lazyRequiredTask('incl:watch', './gulp/tasks/incl_watch', {
	src: cfg.src.root + '/*.html'
});

gulp.task('pug_emitty', () => {
	// Shows that run 'watch' mode
	global.watch = true;

	gulp.watch(cfg.src.templates + '/**/*.pug', gulp.series('template_page'))
	.on('all', (event, filepath) => {
		global.emittyChangedFile = filepath;
	});
});

gulp.task('template_page', () =>
	new Promise((resolve, reject) => {
		emitty.scan(global.emittyChangedFile).then(() => {
			gulp.src(cfg.src.templates + '/*.pug',)
			.pipe($.plumber({
				errorHandler: $.notify.onError(function(err) {
					return {
						title: 'template_page',
						message: err.message
					}
				})
			}))
			.pipe($.if(global.watch, emitty.filter(global.emittyChangedFile)))
			.pipe($.pug({ pretty: true }))
			.pipe($.imgsizefix({
				debug: false,
				force: true 
			}))
			.pipe($.replace('../', ''))
			.pipe(gulp.dest(cfg.dest.root))
			.on('end', resolve)
			.on('error', reject);
		});
	})
	);

gulp.task('build', gulp.series(
	'clean',
	// 'sprite',
	gulp.parallel(
		'sass', 
		// 'incl', // gulp-file-include from (htmlIncl/*.html)
		// 'styles', // concat all default css (css/*.css) file (not from scss) 
		'copy',
		'scripts',
		'mainjs',
		'template_page',
		),
	'deploy',
	)
);

gulp.task('default', gulp.series(
	'build', 
	gulp.parallel(
		'sass:watch',
		// 'incl:watch',
		// 'styles:watch',
		'copy:watch',
		'pug_emitty',
		'browserSync',
		'scripts:watch',
		'mainjs:watch',
		'deploy:watch',
		)
	)
);
