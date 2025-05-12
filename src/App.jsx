import { useState } from "react";
import { episodeList } from "./data.js";

import Details from "./components/Details.jsx";
import List from "./components/List.jsx";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  return (
    <>
      <h1>Dark Echoes</h1>
      <h2>Episodes</h2>
      <p>Click on a title to see a brief description.</p>
      <section className="container">
        <List episodes={episodes} setSelectedEpisode={setSelectedEpisode} />
        <Details selectedEpisode={selectedEpisode} />
      </section>
    </>
  );
}
