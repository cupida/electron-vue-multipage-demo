const glob = require('glob');
const path = require('path');

const PAGE_PATH = path.resolve(__dirname, '../src/renderer/pages/');

const getMultiPageConfig = () => {
    const entries = {};
    const plugins = [];
    const pagePath = path.resolve(PAGE_PATH, '*/main.js');

    glob.sync(pagePath).forEach(filePath => {
        const entryPath = path.dirname(filePath);
        const entryName = entryPath.substring(entryPath.lastIndexOf('/') + 1);

        entries[entryName] = filePath;
        plugins.push({
            template: path.resolve(entryPath, './index.ejs'),
            filename: entryName + '.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunks: [entryName],
            nodeModules: process.env.NODE_ENV !== 'production' && path.resolve(__dirname, '../node_modules')
        });
    });

    return {
        entries,
        plugins
    };
}

module.exports = {
    getMultiPageConfig
}
