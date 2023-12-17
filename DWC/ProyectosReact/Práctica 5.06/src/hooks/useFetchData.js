import { useState, useEffect } from "react";
import { obtenerDatos } from "../biblioteca/funciones.js";

const useFetchData = (url) => {
  const valorInicialNull = null;
  const valorInicialLoading = true;
  const [data, setData] = useState(valorInicialNull);
  const [loading, setLoading] = useState(valorInicialLoading);
  const [error, setError] = useState(valorInicialNull);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await obtenerDatos(url);
        setData(responseData);
      }
      catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
