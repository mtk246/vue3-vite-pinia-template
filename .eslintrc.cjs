module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
    ],
    plugins: ['vue'],
    rules: {
        "vue/html-indent": [2, 4],
        "max-len": ["error", 120],
        'no-console': 'off',
    },
}