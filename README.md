# Giroscopio en JavaScript

Hace mucho tiempo quiero aprender a usar esta funcionalidad, que con el uso adecuado, puede generar mucha inmersión para el usuario. Sin embargo, los cambios que anularon la funcionalidad de los eventos `devicemotion` me habían quitado las esperanzas de poder usarla.

Hoy descubro que JavaScript tiene una interface que extinde del [Sensor API](https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs) llamado `Gyroscope` y que funciona muy bien.

## Instalación

El repositio pueden clonarlo de ...

```bash
# npm
npm

# pnpm
pnpm install

# yarn
yarn
```

## Consideraciones

Hay que tener en cuenta que con algunos navegadores como Safari, Gyroscope no está soportado por una cuestión de permisos.

En ese caso, ya veremos en el futuro cómo manejarlo.

## Despedida

Voy a intentar subir ejemplos de uso para dominarlo.
