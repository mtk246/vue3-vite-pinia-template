module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
    ],
    plugins: ['vue'],
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
    rules: {
        "vue/html-indent": [2, 4],
        "max-len": ["error", 120],
        'no-console': 'off',
    },
}