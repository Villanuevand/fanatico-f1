// Gulpfile
var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    browsersync = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps');

// Browser Sync
gulp.task('browser-sync', function () {
    browsersync.init({
       server: {
           baseDir: './'
       }
    });
});

// Js Bundle
gulp.task('bundleJS', function () {
    return gulp.src('./fanatico-f1/**/*')
        .pipe(sourcemaps.init())
        .pipe(concat('fanaticof1.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'))
});

gulp.task('build',['browser-sync','bundleJS']);
gulp.task('default', ['build']);

