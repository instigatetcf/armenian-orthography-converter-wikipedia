module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');

    var uglify = {
        main: {
            files: {
                'dest/mashtots-wiki.min.js': [
                    'bower_components/armenian-orthography-converter/src/mashtots.js',
                    'bower_components/armenian-orthography-converter/src/mashtots-dom.js',
                    'src/editor.js',
                    'src/checkbox.js'
                ]
            }
        }
    };

    var concat = {
        main: {
            src: [
                    'bower_components/armenian-orthography-converter/src/mashtots.js',
                    'bower_components/armenian-orthography-converter/src/mashtots-dom.js',
                    'src/editor.js',
                    'src/checkbox.js'
            ],
            dest: 'dest/mashtots-wiki.js',
        }
    };

    var clean = {
        dest: "dest/"
    };

    grunt.initConfig({
        uglify: uglify,
        concat: concat,
        clean: clean
    });

    grunt.registerTask('build', ['clean:dest', 'uglify:main']);
    grunt.registerTask('build-dev', ['clean:dest', 'concat:main']);
};
