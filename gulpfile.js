var gulp = require( 'gulp' ),
less = require( 'gulp-less' );

gulp.task( 'default', [ 'less', 'move' ]);

gulp.task( 'less', function() {
	return gulp.src( './src/less/main.less' )
		.pipe( less() )
		.pipe( gulp.dest( './dist/css' ) );
});

var directories = [
	'./src/js/**/*', 
	'./src/data/*.json',
	'./src/views/*.html',
	'./src/index.html'
]

gulp.task( 'move', function() {
	gulp.src( directories, { base: './src' })
		.pipe( gulp.dest('dist/'));
});