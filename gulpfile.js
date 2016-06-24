var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

var bower = require('wiredep').stream;
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');

var imagemin = require('gulp-imagemin');
var clean = require('gulp-dest-clean');

gulp.task('clean', function () {
    return gulp.src('build')
        .pipe(clean('build'));
});


gulp.task('img', () =>
	gulp.src('app/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/img'))
);

//BUILD
gulp.task('build', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', csso()))
        .pipe(gulp.dest('build'));
});

gulp.task('bower', function () {
    gulp.src('app/*.html')
        .pipe(bower({
        directory: 'app/libs'
    }))
    .pipe(gulp.dest('app'));
});


gulp.task('start', function(){
    gulp.src('app')
    .pipe(server({
        livereload: true,
        open: true
    }));
})

gulp.task('style', function(){
    gulp.src('app/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
        browsers: ['last 15 versions']
    }))
    .pipe(gulp.dest('app/css'))
})
gulp.task('watch', function(){
    gulp.watch('app/sass/**/*.sass', ['style'])
    gulp.watch('bower.json', ['bower']);
});
gulp.task('default', ['start', 'watch']);