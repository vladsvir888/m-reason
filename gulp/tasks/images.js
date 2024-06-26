import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import gulpif from 'gulp-if';
import gulpWebp from 'gulp-webp';
// import gulpAvif from 'gulp-avif';
import {
  config, src, dest, watch, series,
} from '../config';

const copyImages = () => (
  src(`${config.app.images}`)
    .pipe(changed(config.build.assets))
    .pipe(gulpif(config.isProd, imagemin([
      imagemin.mozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.8, 0.9] }),
      imagemin.svgo(),
    ])))
    .pipe(dest(`${config.build.assets}/images`))
);

const convertImagesToWebp = () => (
  src(config.app.imagesAfterCopy)
    .pipe(changed(config.build.assets, { extension: '.webp' }))
    .pipe(gulpWebp())
    .pipe(gulpif(config.isProd, imagemin([
      imageminWebp({ quality: 80 }),
    ])))
    .pipe(dest(`${config.build.assets}/images`))
);

// const convertImagesToAvif = () => (
//   src(config.app.imagesAfterCopy)
//     .pipe(changed(config.build.assets, { extension: '.avif' }))
//     .pipe(gulpAvif({ quality: 80 }))
//     .pipe(dest(`${config.build.assets}/images`))
// );

// export const imagesBuild = series(copyImages, convertImagesToWebp, convertImagesToAvif);
export const imagesBuild = series(copyImages, convertImagesToWebp);

export const imagesWatch = () => watch(config.watch.images, imagesBuild);
