<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar el comando

```
npm install
```

3. Tener Nest CLI instalado

```
npm insstall -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo **.env.template** y renombrar la copia a **.env**

6. Llenar las variables definidas en el ```.env```

7. Ejecutar la aplpicacion en dev
```
npm run start:dev
```

8. Ejecutar para llenar la base de datos

```
http://localhost:3000/api/v2/seed
```

## Production Build
1. Crear el archivo  ```.env.prod```
2. Llenar las variables de entorno de produccion
3. Construir la nueva imagen 
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

## Stack usado

- MongoDB
- NestJs
