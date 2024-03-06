# Desarrollo de Lista de Últimas Noticias

Este proyecto consiste en desarrollar un componente de lista de noticias con funcionalidad de mostrar y ocultar. A continuación, se detallan los pasos y las tecnologías utilizadas en el desarrollo.

## Pasos de Desarrollo

1. **Configuración del Proyecto:**

   - Inicialización del proyecto con React (con Typescript).
   - Instalación de dependencias: `axios` para las solicitudes HTTP y `sass` para el preprocesamiento de estilos.

   ```bash
   npx create-react-app last-news-test --template typescript
   cd last-news-test
   npm i axios sass
   ```

2. **Estructura del Proyecto:**

   - Implementación del componente principal (NewsList) y sus estilos.

   ```bash
   NewsList.scss
   NewsList.tsx
   ```

3. **Obtención de Datos desde la API:**
   - Utilización de Axios para realizar solicitudes a la API proporcionada.
   ```bash
   const fetchData = async () => {
      try {
        const response = await axios.get<NewsResponse>(
          "https://api.jsonbin.io/v3/b/63654b012b3499323bf58225"
        );
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
   ```
4. **Renderizado de Noticias:**
   - Mapeo de datos para renderizar la lista de noticias.
   - Implementación de la lógica para mostrar y ocultar noticias al hacer clic en el botón "Ver más".
5. **Estilización con SCSS:**

   - Aplicación de estilos utilizando SCSS siguiendo las buenas prácticas.
   - Añadido de efectos de hover en las noticias.

   ```bash
   li {
     &:hover {
       ...
       h3 {
         ...
       }
       img {
         ...
       }
     }
   }
   ```

   - Implementación de estilos responsivos utilizando media queries.

   ```bash
   @media (max-width: 600px) {
     ...
   }
   ```

## Tecnologías Utilizadas

- HTML
- React
- SCSS
- TypeScript
- Axios (para la solicitud a la API)

#### Desarrollado por Jherico Solier
