# GifExpertApp

Este es el repositorio de una de las prácticas del curso "React: De cero a experto ( Hooks y MERD )" de Fernando Herrera de Udemy

# Instalación y configuracion de Jest + React Testing Library
## En proyectos de React + Vite

1. Instalaciones:
```
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react 
npm install --save-dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto: (NO LO INSTALO)
```
npm install --save-dev whatwg-fetch
```

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel __babel.config.cjs__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.cjs__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.cjs']
}
```

__jest.setup.cjs__
```
// En caso de necesitar la implementación del FetchAPI
// import 'whatwg-fetch'; // <-- yarn add whatwg-fetch (NO LO INSTALO)
```


