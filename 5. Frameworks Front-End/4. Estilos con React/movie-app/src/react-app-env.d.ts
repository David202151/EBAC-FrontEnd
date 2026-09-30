/// <reference types="react-scripts" />

// Le dice a TypeScript que los imports de archivos .css son válidos.
// Sin esto, `import './Login.css'` aparece subrayado en rojo porque
// TypeScript no sabe qué tipo tiene un archivo que no es .ts/.tsx.
declare module '*.css';
