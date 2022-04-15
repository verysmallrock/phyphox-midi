const { copy } = require('esbuild-plugin-copy')
const { sassPlugin, postcssModules } = require('esbuild-sass-plugin')

module.exports = {
	plugins: [
		sassPlugin({
			exclude: /\.css$/,
			type: 'style',
			transform: postcssModules({})
		}),
		copy({
			// this is equal to process.cwd(), which means we use cwd path as base path to resolve `to` path
			// if not specified, this plugin uses ESBuild.build outdir/outfile options as base path.
			resolveFrom: 'cwd',
			assets: {
				from: ['./src/index.html'],
				to: ['./dist/index.html'],
			},
		}),
	],
	banner: {
		js: ' (() => new EventSource("http://localhost:8082").onmessage = () => location.reload())();',
	},
	logLevel: "info",
	entryPoints: ['src/index.jsx'],
	bundle: true,
	outdir: './dist',
}
