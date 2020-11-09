# Stratus Redux - POC

Actualmente en Stratus no tenemos un patrón claro de desarrollo, por lo cual para cada feature surgen muchas incertidumbres de cómo encararlo no terminando en un producto claro.

## Objetivos

- Tener una styleguide base.
- Tener una estructura del proyecto clara y escalable.
- Tener un state management.

### Styleguide

Una de las formas más sencillas de mantener un criterio unificado a la hora de desarrollar es tener un styleguide que documente el objetivo y las visiones del equipo con respecto al proyecto, crear un styleguide toma tiempo y esfuerzo por lo que podríamos tomar como base el de redux.

### Estructura del proyecto

Hay muchas formas de estructurar un proyecto react, react no recomienda ninguna pero sí da algunas sugerencias. Redux en este aspecto recomienda organizar por feature, para nuestro caso podría ser dominio, esto nos ayuda a reunir toda la lógica de un dominio en un namespace, dándonos a futuro la posibilidad de separar los dominios como módulos independientes.

Citando a lombo en la All Hands del 10/2020 “La estructura es un medio, no un fin”.

### State management

Un state management nos permite separar la lógica de negocio con la representación de los datos (componentes visuales), además de compartir esa información entre diferentes componentes sin necesidad de hacer nesting de props entre componentes reduciendo la cantidad de renders en react (aumentando la performance)
Hay muchos state management que pueden funcionar con react.

Podría nombrar algunos:

- Redux
- Context (React Api)
- Mobx
- GraphQL
- Recoil

La POC fue hecha siguiendo el styleguide de redux, redux-toolkit y con typescript

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
