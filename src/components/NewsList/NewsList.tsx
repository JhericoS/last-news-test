import React, { useState, useEffect } from "react";
import axios from "axios";
import { format, parse } from "date-fns";
import "./NewsList.scss";

// Representa la estructura de los datos que se llaman de la API
interface NewsItem {
  id: string;
  date: string;
  title: string;
  autor: string;
  section: string;
  image: string;
  type: string;
}

// Representa la información de cada noticia individualmente
interface NewsResponse {
  record: {
    notes: NewsItem[];
  };
}

// Defino la lista de noticias (NewsList) como una función de componente de React
const NewsList: React.FC = () => {
  // * Uso del hook useState * 
  // Almacena la respuesta de la API
  const [news, setNews] = useState<NewsResponse>({ record: { notes: [] } });
  // Indica si se deben mostrar todas las noticias o solo las últimas 5
  const [showAll, setShowAll] = useState(false);

  // * Uso del hook useEffect * 
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realiza la solicitud de datos que almacenará el estado news a través del setNews
        const response = await axios.get<NewsResponse>(
          "https://api.jsonbin.io/v3/b/63654b012b3499323bf58225"
        );
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []);

  // Con esta función formateo la fecha a un mejor formato
  const formatDate = (dateString: string): string => {
    const parsedDate = parse(dateString, "dd-MM-yyyy HH:mm:ss", new Date());
    return format(parsedDate, "dd/MM/yyyy h:mm a");
  };

  // Revierto el orden de las noticias para que las últimas se muestren primero
  const sortedNews = [...news.record.notes].reverse();

  // Mostrar solo las últimas 5 noticias (o sea las primeras 5 noticias de sortedNews)
  const displayedNews = showAll ? sortedNews : sortedNews.slice(0, 5);

  return (
    <div className="news-list">
      {/* Listado de las noticias */}
      <ul>
        {displayedNews.map((item: NewsItem) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="news-content">
              <p className="section">{item.section}</p>
              <h3>{item.title}</h3>
              <p>
                Por {item.autor} - {formatDate(item.date)}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {/* Con este botón se cambia el estado showAll */}
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
};

export default NewsList;
