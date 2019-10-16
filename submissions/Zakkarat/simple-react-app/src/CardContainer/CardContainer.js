import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import "../CardContainer/CardContainer.css";
import axios from "axios";
const CardContainer = props => {
  const defaultUrl = "https://rickandmortyapi.com/api/character/?page=1";
  const [data, setData] = useState({ results: [] });
  const [page, setPage] = useState({
    next: "",
    prev: "",
    curr: defaultUrl
  });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (props.filters) {
      setPage({ curr: props.filters });
    } else {
      setPage({ curr: defaultUrl });
    }
  }, [props.filters]);

  useEffect(() => {
    setIsLoading(true);
    let ignore = false;
    const fetchData = async () => {
      const result = await axios(`${page.curr}`).catch(() => {
        return null;
      });
      if (!ignore && result) {
        setData(result.data);
        setPage(result.data.info);
      }
    };

    fetchData();
    setIsLoading(false);
    return () => {
      ignore = true;
    };
  }, [page.curr]);

  const handleClick = newPage => {
    setPage({ curr: newPage });
  };
  return isLoading ? (
    <div class="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  ) : (
    <>
      <div className="card-container">
        {data.results.map(character => (
          <Card
            key={character.id}
            name={character.name}
            gender={character.gender}
            status={character.status}
            species={character.species}
            image={character.image}
          />
        ))}
      </div>
      <Pagination handleClick={handleClick} prev={page.prev} next={page.next} />
    </>
  );
};

export default CardContainer;
