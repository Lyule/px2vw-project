module.exports = (options, req) => ({
    entry: './public/src/main.js',
    dist: './public/dist',
    sourceMap: false,
    webpack(config) {
        return config // <-- Important, must return it
    }
})
