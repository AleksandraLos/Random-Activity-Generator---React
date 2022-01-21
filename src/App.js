import "./App.css";
import React from 'react';
import Activity from "./components/Activity";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("http://www.boredapi.com/api/activity/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return "Loading...";
  if (error) return "Error!";
  console.log(data);

  return (
    <div className="App">
      <h1>Random Activity Generator</h1>
      <p>
        Hejsan! Är du uttråkad? Har du inte tråkigt? Tja, jag är här för att ge
        dig en slumpmässig aktivitet att göra ensam eller med vänner, oavsett.
        Välj en antal deltagare eller gå helt slumpmässigt. Du har 3 alternativ
        att välja mellan (välj klokt eller inte).Glöm inte att jag inte är
        perfekt (skyll på personen som programmerade mig), men jag gör mitt
        bästa.
        <br />
        Nu kör vi !
      </p>
      <button>Generera aktivitet </button>
      <Activity />
    </div>
  );
}
