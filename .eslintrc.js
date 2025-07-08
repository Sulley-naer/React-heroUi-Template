import antfu from "@antfu/eslint-config";

const config = antfu();

export default {
  ...config,
  rules: {
    "no-console": "off",
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "ignore",
        alphabetize: {
          order: "ignore",
          caseInsensitive: true,
        },
      },
    ],
  },
};
