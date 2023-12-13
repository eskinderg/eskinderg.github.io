var gulp = require('gulp');
var rename = require('gulp-rename');
var jsonminify = require('gulp-jsonminify');

gulp.task('minify', function () {
  return gulp.src(['src/assets/json/**/*.json'])
    .pipe(jsonminify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('docs/assets/json/'));
});
