var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    connect = require('gulp-connect'),
    source = require('vinyl-source-stream');


gulp.task('build', function() {
    return browserify({
        entries: './src/app.jsx',
        extensions: ['.jsx'],
        debug: true
    })
    .transform(reactify)
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('reload', ['build'], function() {
    return gulp.src('./src/app.jsx').pipe(connect.reload());
})

gulp.task('watch', function() {
    return gulp.watch(['./src/**/*.jsx'], ['reload']);
});

gulp.task('connect', function() {
  connect.server({
    root: './public',
    livereload: true
  });
});

gulp.task('serve', ['build', 'watch', 'connect']);
