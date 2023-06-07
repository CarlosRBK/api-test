# API Test

Esta aplicación es una API creada con Node.js, el framework Express.js y JSONPlaceHolder. Proporciona diferentes rutas para gestionar publicaciones, incluyendo la capacidad de listar, crear, editar y eliminar publicaciones. Además, se ha implementado un sistema de autenticación utilizando JWT (JSON Web Tokens) para proteger las rutas relacionadas con las publicaciones.

![token](https://github.com/CarlosRBK/api-test/assets/115422555/dd19c011-7aba-41cb-9210-030feafbd3b9)

## Documentación de la API

La documentación de la API ha sido generada automáticamente utilizando Swagger y se encuentra disponible en la siguiente dirección: [http://localhost:{puerto}/docs](http://localhost:{puerto}/docs). Asegúrate de reemplazar "{puerto}" con el número correspondiente al puerto en el que se encuentra en ejecución la API.

Esta documentación generada por Swagger proporciona una descripción exhaustiva de cada ruta disponible en la API, incluyendo los parámetros requeridos, los códigos de respuesta y ejemplos prácticos de solicitudes y respuestas.

![swagger](https://github.com/CarlosRBK/api-test/assets/115422555/5fea307e-a354-41c5-8b64-0b18e9a08d54)

## Colección de Postman

Se incluye una colección de Postman que puedes utilizar para probar la API de manera interactiva. La colección se encuentra en el archivo "API-Test-CarlosBenitez.postman_collection.json" en la raíz del proyecto. Importa esta colección en tu cliente de Postman para acceder a todas las rutas y realizar solicitudes a la API de forma sencilla.

![postman](https://github.com/CarlosRBK/api-test/assets/115422555/77221161-1c86-4db1-9fae-27b06d3844e2)

## Pruebas automatizadas en Postman

La colección de Postman también incluye pruebas automatizadas para verificar el funcionamiento correcto de las rutas de la API. Estas pruebas se ejecutan automáticamente al realizar las solicitudes y verifican que las respuestas cumplan con los criterios esperados. Puedes ejecutar las pruebas de manera individual o en conjunto para validar la integridad de la API.

![test automatizado](https://github.com/CarlosRBK/api-test/assets/115422555/ccaaac73-cb2c-4d68-8879-280adcbd47c2)


## Instalación

A continuación, se detallan los pasos necesarios para instalar y ejecutar la aplicación en tu entorno local:

1. Clona este repositorio en tu máquina local.
2. Ejecuta el comando `npm install` dentro de la carpeta `src` para instalar las dependencias.
3. Configura las variables de entorno necesarias a su gusto en el archivo  `.env copy` y modificar el nombre del archivo `.env copy` a `.env`.
4. Ejecuta el comando `npm start` para iniciar la aplicación.

La aplicación debería estar funcionando en tu entorno local.

