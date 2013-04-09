/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),


    assemble: {
      options: {
        flatten: true
      },
      compact: {
        src:  'src/pages/**/*.hbs',
        dest: 'dest/compact/'
      },
      files_object: {
        files: {
          'dest/object/': ['src/pages/**/*.hbs']
        }
      },
      files_array: {
        files: [
          { dest: 'dest/array/', src: ['src/pages/**/*.hbs'] }
        ]
      }
    }

 });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('assemble');

  // Default task.
  grunt.registerTask('default', ['assemble']);

};