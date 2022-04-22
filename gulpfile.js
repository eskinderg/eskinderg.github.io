var gulp = require('gulp');
var rename = require('gulp-rename');
var jsonminify = require('gulp-jsonminify');
// var settings = require('./server.settings.json');
// var sftp = require('gulp-sftp');

// gulp.task('deploy', function () {
  // return gulp.src('dist/**').pipe(sftp(settings.server));
// });

gulp.task('minify', function () {
  return gulp.src(['src/assets/json/*.json'])
    .pipe(jsonminify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('docs/assets/json/'));
});
