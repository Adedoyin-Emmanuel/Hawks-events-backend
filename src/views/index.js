const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');

const exampleSources = fs.readFileSync(path.resolve(__dirname, './example.handlebars'), 'utf-8');

const exampleSourcesTemplate = handlebars.compile(exampleSources);

module.exports = {
    exampleSourcesTemplate
}