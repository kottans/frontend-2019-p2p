import gulp from 'gulp'; // сам сборщик
import sass from 'gulp-sass'; // sass препроцессор
import plumber from 'gulp-plumber'; // отслеживает ошибки, продолжает выполнение потока в случае ошибки
import postcss from 'gulp-postcss'; // плагин для парсинга css
import autoprefixer from 'autoprefixer'; // автопрефексер, работает в потоке postcss
import browserSync from 'browser-sync'; // автоматически перезагружает страницу
import imagemin from 'gulp-imagemin'; // сжатие графики без потерь
import webp from 'gulp-webp'; // конвертирует графику в формат webp
import csso from 'gulp-csso'; // минификатор css
import rename from 'gulp-rename'; // плагин для переименования файлов
import svgstore from 'gulp-svgstore'; // сборщик спрайтов
import posthtml from 'gulp-posthtml'; // парсер HTML
import include from 'posthtml-include'; // плагин для posthtml, позволяет использовать <include> в HTML
import w3cjs from 'gulp-w3cjs'; // валидатор HTML
import del from 'del'; // плагин для удаления файлов/папок
import htmlmin from 'gulp-htmlmin'; // минификатор HTML
import jsmin from 'gulp-uglify'; // минификатор JS
import babel from 'gulp-babel'; // транспайлер для js, переписывает скрипты, написанные на современном синтаксисе JavaScrypt, в синтаксис ES5 для совместимости со старыми браузерами
import concat from 'gulp-concat'; // плагин для объединения файлов

const server = browserSync.create();

gulp.task('copy', () => gulp.src([
  'source/fonts/**/*.{woff,woff2}',
  'source/img/*', '!source/img/sprite',
], {
  base: 'source',
})
  .pipe(gulp.dest('build')));

gulp.task('clean', () => del('build'));

gulp.task('css', () => gulp.src('source/sass/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer(),
  ]))
  .pipe(csso())
  .pipe(gulp.dest('build/css'))
  .pipe(server.stream()));

gulp.task('refresh', (done) => {
  server.reload();
  done();
});

gulp.task('server', () => {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series('css'));
  gulp.watch('source/img/sprite/*.svg', gulp.series('sprite', 'html', 'refresh'));
  gulp.watch('source/*.html', gulp.series('html', 'refresh'));
  gulp.watch('source/js/*.js', gulp.series('js', 'refresh'));
});

gulp.task('images', () => gulp.src('source/img/*.{png,jpg,svg}')
  .pipe(imagemin([
    imagemin.optipng({ optimizationLevel: 3 }),
    imagemin.jpegtran({ progressive: true }),
    imagemin.svgo(),
  ]))
  .pipe(gulp.dest('build/img')));

gulp.task('webp', () => gulp.src('source/img/*.{png,jpg}')
  .pipe(webp({ quality: 90 }))
  .pipe(gulp.dest('source')));

gulp.task('sprite', () => gulp.src('source/img/sprite/*.svg')
  .pipe(svgstore({ inlineSvg: true }))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('build/img')));

gulp.task('html', () => gulp.src('source/*.html')
  .pipe(posthtml([
    include(),
  ]))
  .pipe(w3cjs())
  .pipe(htmlmin({
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    removeComments: true,
    removeEmptyAttributes: true,
  }))
  .pipe(gulp.dest('build')));

gulp.task('js', () => gulp.src('source/js/**/*.js')
  .pipe(concat('script.js'))
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(jsmin())
  .pipe(gulp.dest('build/js')));

gulp.task('start', gulp.series('clean', 'copy', 'css', 'sprite', 'html', 'js', 'server'));

gulp.task('build', gulp.series('clean', 'copy', 'css', 'sprite', 'html', 'js', 'images', 'server'));
