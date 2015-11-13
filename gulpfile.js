var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');

var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();


});

var path = require('path');

var paths = {
    es6: ['src/**/*.es6'],
    es5: 'es5',
    // Must be absolute or relative to source map
    sourceRoot: path.join(__dirname, 'es6'),
};
gulp.task('babel', function () { // (A)
    return gulp.src(paths.es6)
        .pipe(sourcemaps.init()) // (B)
        .pipe(babel())
        .pipe(sourcemaps.write('.', // (C)
            {sourceRoot: paths.sourceRoot}))
        .pipe(gulp.dest(paths.es5));
});
gulp.task('babelAndTest', function (callback) { // (A)
    return runSequence('babel',
        'test',
        callback);
});


gulp.task('watch', function (callback) { // (D)
    gulp.watch(paths.es6,
        ['babelAndTest']);
});

gulp.task('default', ['watch']); // (E)
