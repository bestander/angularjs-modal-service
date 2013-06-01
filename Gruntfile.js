'use strict';
var azureCdnName = process.env.AZURE_CDN_NAME;
var azureCdnSecret = process.env.AZURE_CDN_SECRET;

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  grunt.initConfig({
    karma: {
      tests: {
        configFile: 'karma.tests.conf.js'
      }
    },
    'azure-cdn-deploy': {
      lib: {
        options: {
          containerName: 'alpha-client',
          serviceOptions: [azureCdnName, azureCdnSecret],
          numberOfFoldersToStripFromSourcePath: 1,
          destinationFolderPath: 'dev/',
          printUrlToFile: '<%= booktrack.dist %>/app/index.html'
        },
        src: [
          '<%= booktrack.dist %>/app/**/*.{html,js,png,css,ico}',
          '<%= booktrack.dist %>/components/**/*.{html,js,png,css,svg,ttf,woff,eot}',
          '<%= booktrack.dist %>/publication2/*'
        ]
      }
    }
  });

  // build scripts and css and copy other files into dist/app folder
  grunt.registerTask('build', [
    'karma:tests'
//    'azure-cdn-deploy:lib'
  ]);

};

