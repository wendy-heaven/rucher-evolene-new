const gulp = require('gulp')
const gulpif = require('gulp-if')
const sass = require('gulp-dart-sass')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const concat = require('gulp-concat')

const gutil = require("gulp-util");
const plumber = require("gulp-plumber")

// Permet de passer des arguments
const minimist = require('minimist')

const options = {
	string: 'env',
	default: {
		env: process.env.NODE_ENV || 'production'
	}
}

const paths = {
	styles: {
		src: './assets/sass/**/*.scss',
		dest: './assets/css'
	},
	scripts: {
		// On récupère plusieurs chemins, Attention à respecter l'ordre de déclaration que l'on souhaite
		src: [
			'./assets/script/*.js'
		],
		dest: './assets/js'
	}
}

// Définit les plugins utilisés par postcss
// La liste de browsers utilisés par autoprefixer correspond à celle utilisé dans le package.json
const plugins = [
	// Préfixes vendeurs automatiques
	autoprefixer({
		grid: true
	}),
	// Minification du css
	cssnano()
]

gulp.task('css', () => {
	return gulp.src(paths.styles.src)
		.pipe(plumber({
			errorHandler: function (error) {
				console.log(error.message);
				this.emit('end');
			}
		}))
		// Initialise le fichier de sourcemap
		.pipe(sourcemaps.init())
		// On compile le SCSS en CSS
		.pipe(sass().on('error', sass.logError))
		// Utilise postcss avec les plugins préalablement définit
		.pipe(postcss(plugins))
		// Crée le fichier de sourcemap dans le même dossier que le css
		.pipe(sourcemaps.write('./'))
		// Chemin de destination du fichier css
		.pipe(gulp.dest(paths.styles.dest))
})

gulp.task('js', () => {
	return gulp.src(paths.scripts.src)
		.pipe(!options.production ? plumber() : gutil.noop())
		// Initialise le fichier de sourcemap
		.pipe(sourcemaps.init())
		// On transpile le JS pour être compatible avec les vieux navigateurs
		// On peut ignorer certains fichiers avec la clé 'ignore'
		// sans options le preset env fonctionne comme les presets 'es-2015', 'es-2016' et 'es-2017'
		.pipe(babel({
			presets: ['@babel/env'],
			plugins: ['@babel/plugin-transform-spread']
		}))
		// Compile le js dans un seule fichier
		.pipe(concat('main.js'))
		// Pour minifier le JS
		.pipe(uglify())
		// Crée le fichier de sourcemap dans le même dossier que le js
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.scripts.dest))
});

gulp.task('watch', function() {
    gulp.watch(paths.styles.src, gulp.series('css'));
    gulp.watch(paths.scripts.src, gulp.series('js'));
});

gulp.task('default', gulp.series('css', 'js', 'watch'));