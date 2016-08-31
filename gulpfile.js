'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    stylus = require('gulp-stylus'),
    maps = require('gulp-sourcemaps'),
    del = require('del'),
    nib = require('nib'),
    exec = require('child_process').exec;

var app = {
	name: 'SheisFanny',
	theme: 'fanny',
	src: './source',
	tmp: './.tmp_src',
	dst: './public',
	dst_assets: './public/assets',
	bower: { src: './bower_components' },
	assets_path: './source/assets',
	versions: {
		app: '0.0.1',
		iconfont: "1",
	}
};

gulp.task("concatScripts", function(){
   gulp.src([
       'source/javascript/jquery.js',              
       'source/javascript/sticky/jquery.sticky.js',
       'source/javascript/myangular.js',
       'source/javascript/main.js'])
   .pipe(maps.init())
   .pipe(concat("app.js"))
   .pipe(maps.write('./'))
   .pipe(gulp.dest('source/javascript'));
});

gulp.task("minifyScripts", function(){
    return gulp.src("source/javascript/app.js")
    .pipe(gulp.dest('public/assets/javascript'))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('public/assets/javascript'));
    });

gulp.task('compileStylus', function(){
    return gulp.src("source/css/*.styl")
      .pipe(maps.init())
      .pipe(stylus({use : nib()}))
      .pipe(maps.write('./'))
      .pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task("handleScripts", ['concatScripts', 'minifyScripts']);

gulp.task("build", ['handleScripts', 'compileStylus'], function() {
  return    gulp.src(["source/assets/img/**"] , { base: ''}). 
                     pipe(gulp.dest('public/assets/img')) &&
            gulp.src(["source/assets/fonts/**"] , { base: ''}). 
                     pipe(gulp.dest('public/assets/fonts')) &&
            gulp.src(["source/css/application.css", 'index.html'], { base: './'}) 
                    .pipe(gulp.dest('public'));
});

gulp.task('watchFiles', function() {
  gulp.watch('src/css/**/*.scss', ['compileStylus']);
  gulp.watch('src/js/main.js', ['concatScripts']);
});

gulp.task('serve', ['watchFiles','runNode']);

gulp.task("default", ["clean"], function() {
  gulp.start('build');
});

gulp.task('runNode', function (callback) {
    exec('node server.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        callback(err);
    });
});

gulp.task('clean', function() {
  del(['public', 'assets/stylesheets/application.css*', 'javascript/app*.js*']);
});

gulp.task("default", function() {
  console.log("pooping");
});
