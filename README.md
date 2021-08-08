# Drupal Frontend readme

This is a copy of [vishalsahody/yeogurt-to-drupal-theme](https://github.com/vishalsahody/yeogurt-to-drupal-theme) with a newer version of Yeogurt Generator.

## development environment and packages
#### Node
node --version  
v8.17.0  
npm --version  
6.13.4  
npx --version  
6.13.4

#### Gulp
gulp --version  
CLI version: 2.3.0  
Local version: 4.0.2

#### Yo and Yeogurt
yo@4.3.0  
yo@3.1.1  
generator-yeogurt@3.1.2

#### Node plugin used
gulp-sftp-up4: 0.1.8


Generated on 2021-08-06 using
[generator-yeogurt@3.1.2](https://github.com/larsonjj/generator-yeogurt)

## Technologies used
JavaScript

- [Browserify](http://browserify.org/)with ES6/2015 support through [Babel](https://babeljs.io/)
- [Node](https://nodejs.org/)

Testing

- [Karma](http://karma-runner.github.io/4.0/index.html)
- [Jasmine](http://jasmine.github.io/)

Styles

- [Sass](http://sass-lang.com/) via ([node-sass](https://github.com/sass/node-sass))

Markup

- [Pug](https://pugjs.org/api/reference.html)

Optimization

- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

Server

- [BrowserSync](http://www.browsersync.io/)

Linting

- [ESlint](http://eslint.org/)

Automation

- [Gulp](http://gulpjs.com)

Code Management

- [Editorconfig](http://editorconfig.org/)
- [Git](https://git-scm.com/)

## Automated tasks

This project uses [Gulp](http://gulpjs.com) and npm scripts (i.e. `npm run...`) to run automated tasks for development and production builds.
The tasks are as follows:

`gulp serve`: Compiles preprocessors and uploads compiled files to development server.
