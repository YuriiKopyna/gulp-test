const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

//Copying html file
gulp.task('copyHtml', async function() {
   gulp.src('src/*.html')
   .pipe(gulp.dest('dist'));
});

//Optimize Images
gulp.task('imageMin', async function() {
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});
//Optimize JavaScript
gulp.task('minify', async function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});
//Compile sass
gulp.task('sass', async function() { 
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
});
//All tasks in 1 command
gulp.task('default', ['copyHtml', 'imageMin', 'minify', 'sass']);