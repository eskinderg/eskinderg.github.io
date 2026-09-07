import { task, src, dest } from 'gulp';
import rename from 'gulp-rename';
import jsonminify from 'gulp-jsonminify';
import { deleteAsync } from 'del';

task('minify', function () {
    return src(['src/assets/json/**/*.json'])
        .pipe(jsonminify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist/browser/assets/json/'));
});

task('copy', async function () {
    await deleteAsync(['docs/**/*', '!docs']);
    console.log('docs folder cleaned successfully!');
    // 2. Copy ALL browser assets (including subfolders for images/fonts)
    return src('dist/browser/**/*', { encoding: false }).pipe(dest('docs'));
});
