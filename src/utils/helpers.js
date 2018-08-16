'use strict';

const glob = require('glob');
const path = require('path');

const includeFiles = directory => glob.sync(directory).forEach((file) => require(path.resolve(file)));
exports.includeFiles = includeFiles;
