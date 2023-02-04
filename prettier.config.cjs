/** @type {import("prettier").Config} */
module.exports = {
    plugins: [
        require.resolve("prettier-plugin-tailwindcss"),
        require.resolve("prettier-plugin-multiline-arrays"),
    ],
    tailwindConfig: "./tailwind.config.cjs",
    trailingComma: "es5",
    tabWidth: 4,
    semi: false,
    singleQuote: false,
}
