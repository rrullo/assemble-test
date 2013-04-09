/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	
    assemble: {
      options: {
        version: '<%= pkg.version %>'
      },
      pages: {
        files: [
          { flatten: true, dest: 'dest/', src: ['src/pages/**/*.hbs'] }
        ]
      }
    }

 });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('assemble');

  // Default task.
  grunt.registerTask('default', ['assemble']);

};
