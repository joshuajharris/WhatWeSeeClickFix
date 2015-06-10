var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('uglify', function() {
  return gulp.src(['bower_components/**/*.js', 'js/**/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

gulp.task('default', function(){});
