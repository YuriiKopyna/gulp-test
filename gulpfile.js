const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

gulp.task('message', async function() {
    console.log("HTTP Server Started");
});

gulp.task('default', async function() {
    console.log("HTTP Server Started");
});

//Copying html file

gulp.task('copyHtml', async function() {
   gulp.src('src/*.html')
   .pipe(gulp.dest('dist'));
});

//Optimize Images
gulp.task('imageMin', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);
//Optimize JavaScript
gulp.task('minify', async function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});