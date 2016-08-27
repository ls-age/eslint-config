import gulp from 'gulp';
import babel from 'gulp-babel';

const sourceGlob = 'src/**/*.js';

export function build() {
  return gulp.src(sourceGlob, { since: gulp.lastRun('build') })
    .pipe(babel())
    .pipe(gulp.dest('out'));
}

export function watchFiles() {
  gulp.watch(sourceGlob, build)
}

export const watch = gulp.series(build, watchFiles);

export default build;
