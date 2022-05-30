#!/usr/bin/env node

// This file looks in the folder ./public/img/pages for files in the format page00N.jpg
// And renames them to pageN.jpg

import { readdir } from "fs/promises";
import { exec } from "child_process";

const imageDir = "./public/img/pages";
const images = await readdir(imageDir);
images.forEach((path) => {
  const [whole, zeroes, number, suffix] =
    path.match(/page(0+)([1-9]+)(.+)/) || [];
  if (number) {
    const newPath = `page${number}${suffix}`;
    const moveCommand = `git mv ${imageDir}/${path} ${imageDir}/${newPath}`;
    exec(moveCommand, execCallback);
  }
});

function execCallback(error, stdout, stderr) {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
}
