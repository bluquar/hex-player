module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    flow: {
      options: {
      	style: 'color'
      },
      watch: {
      	src: 'res/src/*.js',
      	options: {
          server: true
      	}
      }
  	},
  	files: {},
  	watch: {
  		flow: {
  			files: ['res/src/*.js', 'res/src/*/*.js', 'res/src/*/*/*.js'],
  			tasks: ['flow']
  		}
  	}
  });

  grunt.loadNpmTasks('grunt-flow');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['flow', 'watch']);
};
