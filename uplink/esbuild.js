// This .js files optimizes our React files so that It's ready to be deployed.

const esbuild = require("esbuild");
const {sassPlugin} = require("esbuild-sass-plugin");

esbuild
    .build({
        entryPoints: ["frontend/Application.tsx"], // File to be optimized for deployment.
        outdir: "/public/assets", // Directory to store the generated optimized files.
        bundle: true,
        watch: true,
        minify: true, // Whether to minify the generated files or not.
        plugins: [sassPlugin()],
        loader: {'.js': 'jsx'} // Converting JSX files to JS files.
    })
    .then(() => console.log("⚡ Build complete! ⚡"))
    .catch(() => process.exit(1));
