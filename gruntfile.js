module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    var copy = {
        main: {
            files: [
                {
                    expand: true,
                    cwd: 'src/',
                    src: ['**'],
                    dest: 'dest/'
                }
            ]
        }
    };

    var concat = {
        main: {
            src: [
                    'bower_components/armenian-orthography-converter/src/mashtots.js',
                    'bower_components/armenian-orthography-converter/src/mashtots-dom.js'
            ],
            dest: 'dest/mashtots.js'
        }
    };

    var clean = {
        dest: 'dest/'
    };

    grunt.initConfig({
        copy: copy,
        concat: concat,
        clean: clean
    });

    grunt.registerTask('build', ['clean:dest', 'copy:main', 'concat:main']);
};
