const { src, dest } = require("gulp");
const imagemin = require('gulp-imagemin');

const images = () => {
    return src("./src/images/**/*")
        .pipe(imagemin())
        .pipe(dest("./dist/images/"));
};

exports.images = images;
