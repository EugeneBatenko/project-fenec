var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('app/scss/**/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: 'app',
            index: "index.html"
        },
        tunnel: true,
        tunnel: "fenecdev"
    });
    gulp.watch("app/*.html").on("change", reload);
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
