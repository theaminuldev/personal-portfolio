module.exports = {
	"root": true,
	"env": {
		"browser": true,
		"es2023": true,
		"node": true
	},
	"extends": [
		"airbnb-base",
		"eslint:recommended",
		"plugin:import/recommended",
		"plugin:prettier/recommended",
		"eslint-config-prettier"
	],
	"plugins": [
		"import",
		"prettier"
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"settings": {
		"import/resolver": {
			"node": {
				"extensions": [
					".js"
				],
				"moduleDirectory": [
					"node_modules",
					"src/"
				]
			}
		}
	},
	"rules": {
		"prettier/prettier": "error",
		"no-console": "error",
		"import/no-extraneous-dependencies": [
			"error",
			{
				"devDependencies": true
			}
		]
	}
}