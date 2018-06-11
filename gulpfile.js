// use gulp to manage the web site
var gulp = require('gulp');

// declare variables for used packages
var checkPages = require("check-pages");
var cp = require('child_process');
var cssnano = require('cssnano');
var debug = require('gulp-debug');
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var imageminPngquant = require('imagemin-pngquant');
var postcss = require('gulp-postcss');
var pump = require('pump');
var rsync = require('gulp-rsync');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var yargs = require('yargs');
var browserSync = require('browser-sync').create();

// define the directory for the fonts
var FONT_SOURCE = "node_modules/font-awesome/fonts/**/*"
var FONT_DEST = "_site/fonts/"

// define the directory for the JavaScript
var JS_SOURCE = "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
var JS_DEST = "_site/js/"

// define the directories for the images
var IMAGES_SOURCE    = 'download/images/**/*.{png,jpeg,jpg,svg,gif}';
var IMAGES_OPTIMIZED = '_site/download/images/**/*.{png,jpeg,jpg,svg,gif}';
var IMAGES_DEST      = '_site/download/images';

// read the "--production" environment variable
var DEPLOY = Boolean(yargs.argv.production);

// define the URL of the live site to check
var SITE = 'https://www.gregorykapfhammer.com';

// exclude different fragments from blc checking
var EXCLUDE_LINKEDIN  = '--exclude=linkedin';
var EXCLUDE_SYNOPYSYS = '--exclude=synopsys';
var EXCLUDE_FLICKR    = '--exclude=flickr';
var RECURSIVE         = "-ro";

