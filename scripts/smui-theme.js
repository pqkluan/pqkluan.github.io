'use strict';

import fs from 'fs';
import { spawnSync } from 'child_process';

const inputDir = 'src/theme';
const outputDir = 'static/css';
const outputFile = 'smui.css';

function prepareOutDir() {
	if (fs.existsSync(outputDir)) return;
	fs.mkdirSync(outputDir);
}

function smuiTheme() {
	prepareOutDir();

	const cmd = spawnSync('smui-theme', ['compile', `${outputDir}/${outputFile}`, '-i', inputDir]);

	if (cmd.stdout.toString()) console.log(cmd.stdout.toString());
	// Only log error if output is not exists
	else console.log(cmd.stderr.toString());
}

smuiTheme();
