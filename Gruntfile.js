'use strict';
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  grunt.initConfig({
    karma: {
      tests: {
        configFile: 'karma.tests.conf.js'
      }
    },
    connect: {
      dev: {
        options: {
          port: 9001,
          hostname: 'localhost',
          middleware: function (connect) {
            return [
              mountFolder(connect, "")
            ];
          }
        }
      }
    },
    watch: {
      assets: {
        files: [
          'src/*'
        ],
        options: {
          livereload: true,
          nospawn: true
        }
      }
    }
  });

  // build scripts and css and copy other files into dist/app folder
  grunt.registerTask('build', [
    'karma:tests'
  ]);

  grunt.registerTask('dev', [
    'connect',
    'watch'
  ]);

};

