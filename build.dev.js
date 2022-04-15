#!/usr/bin/env node
const config = require('./buildconfig')
const { createServer } = require("http")

const clients = [];


Object.assign(config, {
	banner: {
		js: ' (() => new EventSource("http://localhost:8082").onmessage = () => location.reload())();',
	},
	watch: {
		onRebuild(error) {
			clients.forEach((res) => res.write("data: update\n\n"));
			clients.length = 0;
			console.log(error ? error : "...");
		},
	},
})

require('esbuild').build(config).catch(() => process.exit(1))

// caches loaded pages so we can notify to hot reload when rebuilding code.
createServer((req, res) => {
	return clients.push(
	  res.writeHead(200, {
		"Content-Type": "text/event-stream",
		"Cache-Control": "no-cache",
		"Access-Control-Allow-Origin": "*",
		Connection: "keep-alive",
	  }),
	);
  }).listen(8082);
