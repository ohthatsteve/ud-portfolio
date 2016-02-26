module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1800,
            seperator:'_',
            name: 'large',
            suffix: '_2x',
            quality: 90
          },{
            width: 900,
            seperator:'_',
            name: 'large',
            suffix: '_1x',
            quality: 90
          },{
            width: 1200,
            seperator:'_',
            name: 'medium',
            suffix: '_2x',
            quality: 90
          },{
            width: 600,
            seperator:'_',
            name: 'medium',
            suffix: '_1x',
            quality: 90
          }
            ]
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

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images/*.{jpg,png,gif}'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
