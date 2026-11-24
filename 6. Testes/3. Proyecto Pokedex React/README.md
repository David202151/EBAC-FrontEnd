# Pokédex React - Armador de equipo

Aplicación web hecha con React para explorar Pokémon y armar un equipo de hasta 6 integrantes. Los datos vienen de la [PokéAPI](https://pokeapi.co/), una API pública y gratuita.

Demo: _pendiente de publicar_

## Funcionalidades

- Listado de 20 Pokémon con imagen y tipos, cada tipo con su color.
- Página de detalle de cada Pokémon con imagen, tipos, altura, peso y habilidades.
- Armado de un equipo de máximo 6 Pokémon, sin repetidos.
- Página "Mi equipo" para quitar integrantes o vaciar el equipo.
- El equipo se guarda en el navegador (`localStorage`), por lo que no se pierde al recargar la página.
- Estados de carga y de error en la lista y en el detalle.
- Diseño responsive, pensado primero para móvil.

## Tecnologías

- React 19 con hooks (`useEffect`, `useParams`, `useSelector`, `useDispatch`) y hooks personalizados.
- React Router para la navegación entre páginas.
- Redux Toolkit para el estado global (`createSlice` y `createAsyncThunk`).
- Axios para las peticiones a la API.
- SASS con metodología BEM para los estilos.
- Jest y React Testing Library para las pruebas.

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Listado de Pokémon y botón para agregar al equipo |
| `/pokemon/:name` | Detalle de un Pokémon |
| `/team` | Equipo actual |

## Requisitos

- Node.js 18 o superior
- npm

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Iniciar en modo desarrollo (http://localhost:3000)
npm start

# Generar la versión de producción
npm run build
```

## Pruebas

```bash
# Modo interactivo
npm test

# Una sola ejecución
npm test -- --watchAll=false
```

Las pruebas cubren:

- Funciones: el reducer del equipo (`teamSlice`) y las funciones de `localStorage`.
- Hook personalizado: `useTeamMember`.
- Componentes: `PokemonCard`, `AddToTeamButton` y `Header`.
- Páginas: `Home`, `Detail` y `Team`, con Axios simulado para no depender de la API real.

El archivo `package.json` incluye una sección `jest` con un `moduleNameMapper`, y `src/setupTests.js` incluye un polyfill de `TextEncoder`. Ambos son necesarios para que Jest funcione con React Router v7 dentro de Create React App.

## Estructura del proyecto

```
src/
├── __tests__/          Pruebas, organizadas por tipo
│   ├── app/
│   ├── components/
│   ├── hooks/
│   └── pages/
├── app/
│   ├── features/
│   │   ├── pokemon/    Slices de la lista y del detalle
│   │   └── team/       Slice del equipo
│   ├── localStorage.js Guardar y cargar el equipo
│   └── store.js        Configuración del store de Redux
├── components/         PokemonCard, AddToTeamButton, Header
├── config/             URL base de la API
├── hooks/              usePokemons, useTeamMember
├── pages/              Home, Detail, Team
├── services/           Peticiones a la API con Axios
├── styles/             Estilos SASS (variables, mixins y componentes)
├── test-utils.js       Utilidades para las pruebas
├── App.js
└── index.js
```

## Notas sobre los datos

La PokéAPI entrega la altura en decímetros y el peso en hectogramos. La aplicación los divide entre 10 para mostrarlos en metros y kilogramos.

## Créditos

Datos de [PokéAPI](https://pokeapi.co/). Proyecto desarrollado como práctica del curso de Front-end de EBAC.
