#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const repositoryRoot = path.resolve(__dirname, "../../../../");

function addAttachment(root, id, displayName, filename, type) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
    throw new Error("Assignment ID must use lowercase kebab-case.");
  }
  if (!displayName.trim()) {
    throw new Error("Attachment display name must not be empty.");
  }
  if (!filename || path.basename(filename) !== filename || filename.includes("\\")) {
    throw new Error("Filename must be a name within the assignment directory.");
  }
  if (!/^[a-z][a-z0-9-]*$/i.test(type)) {
    throw new Error("Attachment type must be a simple word, such as python or csv.");
  }

  const configPath = path.join(root, "config.json");
  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  if (!Array.isArray(config.assignments)) {
    throw new Error('config.json must contain an "assignments" array.');
  }

  const assignment = config.assignments.find((item) => item.id === id);
  if (!assignment) {
    throw new Error(`Assignment ID not found in config.json: ${id}`);
  }
  if (assignment.path !== `assignments/${id}`) {
    throw new Error(`Unexpected assignment path in config.json for ID: ${id}`);
  }

  const attachmentPath = path.join(root, "assignments", id, filename);
  if (!fs.existsSync(attachmentPath) || !fs.statSync(attachmentPath).isFile()) {
    throw new Error(`Attachment file not found: assignments/${id}/${filename}`);
  }

  if (assignment.attachments === undefined) {
    assignment.attachments = [];
  }
  if (!Array.isArray(assignment.attachments)) {
    throw new Error(`Attachments must be an array for assignment: ${id}`);
  }
  if (assignment.attachments.some((attachment) => attachment.file === filename)) {
    return false;
  }

  assignment.attachments.push({
    name: displayName.trim(),
    file: filename,
    type: type.toLowerCase(),
  });

  fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
  return true;
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length !== 4) {
    console.error(
      'Usage: node add-attachment.js <assignment-id> "<display-name>" <filename> <type>',
    );
    console.error(
      'Example: node add-attachment.js python-basics "Starter Code" starter-code.py python',
    );
    process.exitCode = 1;
  } else {
    try {
      const added = addAttachment(repositoryRoot, ...args);
      if (added) {
        console.log(`Added "${args[1]}" (${args[2]}) to assignment "${args[0]}"`);
      } else {
        console.log(`Skipped: "${args[2]}" is already attached to "${args[0]}"`);
      }
    } catch (error) {
      console.error(error.message);
      process.exitCode = 1;
    }
  }
}

module.exports = { addAttachment };