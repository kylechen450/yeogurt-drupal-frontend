'use strict';

import gulp from "gulp";

// Import configurations to get the path and FTP credentials
var configurations = require("./../../configurations.json");
var credentials = require("./../../credentials.json"); // This file should not be added to git.
var sftp = require("gulp-sftp-up4");

// copy css to local.
gulp.task("copycsstolocal", function() {
  return gulp.src("./tmp/styles/*")
  .pipe(gulp.dest(configurations.path.local.css));
});

// copy js to local.
gulp.task("copyjstolocal", function() {
  return gulp.src("./tmp/scripts/*")
  .pipe(gulp.dest(configurations.path.local.js));
});

// copy fonts to local.
gulp.task("copyfontstolocal", function() {
  return gulp.src("./tmp/typography/**/*.{ttf,woff,eot,svg}")
  .pipe(gulp.dest(configurations.path.local.typography));
});

// copy images to local.
gulp.task("copyimagestolocal", function() {
  return gulp.src("./tmp/images/**/*")
  .pipe(gulp.dest(configurations.path.local.images));
});

// Copy css to server. Check configurations.json and credentials.json for path and password
gulp.task("copycsstoserver", function() {
  // Only copy if the enabled in configurations.js
  if (configurations.copytoserver) {
    return gulp.src("./tmp/styles/*").pipe(
      sftp({
        host: credentials.host,
        user: credentials.user,
        pass: credentials.pass,
        remotePath: configurations.path.remote.css
      })
    );
  } else {
    return true;
  }
});

// Copy js to server. Check configurations.json and credentials.json for path and password
gulp.task("copyjstoserver", function() {
  // Only copy if the enabled in configurations.js
  if (configurations.copytoserver) {
    return gulp.src("./tmp/scripts/*").pipe(
      sftp({
        host: credentials.host,
        user: credentials.user,
        pass: credentials.pass,
        remotePath: configurations.path.remote.js
      })
    );
  } else {
    return true;
  }
});

// Copy fonts to server. Check configurations.json and credentials.json for path and password
gulp.task("copyfontstoserver", function() {
  // Only copy if the enabled in configurations.js
  if (configurations.copytoserver) {
    return gulp.src("./tmp/typography/**/*.{ttf,woff,eot,svg}").pipe(
      sftp({
        host: credentials.host,
        user: credentials.user,
        pass: credentials.pass,
        remotePath: configurations.path.remote.typography
      })
    );
  } else {
    return true;
  }
});

// Copy images to server. Check configurations.json and credentials.json for path and password
gulp.task("copyimagestoserver", function() {
  // Only copy if the enabled in configurations.js
  if (configurations.copytoserver) {
    return gulp.src("./tmp/images/**/*").pipe(
      sftp({
        host: credentials.host,
        user: credentials.user,
        pass: credentials.pass,
        remotePath: configurations.path.remote.images
      })
    );
  } else {
    return true;
  }
});

