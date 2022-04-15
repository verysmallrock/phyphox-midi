#!/usr/bin/env node
const config = require('./buildconfig')
Object.assign(config, {
	minify: true
})

require('esbuild').build(config).catch(() => process.exit(1))
