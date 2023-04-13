const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

function StyleBuilder() {
    return src('assets/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('assets/css'))
}

function TaskWatcher() {
    watch(['assets/**/*.scss', '*.html'], StyleBuilder)
}

exports.default = series(StyleBuilder, TaskWatcher)