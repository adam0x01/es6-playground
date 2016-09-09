module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      clear: {
        command: 'clear'
      },
      node: {
        command: 'node dist/index.js'
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.js'],
          dest: 'dist',
          ext: '.js'
        }]
      }
    },
    watch: {
      js: {
        files: ['src/**/*.js'],
        tasks: ['babel', 'shell:node']
      }
    }
  });

  grunt.registerTask('default', ['shell:clear', 'watch']);
};
