import globals from "globals";
import pluginJs from "@eslint/js";

export default [
	{
		languageOptions: { globals: globals.browser },
		env: {
			browser: true,
			node: true,
			es2021: true,
		},
		// Extend a set of recommended rules from eslint:recommended
		extends: ["eslint:recommended"],
		// Plugins extend ESLint's capabilities to support additional rules
		plugins: [],
		// Custom rules can be defined here
		rules: {
			// Indentation
			indent: ["error", 2], // 2 spaces for indentation
			// Variable declarations
			"no-var": "error", // Prefer const or let over var
			// Semicolons
			semi: ["error", "always"], // Require semicolons at the end of statements
			// Function parentheses spacing
			"space-before-function-paren": ["error", "always"], // Require space before function parentheses
			// Unused variables
			"no-unused-vars": "warn", // Warn about unused variables
			// Console usage
			"no-console": "warn", // Warn about console.log, console.error, etc.
			// Arrow functions
			"prefer-arrow-callback": "error", // Prefer arrow functions as callbacks
			// Object shorthand
			"object-shorthand": ["error", "always"], // Require object shorthand syntax
			// ES6 import/export
			"import/no-unresolved": "off", // Turn off unresolved import checks
			"import/extensions": "off", // Turn off extension checks for imports
		},
	},
	pluginJs.configs.recommended,
];
