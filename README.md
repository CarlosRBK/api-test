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

## Realizando pruebas en Swagger

Para realizar pruebas en Swagger y acceder a las rutas protegidas, sigue estos pasos:

1. Abre la documentación de la API en tu navegador accediendo a [http://localhost:{puerto}/docs](http://localhost:{puerto}/docs).

2. Busca la ruta de inicio de sesión "Login", y haz clic en ella para expandirla y mostrar más detalles.

3. En la sección de "Request Body", proporciona el objeto JSON con el campo "username" establecido en "prueba" y el campo "password" establecido en "1234".

4. Haz clic en el botón "Try it out" para enviar la solicitud de inicio de sesión a la API.

5. Verifica la respuesta de la API en la sección de "Responses". Si la autenticación fue exitosa, recibirás un token de acceso en la respuesta.

6. Una vez que hayas obtenido el token de acceso, haz clic en el botón "Authorize" en la parte superior de la página de Swagger.

7. En el campo "Value", ingresa el token de acceso que obtuviste en el paso anterior.

8. Ahora puedes utilizar las rutas protegidas de la API, como listar, crear, editar y eliminar publicaciones. Las solicitudes realizadas a estas rutas estarán autenticadas con el token proporcionado.

Recuerda que el token de acceso es necesario para acceder a las rutas protegidas. Asegúrate de incluirlo en cada solicitud a las rutas que lo requieran.


## Realizando pruebas en Postman

Para realizar pruebas en Postman y acceder a las rutas protegidas, sigue estos pasos:

1. Abre la aplicación de Postman en tu dispositivo.

2. Importa la colección de solicitudes de la API. Puedes encontrar el archivo de la colección en el repositorio de GitHub en la ruta [[Colección POSTMAN Api Test](https://github.com/CarlosRBK/api-test/blob/main/API-Test-CarlosBenitez.postman_collection.json)].

3. Una vez importada la colección, verás una lista de solicitudes predefinidas que puedes ejecutar.

4. Ubica la solicitud de inicio de sesión "LOGIN". Abre la solicitud para ver los detalles.

5. En el cuerpo de la solicitud, asegúrate de que los campos "username" y "password" estén establecidos correctamente. Por ejemplo, de manera predeterminada "username" es "prueba" y "password" es "1234".

6. Haz clic en el botón de "Enviar" para ejecutar la solicitud de inicio de sesión. Si la autenticación es exitosa, recibirás un token de acceso en la respuesta.

7. Copia el token de acceso generado.

8. Ahora puedes ejecutar otras solicitudes protegidas en la colección. Asegúrate de incluir el token de acceso en la sección de encabezados de cada solicitud. Agrega un encabezado con el nombre "Authorization" y el valor "Bearer {token}", donde "{token}" es el token de acceso que copiaste en el paso anterior.

9. Ejecuta las solicitudes protegidas y verifica las respuestas para asegurarte de que funcionen correctamente.

Recuerda que el token de acceso es necesario para acceder a las rutas protegidas y que estas caducan cada 2 horas. Asegúrate de incluirlo en cada solicitud a las rutas que lo requieran.


