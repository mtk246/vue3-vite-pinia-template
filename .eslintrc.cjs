module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:vue/vue3-essential"
  ],
  "overrides": [
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [
      "vue"
  ],
  rules: {
    "vue/html-indent": [2, 4],
    "max-len": ["error", 120],
    'no-console': 'off',
  },
}
