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
          destinationFolderPath: 'test/',
          printUrlToFile: 'src/createDialog.js'
        },
        src: [
          'src/createDialog.js'
        ]
      }
    }
  });

  // build scripts and css and copy other files into dist/app folder
  grunt.registerTask('build', [
    'karma:tests',
    'azure-cdn-deploy:lib'
  ]);

};

