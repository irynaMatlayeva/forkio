const { src, dest } = require("gulp");
const jsMinify = require("gulp-js-minify");
const concat = require('gulp-concat');


const scripts = () => {
    return src("./src/scripts/*.js")
        .pipe(jsMinify())
        .pipe(concat('scripts.min.js'))
        .pipe(dest("./dist/scripts/"));
};

exports.scripts = scripts;