// TASK: Generate the CSS files from the Sassy CSS files
gulp.task('sass', function() {
    return gulp.src(['scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("css/"));
});

// TASK; Copy all of the font-awesome fonts to _site
gulp.task('fonts', function () {
  return gulp.src(FONT_SOURCE).pipe(gulp.dest(FONT_DEST));
});

// TASK; Copy all of Bootstrap's JavaScript to _site
gulp.task('javascript', function () {
  return gulp.src(JS_SOURCE).pipe(gulp.dest(JS_DEST));
});

// assumes that Jekyll's plugins are managed by bundle

// TASK: build the web site in full, no incremental
gulp.task('build', function(cb) {
  var spawn = require('child_process').spawn;
  var options = {stdio: 'inherit'};
  if (DEPLOY) {
    var env = Object.create(process.env);
    env.JEKYLL_ENV = 'production';
    options.env = env;
  }
  var jekyll = spawn('bundle', ['exec', 'jekyll', 'build'], options);
  jekyll.on('exit', function(code) {
    cb(code === 0 ? null : 'Error: Jekyll process exited with code: ' + code);
  });
});

// TASK: serve the web site incrementally
gulp.task('serve', function(cb) {
  var spawn = require('child_process').spawn;
  var options = {stdio: 'inherit'};
  if (DEPLOY) {
    var env = Object.create(process.env);
    env.JEKYLL_ENV = 'production';
    options.env = env;
  }
  var jekyll = spawn('bundle', ['exec', 'jekyll', 'serve', '--watch', '--incremental'], options);
  jekyll.on('exit', function(code) {
    cb(code === 0 ? null : 'Error: Jekyll process exited with code: ' + code);
  });
});

// TASK: serve the web site in full
gulp.task('fullserve', function(cb) {
  var spawn = require('child_process').spawn;
  var options = {stdio: 'inherit'};
  if (DEPLOY) {
    var env = Object.create(process.env);
    env.JEKYLL_ENV = 'production';
    options.env = env;
  }
  var jekyll = spawn('bundle', ['exec', 'jekyll', 'serve', '--watch'], options);
  jekyll.on('exit', function(code) {
    cb(code === 0 ? null : 'Error: Jekyll process exited with code: ' + code);
  });
});

// TASK: use browsersync to load the site for local synced testing
gulp.task('browsersync', function () {
    browserSync.init({server: {baseDir: '_site/'}, open: false});
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

// TASK: optimize the images in a lossless fashion
gulp.task('imageoptimize', () =>
    gulp.src('download/images/*')
        .pipe(imagemin([imagemin.jpegtran({progressive: true}),
                        imagemin.optipng({optimizationLevel: 7}),]))
        .pipe(gulp.dest('_site/download/images/'))
);

// TASK: optimize the images in a lossy fashion
gulp.task('imagecompress', function () {
    return gulp.src(IMAGES_OPTIMIZED)
        .pipe(imagemin([
            imagemin.optipng(),
            imagemin.jpegtran(),
            imageminPngquant(speed=1),
            imageminJpegRecompress(accurate=true, loops=10)
        ]))
        .pipe(gulp.dest(IMAGES_DEST));
});

// TASK: mogrify the images to reduce size further
gulp.task('imagemogrify', function(cb) {
  var spawn = require('child_process').spawn;
  var options = {stdio: 'inherit'};
  if (DEPLOY) {
    var env = Object.create(process.env);
    env.JEKYLL_ENV = 'production';
    options.env = env;
  }
  var jekyll = spawn('mogrify', ['_site/download/images/*.jpg', '-sampling-factor', '4:2:0', '-strip', '-quality',  '85', '-interlace', 'JPEG', '-colorspace', 'sRGB', '_site/download/images/*.jpg'], options);
  jekyll.on('exit', function(code) {
    cb(code === 0 ? null : 'Error: mogrify process exited with code: ' + code);
  });
});

// TASK: minify all of the CSS files
gulp.task('cssminify', function () {
    var plugins = [
        cssnano()
    ];
    return gulp.src('_site/css/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('_site/css/'));
});

// TASK: minify all of the HTML files
// NOTE: ignore the slides for courses and Google marker
gulp.task('htmlminify', function() {
  return gulp.src(['_site/**/*.html', '!_site/google00ff3c571b113c8c.html', '!_site/teaching/**/cs*.html'])
    .pipe(htmlmin({collapseWhitespace: true, minifyJS: true}))
    .pipe(gulp.dest('_site/'));
});

// TASK: minify all of the JavaScript files
gulp.task('jsminify', function (cb) {
  pump([
        gulp.src('_site/js/*.js'),
        uglify(),
        gulp.dest('_site/js/')
    ],
    cb
  );
});

// TASK: run all of the minifiers in parallel
gulp.task(
  'minify',
  gulp.parallel('cssminify', 'htmlminify', 'jsminify')
);

// TASK: perform the full build, but do not optimize images
gulp.task(
  'fullbuild',
  gulp.series('sass', 'build',
      gulp.parallel('fonts', 'javascript', 'cssminify', 'htmlminify', 'jsminify'))
);

// TASK: first build and optimize/compress images and then run the minifiers in parallel
gulp.task(
  'optimizedbuild',
  gulp.series('sass', 'build', 'imageoptimize', 'imagecompress', 'imagemogrify',
      gulp.parallel('fonts', 'javascript', 'cssminify', 'htmlminify', 'jsminify'))
);

// TASK: use rsync to deploy the web site to the server
gulp.task('deploy', function() {
  return gulp.src('_site/**')
    .pipe(rsync({
      root: '_site',
      hostname: 'cs.allegheny.edu',
      destination: '/home/g/gkapfham/public_html/'
    }));
});

// TASK: use the "linkchecker" tool to check live site
gulp.task('linkchecker', function(cb) {
  var spawn = require('child_process').spawn;
  var options = {stdio: 'inherit'};
  // run the linkchecker on the main web site
  var linkchecker = spawn('linkchecker', [SITE], options);
  linkchecker.on('exit', function(code) {
    // error indicates that a broken link was found
    cb(code === 0 ? null : 'Error: linkchecker process exited with code: ' + code);
  });
});

// TASK: use the "blc" tool to check live site
gulp.task('blc', function(cb) {
  var spawn = require('child_process').spawn;
  var options = {stdio: 'inherit'};
  SITE = SITE;
  // run the linkchecker on the web site, don't follow LinkedIn or Synopsys links as they deny
  // note that excluding flickr will mask some broken links to images on slides
  var blc = spawn('blc', [SITE, EXCLUDE_LINKEDIN, EXCLUDE_SYNOPYSYS, EXCLUDE_FLICK, RECURSIVE], options);
  blc.on('exit', function(code) {
    // error indicates that a broken link was found
    cb(code === 0 ? null : 'Error: blc process exited with code: ' + code);
  });
});

// TASK: delete the generated site
gulp.task('clean', function () {
  return del([
    '_site/**/*',
  ]);
});
