const gulp = require('gulp');


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