/**
 * setup taken from:
 * @link https://medium.com/@adisk/how-to-setup-tailwind-css-with-parcel-bundler-f76e4aac5f16
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require('tailwindcss');

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

const plugins = [];
plugins.push(tailwindcss);
// plugins.push(tailwindcss('tailwind.config.js'))
// This is if you want to include your custom config

if (!IS_DEVELOPMENT) {
  // eslint-disable-next-line global-require
  const purgecss = require('@fullhuman/postcss-purgecss');

  class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-z0-9-:\/]+/g) || [];
    }
  }

  plugins.push(
    purgecss({
      content: ['src/*.html'],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html'],
        },
      ],
    }),
  );
}

module.exports = { plugins };
