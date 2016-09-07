(function (global) {

  var  map = {
    'app'       : 'app',
    'ts'        : 'https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript': 'https://unpkg.com/typescript@1.9.0-dev.20160409/lib/typescript.js',
    'react'     : 'https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react.js',
    'react-dom' : 'https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react-dom.js'
  };

  var packages = {
    'app'       : { main: 'main.tsx',  defaultExtension: 'tsx' }
  };

  var config = {
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true,
      jsx: 2
    },
    meta: {
      'typescript': {
        "exports": "ts"
      },
      'react': {
        "exports": "React"
      }
    },
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
