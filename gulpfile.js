/* eslint-disable block-scoped-var */

// Gulp {{{

// use gulp to manage the web site
var gulp = require('gulp');

// }}}

// Package loading {{{

// declare variables for used packages
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var cssnano = require('cssnano');
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var imageminPngquant = require('imagemin-pngquant');
var newer = require('gulp-newer');
var postcss = require('gulp-postcss');
var pump = require('pump');
var rsync = require('gulp-rsync');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var yargs = require('yargs');

// }}}

// Configuration variables {{{

// configuration files for Jekyll
var CONFIGURATION_FLAG = '--config';
var CONFIGURATION_FILES = '_config.yml';
var CONFIGURATION_FILE_SCHOLAR = ',_config.scholar.yml';

// define the directories for the fonts
var CSS_SOURCE = 'css/*.css';
var CSS_DEST = '_site/css/';

// define the directories for the fonts
var FONT_SOURCE = 'node_modules/font-awesome/fonts/**/*';
var FONT_DEST = '_site/fonts/';

// define the directories for the quicklink
var QUICKLINK_SOURCE = 'node_modules/quicklink/dist/quicklink.umd.js';
var QUICKLINK_DEST = 'js';

// define the source and destination for HTTP/2
var HTTPTWO_SOURCE = '_headers';
var HTTPTWO_DEST = '_site/';

// define the directory for the JavaScript
var JS_SOURCE = ['_js/jquery-3.3.1.min.js', '_js/popper.min.js', '_js/bootstrap.min.js', '_js/jquery.scrollTo.min.js'];
var JS_SITE = '_site/js/';
var JS_SITE_ALL = '_site/js/*.js';
var JS_COMBINE = 'scripts.js';

// define the directory for all of the HTML files
var HTML_SOURCE = '_site/**/*.html';
var DOWNLOAD_DEST = '_site/download/';
var DEPLOYSITE = '_site';

// define the directory for all of the download files
var DOWNLOAD_SOURCE = '_download/**/*';

// define the directory for all of the download files
// that will be used when building for production,
// ensuring that PDFs are in the sitemap file
var DOWNLOAD_DEST_PRE = 'download/';

// define the directories for the images
var IMAGES_SOURCE = '_download/images/**/*.{png,jpeg,jpg,svg,gif}';
var IMAGES_OPTIMIZED = '_site/download/images/**/*.{png,jpeg,jpg,svg,gif}';
var IMAGES_OPTIMIZED_JPG = '_site/download/images/*.jpg';
var IMAGES_DEST = '_site/download/images';

// define the URL of the live site to check
var SITE = 'https://www.gregorykapfhammer.com';

// exclude different fragments from blc checking
var EXCLUDE_LINKEDIN = '--exclude=linkedin';
var EXCLUDE_SYNOPYSYS = '--exclude=synopsys';
var EXCLUDE_FLICKR = '--exclude=flickr';
var RECURSIVE = '-ro';

// }}}

// Environment variables {{{

// read the "--production" environment variable
var PRODUCTION = Boolean(yargs.argv.production);

// read the "--papers" environment variable
var PAPERS = Boolean(yargs.argv.papers);

// read the "--posts" environment variable
var POSTS = Boolean(yargs.argv.posts);

// read the "--talks" environment variable
var TALKS = Boolean(yargs.argv.talks);

// read the "--courses" environment variable
var COURSES = Boolean(yargs.argv.courses);

// read the "--crumbs" environment variable
var CRUMBS = Boolean(yargs.argv.crumbs);

// }}}

// Reminders {{{

// Reminder of the Netlify build command:
// gulp optimizeddeployseo --production

// Reminder of the Netlify publish directory:
// _site

// }}}

// {{{ PRE ---> Copy, Combine, Generate

// }}}

