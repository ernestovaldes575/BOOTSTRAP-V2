const {src,dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done){
    //Identificar el Archivo principal
    src('src/scss/app.scss')
        .pipe(sass())//Compilar Sass
        .pipe(dest('build/css'))//Exportar o guardar en una ubicación

    done();
}

exports.css = css;