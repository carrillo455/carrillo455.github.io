module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Tasks declaration begins.
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 500,
            name: 'small',
            quality: 50
          }, {
            width: 1000,
            name: 'medium',
            quality: 50
          }, {
            width: 1500,
            name: 'large',
            quality: 50
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
    uglify: {
      dist: {
        src: ['js/libs/*.js', 'js/main.js'], // it will concatenate the uglified files, leaving main.js at last beacause depends on js files in libs folder.
        dest: 'js/dist/main.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" & "responsive-image" tasks.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-responsive-images');

  // Default task(s).
  grunt.registerTask('default', ['responsive_images']);

};