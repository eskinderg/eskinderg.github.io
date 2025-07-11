// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        files: ['node_modules/zone.js/fesm2015/zone.js', { pattern: './src/test.ts', watched: false }],
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            jasmine: {
                // you can add configuration options for Jasmine here
                // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
                // for example, you can disable the random execution with `random: false`
                // or set a specific seed with `seed: 4321`
            },
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        jasmineHtmlReporter: {
            suppressAll: true // removes the duplicated traces
        },
        coverageReporter: {
            dir: require('path').join(__dirname, './coverage/portfolio'),
            subdir: '.',
            reporters: [{ type: 'html' }, { type: 'text-summary' }],
            check: {
                global: {
                    statements: 50,
                    branches: 17,
                    functions: 50,
                    lines: 50
                }
            }
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['ChromeHeadless'],
        customLaunchers: {
            CustomChromeHeadless: {
                base: 'ChromeHeadless',
                flags: [
                    '--headless=new',
                    '--no-sandbox',
                    '--disable-gpu',
                    '--disable-dev-shm-usage',
                    '--disable-software-rasterizer',
                    '--disable-setuid-sandbox'
                ]
            }
        },
        concurrency: 1,
        singleRun: true,
        restartOnFileChange: false
    });
};
