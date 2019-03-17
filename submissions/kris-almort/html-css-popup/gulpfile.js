const gulp = require('gulp'),
  sass = require('gulp-sass'),
  csso = require('gulp-csso'),
  gutil = require('gulp-util'),
  clean = require('gulp-clean'),
  notify = require('gulp-notify'),
  uglify = require('gulp-uglify'),
  gcmq = require('gulp-group-css-media-queries'),
  imagemin = require('gulp-imagemin'),
  sourcemaps = require('gulp-sourcemaps'),
  minifyHTML = require('gulp-minify-html'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create();

// запуск сервера
gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: "3000"
  });

  gulp.watch(['./*.html']).on('change', browserSync.reload);
  gulp.watch('./sass/**/*', ['sass']);
});

// компиляция sass/scss в css
gulp.task('sass', function () {
  gulp.src(['./sass/**/*.scss', './sass/**/*.sass'])
    .pipe(sourcemaps.init())
    .pipe(
      sass({outputStyle: 'expanded'})
        .on('error', gutil.log)
    )
    .on('error', notify.onError())
    .pipe(gcmq())
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
});

// сжатие картинок
gulp.task('minify:img', function () {
  return gulp.src(['./img/**/*'])
    .pipe(imagemin().on('error', gutil.log))
    .pipe(gulp.dest('./dist/img/'));
});

// сжатие css
gulp.task('minify:css', function () {
  gulp.src('./css/**/*.css')
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(csso())
    .pipe(gulp.dest('./dist/css/'));
});

// сжатие html
gulp.task('minify:html', function () {
  var opts = {
    conditionals: true,
    spare: true
  };

  return gulp.src(['./*.html'])
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist'));
});

//перемещение шрифтов в dist
gulp.task('fonts-transfer', function () {
  gulp.src('./fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('./dist/fonts/'));
});

// удалить папку dist
gulp.task('clean', function () {
  return gulp.src('./dist', {read: false}).pipe(clean());
});

// запуск gulp
gulp.task('default', ['server', 'sass']);

// при вызове gulp dist будут сжаты все ресурсы в dist
gulp.task('dist', ['minify:html', 'minify:css', 'minify:img', 'fonts-transfer']);
