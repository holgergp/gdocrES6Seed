'use strict';

module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: [ 'jasmine','browserify' ],

          files: [
            {pattern: 'es5/main/**/*.js'},
            {pattern: 'es5/test/**/*.js'}
          ],

          preprocessors: {
                'es5/**/*.js': [ 'browserify' ]
          },

          browserify: {
                  debug: true,
                  transform: [ 'brfs' ,'browserify-shim']
          },

          exclude: [
          ],

          /**plugins: [
                      'karma-phantomjs-launcher',
                      'karma-jasmine','karma-browserify'],

                      **/

        // test results reporter to use
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
