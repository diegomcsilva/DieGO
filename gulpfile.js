var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var gls = require('gulp-live-server');
var concat = require('gulp-concat');

gulp.task('default', ['sass', 'watch', 'serve']);

gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(concat('style.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('public/*.js');
});

gulp.task('serve', function() {
    var server = gls.static('./', 8000);
    server.start();
    gulp.watch('src/css/*.css', function(file) {
        gls.notify.apply(server, [file]);
    });
    gulp.watch('src/js/*.js', function(file) {
        gls.notify.apply(server, [file]);
    });
    gulp.watch('./*html', function(file) {
        gls.notify.apply(server, [file]);
    });
});
