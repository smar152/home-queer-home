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
    exec(moveCommand, (...args) => execCallback(...args, moveCommand));
  }
});

function execCallback(error, stdout, stderr, command) {
  console.log("Executing command", command);

  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  if (stdout) {
    console.log(`stdout:\n${stdout}`);
  } else {
    console.log("Success");
  }
}
