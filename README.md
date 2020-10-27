# OpenGate Advanced UX Documentation

Proyecto en VuePress que contiene la documentación necesaria para comenzar a programar en Opengate.

## Guía para la instalación y ejecución

Una vez se haya descargado el proyecto se debe ejecutar lo siguiente para instalar los elementos necesarios para su funcionamiento 

```bash
> yarn install
```

Una vez instalado todo tenemos disponibles los siguientes comandos para el arranque del servicio vuepress

```bash
> yarn docs:dev
```

Si todo ha ido bien nos mostrará la ip y puerto donde se puede consultar la documentación generada

## Compilación del proyecto

Para realizar el empaquetado final de la documentación se debe ejecutar la siguiente sentencia:

```bash
> yarn docs:build
```

Tras la ejecución se habrán generado todos los ficheros necesarios bajo la ruta **docs/.vuepress/dist/**

> Es necesario un servidor http básico para servir la información generada con este comando 