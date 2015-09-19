var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    connect = require('gulp-connect'),
    source = require('vinyl-source-stream'),
    del = require('del');


gulp.task('clean', function() {
    return del.sync(['public/dist']);
});

gulp.task('build', ['clean', 'copy:md'], function() {
    return browserify({
        entries: './src/frontend/main.js',
        extensions: ['.jsx'],
        debug: true
    })
    .transform(babelify)
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/dist'));
});

gulp.task('copy:md', function() {
    return gulp.src('./src/text/**/*.md').pipe(gulp.dest('public/dist'));
});

gulp.task('reload', ['build'], function() {
    return gulp.src('./src/').pipe(connect.reload());
})

gulp.task('watch', function() {
    gulp.watch(['./src/frontend/**/*.js'], ['reload']);
    gulp.watch(['./src/text/**/*.md'], ['reload']);
});

gulp.task('connect', function() {
  connect.server({
    root: './public',
    livereload: true
  });
});

gulp.task('serve', ['build', 'watch', 'connect']);
