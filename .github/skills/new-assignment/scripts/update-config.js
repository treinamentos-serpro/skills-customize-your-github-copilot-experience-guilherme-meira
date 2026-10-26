#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const repositoryRoot = path.resolve(__dirname, "../../../../");

function readConfig(root) {
  const configPath = path.join(root, "config.json");
  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

  if (!Array.isArray(config.assignments)) {
    throw new Error('config.json must contain an "assignments" array.');
  }

  return { config, configPath };
}

function updateConfig(root, id, title, description) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
    throw new Error("Assignment ID must use lowercase kebab-case.");
  }
  if (!title.trim() || !description.trim()) {
    throw new Error("Title and description must not be empty.");
  }

  const assignmentDirectory = path.join(root, "assignments", id);
  if (!fs.existsSync(path.join(assignmentDirectory, "README.md"))) {
    throw new Error(`Assignment README not found: assignments/${id}/README.md`);
  }

  const { config, configPath } = readConfig(root);
  if (config.assignments.some((assignment) => assignment.id === id)) {
    throw new Error(`Assignment ID already exists in config.json: ${id}`);
  }

  const dueDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  config.assignments.push({
    id,
    title: title.trim(),
    description: description.trim(),
    path: `assignments/${id}`,
    dueDate,
  });

  fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
  return dueDate;
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length !== 3) {
    console.error('Usage: node update-config.js <id> "<title>" "<description>"');
    process.exitCode = 1;
  } else {
    try {
      const dueDate = updateConfig(repositoryRoot, ...args);
      console.log(`Added "${args[1]}" (due ${dueDate}).`);
    } catch (error) {
      console.error(error.message);
      process.exitCode = 1;
    }
  }
}

module.exports = { updateConfig };