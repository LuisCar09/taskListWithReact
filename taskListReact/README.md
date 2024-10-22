# Task Manager

## Descripción

Este proyecto es una aplicación de gestión de tareas sencilla construida en React. Permite agregar y eliminar tareas de una lista, y muestra la cantidad de tareas pendientes.

## Características

- Añadir nuevas tareas a la lista: Tendremos un input para introducir el dato. Además añadiremos un botón `agregar` para añadir esa tarea.
- Eliminar tareas de la lista: A cada tarea le añadiremos un botón eliminar para quitarla de la lista.
- Ver un contador de tareas pendientes: Cada vez que se añada o se elimine saldrá el total de tareas.

## Instalación

Si estáis en stackblitz no hará falta instalar las dependencias, se instalan solas al iniciar el proyecto.

## Estructura de archivos

src/
│
├── App.js # Componente principal de la aplicación
├── index.js # Punto de entrada de la aplicación
└── App.css # Estilos básicos (opcional)

## Uso

- Escribe una nueva tarea en el campo de entrada (input).
- Haz clic en el botón "Agregar" para añadir la tarea a la lista.
- Para eliminar una tarea, haz clic en el botón "Eliminar" junto a la tarea correspondiente.
- Observa cómo cambia el contador de tareas pendientes.

## CSS

Añade las CSS necesarias para que quede lo mejor posible y poder practicarlas.

## Pistas

- Recuerda importar lo necesario de React para poder comenzar el proyecto
- A cada `li` hay que añadirle el atributo key. `<li key={index}>` para que no os de error el renderizado.
