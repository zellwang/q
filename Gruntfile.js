"use strict";

module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.initConfig({
        uglify: {
            "q.min.js": ["q.js"],
            options: {
                report: "gzip"
            }
        }
    });

    // test comment
    // test comment 2
    grunt.registerTask("default", ["uglify"]);
};
