"use strict";

// Karma configuration
// Generated on Wed Apr 06 2016 20:33:17 GMT-0300 (E. South America Standard Time)

module.exports = function (config) {
    const appBase = 'dist/public/';      // transpiled app JS and map files
    const appSrcBase = 'public/';      // app source TS files
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],

        plugins: [
            require('karma-mocha'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher'),
            require('karma-mocha-reporter')
        ],

        client: {
            builtPaths: [appBase], // add more spec base paths as needed
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },

        // list of files / patterns to load in the browser
        files: [
            // System.js for module loading
            'node_modules/systemjs/dist/system-polyfills.src.js',
            'node_modules/systemjs/dist/system.src.js',

            // Polyfills
            'node_modules/core-js/client/shim.js',
            'node_modules/reflect-metadata/Reflect.js',

            // zone.js
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/proxy.js',
            'node_modules/zone.js/dist/sync-test.js',
            'node_modules/zone.js/dist/mocha-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',

            // RxJs
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

            // Paths loaded via module imports:
            // Angular itself
            { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

            { pattern: 'systemjs.config.js', included: false, watched: false },
            { pattern: 'systemjs.config.extras.js', included: false, watched: false },
            'karma-test-shim.js', // optionally extend SystemJS mapping e.g., with barrels

            // test frameworks
            'node_modules/chai/chai.js',
            'node_modules/sinon/pkg/sinon.js',
            'node_modules/sinon-chai/lib/sinon-chai.js',

            appBase + 'app/_specHelper.js',

            // transpiled application & spec code paths loaded via module imports
            { pattern: appBase + '**/*.js', included: false, watched: true },

            // Asset (HTML & CSS) paths loaded via Angular's component compiler
            // (these paths need to be rewritten, see proxies section)
            { pattern: appBase + '**/*.html', included: false, watched: true },
            { pattern: appBase + '**/*.css', included: false, watched: true },

            // Paths for debugging with source maps in dev tools
            { pattern: appSrcBase + '**/*.ts', included: false, watched: false },
            { pattern: appBase + '**/*.js.map', included: false, watched: false }

        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],
        // browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}