# Webpack HTML Boilerplate

## Introducción
Este boilerplate de HTML tiene como objetivo ayudar a la gente que recién comienza en SASS (y a los que no también 😉) a desarrollar sitios integrando esta tecnología sin tener que realizar configuraciones extrañas o a evitar los posibles problemas que pueda llevar el desarrollo en SASS directamente en la consola.

Además este boilerplate incorpora algunas otras herramientas como por ejemplo la actualización del navegador cada vez que se ha realizado algún cambio en los archivos SCSS o agregar vendor prefixes a las propiedades que lo necesiten.



### Requisitos mínimos
Para ejecutar esta instalación deberemos asegurarnos de tener instalada una versión de Node igual o mayor a la 8.9.4. Si aun no tienes Node instalado puedes descargarlo desde esta dirección: [nodejs](https://nodejs.org/) y si lo tienes instalado pero no sabes cómo obtener la versión, puedes ejecutar este comando: `node --version`.



### Instalación y ejecución
Para hacer uso correcto del boilerplate deberemos entrar desde la consola a la carpeta `_webpack` (`Webpack-HTML-Boilerplate/_webpack`) y ejecutar el comando: `npm install` ó su abreviación: `npm i`. Eso generará dentro de la carpeta una nueva que se llamará `node_modules` y será donde estarán instaladas todas las dependencias necesarias para la ejecución de Webpack y sus herramientas.


Una vez instalado Webpack estará todo listo para comenzar a trabajar, por lo que podremos utilizar dos comandos:

- Start: con el comando `npm run start` (o su atajo: `npm start`) iniciaremos el servidor y a su vez se abrirá el navegador por defecto para que podamos ir viendo los cambios que se vayan realizando. Es importante destacar que este comando quedará esperando cada cambio que se realice en los archivos, por ende deberá seguir ejecutándose indefinidamente. Si queremos detener su ejecución utilizaremos la combinación de teclas: `control + c` y para reiniciar volveremos a usar el comando `npm run start`.
- Build: el comando `npm run build` minifica tanto los archivos js como css, dejando todo listo para subir a producción.


#### Webpack DevServer
El puerto por defecto que se utilizará será el :8081, sin embargo dentro de las configuraciones podremos cambiarlo en el archivo `webpack.dev.js`.
Una vez que se ejecute el comando `npm start` se abrirá el navegador por defeto del computador, sin embargo podríamos especificar qué navegador queremos que se abra con la opción: `open: 'Google Chrome'` en la línea 53 del anteriormente mencionado archivo.
