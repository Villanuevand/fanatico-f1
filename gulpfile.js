// Gulpfile
var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    browsersync = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps'),
    ngAnnotate = require('gulp-ng-annotate'),
    del        = require('del'); //rm -rf

// Browser Sync
gulp.task('browser-sync', function () {
    browsersync.init({
       server: {
           baseDir: './'
       }
    });
});
// Delete folder
gulp.task('delete', function () {
    return del(['dist'])
});
// Js Bundle
gulp.task('bundleJS',['delete'], function () {
    var app = './src/app.js',
        routes = './src/app.routes.js',
        filter = './src/app.filter.js',
        controllers = './src/controllers/*.js',
        services = './src/services/*.js',
        directives = './src/directives/*.js';
    return gulp.src([app,routes,filter,services,directives,controllers])
        .pipe(sourcemaps.init())
        .pipe(concat('fanaticof1.min.js',{newLine: ';'}))
        .pipe(ngAnnotate({
            single_quotes: true
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'))
});

gulp.task('build',['delete','bundleJS']);
gulp.task('default', ['build','browser-sync']);

