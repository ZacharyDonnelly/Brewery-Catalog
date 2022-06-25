module.exports = {
	root: true,
	parser: "@babel/eslint-parser",
	plugins: ["react-app", "react-hooks", "prettier", "flowtype"],
	extends: ["react-app", "prettier", "plugin:flowtype/recommended"],
	parserOptions: {
		sourceType: "module",
		requireConfigFile: false,
		babelOptions: {
			rootMode: "upward",
			presets: [require.resolve("babel-preset-react-app/prod"), require.resolve("@babel/preset-react")],
		}
	},
	env: {
		es6: true,
		node: true
	},
	rules: {
		"no-var": 2, // User 'let' or 'const' instead of 'var'
		"prettier/prettier": "warn",
		"react/jsx-uses-react": 1,
		"react/jsx-uses-vars": 2, // User 'let' or 'const' instead of 'var'
		"react/no-unescaped-entities": ["error", { forbid: [">", '"', "}"] }],
		"react/react-in-jsx-scope": "off",
		"react/require-default-props": "warn",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/jsx-filename-extension": "off",
		"react/jsx-no-bind": "off",
		"prefer-const": "error",
		"trailing-comma": ["error", { esrictual: "always", objects: "always", arrays: "always" }],
		"no-undef": "error",
		"no-unexpected-multiline": 0,
		"quotes": ["warn", "double", { avoidEscape: true, allowTemplateLiterals: true }]
	},
	overrides: [
		// node files
		{
			files: [
				"./.eslintrc.js",
				"./babel.config.js",
				"./.lintstagedrc.js",
				"./.stylelint.config.js",
				"./commitlint.config.js"
			],
			parserOptions: {
				sourceType: "script"
			},
			env: {
				browser: false,
				node: true
			},
			plugins: ["node"],
			extends: ["plugin:node/recommended"],
			rules: {
				// this can be removed once the following is fixed
				// https://github.com/mysticatea/eslint-plugin-node/issues/77
				"node/no-unpublished-require": "off",
				"eqeqeq": "warn"
			}
		},
		{
			files: ["./.eslintrc.js", "./babel.config.js"],
			rules: {
				"import/no-commonjs": "off"
			}
		}
	],
	settings: {
		react: {
			version: "detect"
		},
    "import/extensions": [".js", ".jsx"]
	}
}
