// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'semi':['error','always'],
		'indent':'off',//缩进问题
		'vue/script-indent':['error',2,{'baseIndent':1}],//空格问题
		'space-before-function-paren':['error',{'anonymous':'always','named':'never','asyncArrow':'always'}]//函数之前括号的空格
  }
}
