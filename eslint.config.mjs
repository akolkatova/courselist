import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parser: tseslint.parser,
    },
  },
];
