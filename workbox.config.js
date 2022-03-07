module.exports = {
    swSrc: "src/service-worker.js",
    swDest: "public/sw.js",
    globDirectory: "public",
    globPatterns: [
        "**/*.{js,css,html}"
    ],
    globIgnores: [
        "**/*.map",
        "**/asset-manifest*.js",
        "**/service-worker.js"
    ]
}
