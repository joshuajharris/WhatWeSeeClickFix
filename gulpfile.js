var gulp = require('gulp'),
    includeSources = require('gulp-include-source');

gulp.task('html', function() {
  return gulp.src( './index.html' )
    .pipe( includeSources() )
    .pipe( gulp.dest('build/') );
});
