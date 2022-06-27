module.exports = {
	root: true,
	extends: ["prettier"],
	plugins: ["prettier", "import", "react-app", "react-hooks"],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true
	},
	rules: {
		"arrow-body-style": ["error", "as-needed"],
		"react/require-default-props": "warn",
		"eqeqeq": ["error", "always"],
		"import/order": ["off"],
		"jsx-a11y/label-has-for": 0,
		"jsx-a11y/no-noninteractive-element-interactions": 0,
		"jsx-a11y/no-onchange": 0,
		"no-console": ["warn", { allow: ["warn", "error"] }],
		"no-unexpected-multiline": "error",
		"prefer-const": "error",
		"prettier/prettier": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/require-default-props": "off"
	},
	settings: {
		"react": {
			version: "detect"
		},
		"import/extensions": [".js", ".jsx"]
	}
}
