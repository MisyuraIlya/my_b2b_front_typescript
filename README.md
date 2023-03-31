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

16. npm install sweetalert2
17. npm install react-icons --save
18. npm i react-pro-sidebar
19. npm install -S react-useanimations
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
# installing storybook
there is issue with webpack 5 this is the command to install
1. npx sb init --builder webpack5

# Tests
1. npm i -D jest
2. create script "MyTest": "jest"

# screen shot test 
1. npm i -D loki
2. npx loki init
3. in package json added configuration this must be like this 
  "loki": {
    "configurations": {
      "chrome.laptop": {
        "target": "chrome.app",
        "width": 1366,
        "height": 768,
        "deviceScaleFactor": 1,
        "mobile": false
      },
      "chrome.iphone7": {
        "target": "chrome.app",
        "preset": "iPhone 7"
      }
    }
  }
  in default it in docker not app then must change to app
3. npx loki test
4. npx loki approve

# webdriver IO
1. add to package json "type":"module"
2. npm init wdio .
3. npx wdio run ./wdio.conf.ts


# conflict 
1. between e2e tests with webrdiverio and storybook type:module in packge.json 


# how to run test
1. npm run test
2. npm run test:e2e


# ALIAS INSTALLATION
there was issue with tsconfig alias paths to solve it we install carco
1. npm i @craco/craco
2. add new tsconfig.build.json and this code
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": ["./src/*"],
            "@components/*": ["./src/components/*"],
            "@hooks/*": ["./src/hooks/*"],
            "@models/*": ["./src/models/*"],
            "@modules/*": ["./src/modules/*"],
            "@pages/*": ["./src/pages/*"],
            "@services/*": ["./src/services/*"],
            "@store/*": ["./src/store/*"],
            "@utils/*": ["./src/utils/*"]
        },
    }
}

3. add carco.config.js and add code 
const path = require('path');
module.exports = {
  webpack: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'components'),
        '@hooks': path.resolve(__dirname, 'hooks'),
        '@models': path.resolve(__dirname, 'models'),
        '@modules': path.resolve(__dirname, 'src/modules'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@services': path.resolve(__dirname, 'services'),
        '@store': path.resolve(__dirname, 'store'),
        '@utils': path.resolve(__dirname, 'utils')
    },
  },
};
4. and package json update code 
"start": "craco start",
"test: : "craco test"

5. jest configuration
set in package.json jest configuration
  "jest": {
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/src/$1",
      "^@components/(.*)$": "<rootDir>/src/components/$1",
      "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
      "^@models/(.*)$": "<rootDir>/src/models/$1",
      "^@modules/(.*)$": "<rootDir>/src/modules/$1",
      "^@pages/(.*)$": "<rootDir>/src/pages/$1",
      "^@services/(.*)$": "<rootDir>/src/services/$1",
      "^@store/(.*)$": "<rootDir>/src/store/$1",
      "^@utils/(.*)$": "<rootDir>/src/utils/$1"
    }
  }


  i disable eslint nned to return this package json

    "eslintConfig": {
    "extends": [
      "react-app/jest"
    ],
    "overrides": [
      {
        "files": [
          "**/*.stories.*"
        ],
        "rules": {
          "import/no-anonymous-default-export": "off"
        }
      }
    ]
  },