# dependencies main project
1. npx create-react-app . --template typescript
<!-- configure eslint -->
2. npm init @eslint/config
3. add ruels to eslints 
    "rules": {
        "no-unused-vars":"warn",
        "jsx-runtime":"off",
        "no-console": "warn",
        "quotes": ["error", "single"],
        "prefer-const":"error",
        "indent":["warn",2],
        "max-len":["error",{"code":120}],
        "comma-dangle":["error","always-multiline"],
        "import/order":["error", {
            "groups":["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
            "newlines-between": "always-and-inside-groups"
        }]

    }
4. add package.json script : "eslint \"src/**/*.{js,ts,jsx,tsx}\""
5. add package.json script : "lint:fix":"npm run lint -- --fix"

6. npm install @reduxjs/toolkit
7. npm install react-redux
8. npm install react-hook-form
<!-- if using rtk query dont install -->
9. npm i react-query
<!-- if not using nextjs -->
11. npm i react-router-dom
12. add file tsconfig.build.json with this object 
{
  "extends": "./tsconfig.json",
  "exclude": ["node_modules", "test", "dist", "dist/**/*spec.ts"],
  "include": ["src/**/*", ".eslintrc.js"]
}
<!-- install webpack and sass -->
13. npm install webpack webpack-cli --save-dev
14. npx webpack-cli init
15. npm install axios
# Prepare aliasing revolver
need to configure it in tsconfig.json file and webpack.config.js file the same routes like

tsconfig:
    "paths": {
        "@components/*": [
            "./src/components/*"
        ]
    },

webpack: 
resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    alias: {
      '@components': path.resolve(__dirname, 'components'),
    }
  }