# SoundSpeaks - Music Channel Website

Una página web moderna para el canal de música **SoundSpeaks**, especializado en AfroHouse y Tech House.

## Características

- Diseño moderno con efectos de neón que se adapta a la imagen de marca
- Totalmente responsive para dispositivos móviles y de escritorio
- Animaciones y efectos visuales para mejorar la experiencia de usuario
- Sección de música con reproductor interactivo
- Formulario de contacto interactivo

## Tecnologías Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuario
- **TypeScript**: Superset de JavaScript que añade tipado estático
- **Bootstrap & React-Bootstrap**: Framework CSS para diseño responsive
- **SCSS**: Preprocesador CSS para estilos más organizados y mantenibles
- **React Router**: Para navegación entre páginas
- **React Icons**: Iconos para una mejor experiencia visual

## Estructura del Proyecto

```
src/
├── assets/          # Imágenes y recursos estáticos
├── components/      # Componentes reutilizables
├── pages/           # Páginas principales de la aplicación
├── styles/          # Archivos SCSS de estilos
├── App.tsx          # Componente principal
└── index.tsx        # Punto de entrada
```

## Requisitos

- Node.js (versión 14 o superior)
- npm o yarn

## Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/sandrodevx/soundspeaks.git
cd soundspeaks
```

2. Instalar dependencias
```bash
npm install
# o
yarn install
```

3. Iniciar el servidor de desarrollo
```bash
npm start
# o
yarn start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## Ejecutar en Producción

Para crear una versión optimizada para producción:

```bash
npm run build
# o
yarn build
```

Los archivos generados estarán en la carpeta `build/` y pueden ser servidos por cualquier servidor estático.

## Personalización

- Los colores principales de la aplicación se pueden modificar en los archivos SCSS
- Las imágenes y contenido se pueden actualizar en los archivos respectivos

## Licencia

[MIT](LICENSE) 