// TASK: Generate the CSS files from the Sassy CSS files
gulp.task('sass', function() {
  return gulp.src(['scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('css/'));
});

// TASK: Copy all of the changed font-awesome fonts to _site
gulp.task('fonts', function() {
  return gulp.src(FONT_SOURCE)
    .pipe(gulp.dest(FONT_DEST));
});

// TASK: Copy the quicklink JavaScript to the js/ directory
gulp.task('quicklink', function() {
  return gulp.src(QUICKLINK_SOURCE)
    .pipe(gulp.dest(QUICKLINK_DEST));
});

// TASK: Copy the changed download objects to _site
gulp.task('downloads', function() {
  return gulp.src(DOWNLOAD_SOURCE)
    .pipe(newer(DOWNLOAD_DEST))
    .pipe(gulp.dest(DOWNLOAD_DEST));
});

// TASK: Copy the changed download objects to root
// note that this will create the destination
// directory if it does not already exist
gulp.task('downloadspre', function() {
  return gulp.src(DOWNLOAD_SOURCE)
    .pipe(gulp.dest(DOWNLOAD_DEST_PRE));
});

// TASK: Copy all the HTTP2 header to _site
gulp.task('httptwo', function() {
  return gulp.src(HTTPTWO_SOURCE)
    .pipe(gulp.dest(HTTPTWO_DEST));
});

// TASK: Concatenate JavaScript in correct order
gulp.task('javascripts', function() {
  return gulp.src(JS_SOURCE)
    .pipe(newer(JS_SITE + JS_COMBINE))
    .pipe(concat(JS_COMBINE))
    .pipe(gulp.dest(JS_SITE));
});

// }}}

// {{{ BUILD and SERVE ---> Run Jekyll and Browsersync

// FUNCTION: detect which environment variables are set
/* eslint-disable no-redeclare */
function detectEnvironment(options) {
  // render the entire site
  if (PRODUCTION) {
    var env = Object.create(process.env);
    env.JEKYLL_ENV = 'production';
    options.env = env;
  // render base site + papers
  } else if (PAPERS) {
    var env = Object.create(process.env);
    env.JEKYLL_ENV = 'papers';
    options.env = env;
  // render base site + posts
  } else if (POSTS) {
    var env = Object.create(process.env);
    env.JEKYLL_ENV = 'posts';
    options.env = env;
  // render base site + talks
  } else if (TALKS) {
    var env = Object.create(process.env);
    env.JEKYLL_ENV = 'talks';
    options.env = env;
  // render base site + courses
  } else if (COURSES) {
    var env = Object.create(process.env);
    env.JEKYLL_ENV = 'courses';
    options.env = env;
  // render base site + crumbs below courses and posts
  } else if (CRUMBS) {
    var env = Object.create(process.env);
    env.JEKYLL_ENV = 'crumbs';
    options.env = env;
  }
  // load the Jekyll-Scholar configuration
  // if a production or papers or talks build
  if (PRODUCTION || PAPERS || TALKS) {
    CONFIGURATION_FILES = CONFIGURATION_FILES + CONFIGURATION_FILE_SCHOLAR;
  }
}
/* eslint-enable no-redeclare */

// TASK: build the web site in full, no incremental
gulp.task('build', function(cb) {
  var spawn = require('child_process').spawn;
  var options = {
    stdio: 'inherit',
  };
  detectEnvironment(options);
  var jekyll = spawn('bundle', ['exec', 'jekyll', 'build', CONFIGURATION_FLAG, CONFIGURATION_FILES, "--trace"], options);
  jekyll.on('exit', function(code) {
    cb(code === 0 ? null : 'Error: Jekyll process exited with code: ' + code);
  });
});

// TASK: build the web site in full, includes incremental
gulp.task('incrementalbuild', function(cb) {
  var spawn = require('child_process').spawn;
  var options = {
    stdio: 'inherit',
  };
  detectEnvironment(options);
  var jekyll = spawn('bundle', ['exec', 'jekyll', 'build', '--incremental', CONFIGURATION_FLAG, CONFIGURATION_FILES], options);
  jekyll.on('exit', function(code) {
    cb(code === 0 ? null : 'Error: Jekyll process exited with code: ' + code);
  });
});

// TASK: serve the web site incrementally
gulp.task('serve', function(cb) {
  var spawn = require('child_process').spawn;
  var options = {
    stdio: 'inherit',
  };
  detectEnvironment(options);
  var jekyll = spawn('bundle', ['exec', 'jekyll', 'serve', '--watch', '--incremental', CONFIGURATION_FLAG, CONFIGURATION_FILES], options);
  jekyll.on('exit', function(code) {
    cb(code === 0 ? null : 'Error: Jekyll process exited with code: ' + code);
  });
});

// TASK: serve the web site in full
gulp.task('fullserve', function(cb) {
  var spawn = require('child_process').spawn;
  var options = {
    stdio: 'inherit',
  };
  detectEnvironment(options);
  var jekyll = spawn('bundle', ['exec', 'jekyll', 'serve', '--watch', CONFIGURATION_FLAG, CONFIGURATION_FILES], options);
  jekyll.on('exit', function(code) {
    cb(code === 0 ? null : 'Error: Jekyll process exited with code: ' + code);
  });
});

// TASK: use browsersync to load the site for local synced testing
gulp.task('browsersync', function() {
  browserSync.init({
    server: {
      baseDir: '_site/',
    },
    open: false,
  });
  gulp.watch(['_site/**/*.html', '_site/**/*.css', '_site/**/*.js']).on('change', browserSync.reload);
});

// }}}

// {{{ OPTIMIZE and TRANSFORM ---> Images, CSS, JavaScript, HTML

// TASK: optimize the images in a lossless fashion
gulp.task('imageoptimize', function() {
  return gulp.src(IMAGES_SOURCE)
    .pipe(newer(IMAGES_DEST))
    .pipe(imagemin([imagemin.jpegtran({
      progressive: true,
    }),
    imagemin.optipng({
      optimizationLevel: 7,
    }),
    ]))
    .pipe(gulp.dest(IMAGES_DEST));
});

// TASK: optimize the images in a lossy fashion
/* eslint-disable no-undef */
gulp.task('imagecompress', function() {
  return gulp.src(IMAGES_OPTIMIZED)
    .pipe(imagemin([
      imagemin.optipng(),
      imagemin.jpegtran(),
      imageminPngquant(speed = 1),
      imageminJpegRecompress(accurate = true, loops = 10),
    ]))
    .pipe(gulp.dest(IMAGES_DEST));
});
/* eslint-enable no-undef */

// TASK: mogrify the images to reduce size significantly
gulp.task('imagemogrify', function(cb) {
  var spawn = require('child_process').spawn;
  var options = {
    stdio: 'inherit',
  };
  var mogrify = spawn('mogrify', [IMAGES_OPTIMIZED_JPG, '-sampling-factor',
    '4:2:0', '-strip', '-quality', '45', '-interlace', 'Plane', '-colorspace', 'sRGB', IMAGES_OPTIMIZED_JPG], options);
  mogrify.on('exit', function(code) {
    cb(code === 0 ? null : 'Error: mogrify process exited with code: ' + code);
  });
});

// TASK: minify all of the CSS files
/* eslint-disable no-unused-vars */
gulp.task('cssminify', function() {
  var plugins = [
    cssnano(),
  ];
  return gulp.src(CSS_SOURCE)
    .pipe(newer(CSS_DEST))
    .pipe(postcss())
    .pipe(gulp.dest(CSS_DEST));
});
/* eslint-enable no-unused-vars */

// TASK: minify all of the changed HTML files
// NOTE: ignore the slides for teaching and the Google marker
gulp.task('htmlminify', function() {
  return gulp.src([HTML_SOURCE, '!_site/google00ff3c571b113c8c.html', '!_site/teaching/**/cs*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyJS: true,
      removeCommentsFromCDATA: true,
      collapseBooleanAttributes: true,
      removeEmptyAttributes: true,
    }))
    .pipe(gulp.dest(DEPLOYSITE));
});

// TASK: minify all of the JavaScript files
gulp.task('jsminify', function(cb) {
  pump([
    gulp.src(JS_SITE_ALL),
    uglify(),
    gulp.dest(JS_SITE),
  ],
  cb
  );
});

// TASK: run all of the minifiers in parallel
gulp.task(
  'minify',
  gulp.parallel('cssminify', 'htmlminify', 'jsminify')
);

// }}}

// {{{ DEPLOY ---> Build and all needed steps, customized

// TASK: delete the download directory after building
// note that this is safe because a deploy happens
// from the "_site" directory and root is a source only
gulp.task('cleandownloads', function() {
  return del([
    'download/**',
  ]);
});

// TASK: perform the full build, but do not optimize images or minify
gulp.task(
  'quickdeploy',
  gulp.series('sass', 'incrementalbuild', 'javascripts', 'httptwo', 'downloads',
    gulp.parallel('fonts'))
);

// // TASK: perform the full build, but do not optimize images
// gulp.task(
//   'fulldeploy',
//   gulp.series('sass', 'quicklink', 'build', 'javascripts', 'httptwo', 'downloads',
//     gulp.parallel('fonts', 'cssminify', 'htmlminify', 'jsminify'))
// );

// TASK: perform the full build, but do not optimize images
gulp.task(
  'fulldeploy',
  gulp.series('sass', 'quicklink', 'build', 'javascripts', 'httptwo', 'downloads',
    gulp.parallel('fonts', 'cssminify', 'jsminify'))
);

// TASK: perform the full build, but do not optimize images
// move the download directory over early to support sitemap creation
gulp.task(
  'fulldeployseo',
  gulp.series('sass', 'downloadspre', 'quicklink', 'build', 'javascripts', 'httptwo',
    gulp.parallel('cleandownloads', 'fonts', 'cssminify', 'htmlminify', 'jsminify'))
);

// TASK: first build and optimize/compress images and then run the minifiers in parallel
gulp.task(
  'optimizeddeploy',
  gulp.series('sass', 'quicklink', 'build', 'javascripts', 'httptwo', 'downloads', 'imageoptimize', 'imagecompress',
    gulp.parallel('fonts', 'imagemogrify', 'cssminify', 'htmlminify', 'jsminify'))
);

// TASK: first build and optimize/compress images and then run the minifiers in parallel
// move the download directory over early to support sitemap creation
gulp.task(
  'optimizeddeployseo',
  gulp.series('sass', 'downloadspre', 'quicklink', 'build', 'javascripts', 'httptwo', 'imageoptimize', 'imagecompress',
    gulp.parallel('cleandownloads', 'fonts', 'imagemogrify', 'cssminify', 'htmlminify', 'jsminify'))
);

// }}}

// {{{ CHECKS ---> Check all HTML Files

// TASK: use the "linkchecker" tool to check live site
gulp.task('linkchecker', function(cb) {
  var spawn = require('child_process').spawn;
  var options = {
    stdio: 'inherit',
  };
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
  var options = {
    stdio: 'inherit',
  };
  // SITE = SITE;
  // run the linkchecker on the web site, don't follow LinkedIn or Synopsys links as they deny
  // note that excluding flickr will mask some broken links to images on slides
  var blc = spawn('blc', [SITE, EXCLUDE_LINKEDIN, EXCLUDE_SYNOPYSYS, EXCLUDE_FLICKR, RECURSIVE], options);
  blc.on('exit', function(code) {
    // error indicates that a broken link was found
    cb(code === 0 ? null : 'Error: blc process exited with code: ' + code);
  });
});

// MAINTENANCE {{{

// TASK: delete the generated site
gulp.task('clean', function() {
  return del([
    '_site/**/*',
  ]);
});

// }}}

// DEFAULT {{{

gulp.task('default', gulp.series('quickdeploy'));

// }}}

// DEPRECATED {{{

// TASK: use rsync to deploy the web site to the server
gulp.task('deploy', function() {
  return gulp.src('_site/**')
    .pipe(rsync({
      root: '_site',
      hostname: 'cs.allegheny.edu',
      destination: '/home/g/gkapfham/public_html/',
    }));
});

// }}}
