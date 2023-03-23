const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

function compilarSass() {
    return gulp.src('./source/style/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build/style'))
}

function comprimirJs() {
    return gulp.src('./source/script/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/script'))
}

function comprimirImg() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

exports.default = function() {
    gulp.watch('./source/style/*.scss', {ignoreInitial:false}, gulp.series(compilarSass))
    gulp.watch('./source/script/*.js', {ignoreInitial:false}, gulp.series(comprimirJs))
    gulp.watch('./source/images/*', {ignoreInitial:false}, gulp.series(comprimirImg))
}