/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require('tailwindcss');
// eslint-disable-next-line import/no-extraneous-dependencies
const postCssImport = require('postcss-import');

const plugins = [postCssImport];

plugins.push(tailwindcss);
// plugins.push(tailwindcss('tailwind.config.js'))
// This is if you want to include your custom config

module.exports = { plugins };
