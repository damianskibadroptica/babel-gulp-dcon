var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var webpack = require("gulp-webpack");
var runSequence = require('run-sequence');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

gulp.task('build', (callback) => {
  runSequence('js-module-bundler', 'js-transpile', 'js-uglify', callback);
});

gulp.task('js-module-bundler', () => {
  return gulp.src("src/*.js")
    .pipe(webpack())
    .pipe(rename("pack.es6.js"))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js-transpile', () => {
  return gulp.src('./dist/pack.es6.js')
    .pipe(babel())
    .pipe(rename("pack.es5.js"))
    .pipe(gulp.dest('./dist'))
});

gulp.task('js-uglify', () => {
  return gulp.src('./dist/pack.es5.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist"));
});

