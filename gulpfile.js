// Gulpfile
var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    browsersync = require('browser-sync').create();

// Browser Sync
gulp.task('browser-sync', function () {
    browsersync.init({
       server: {
           baseDir: './'
       }
    });
});

gulp.task('default', ['browser-sync']);

