export default function List({ episodes, setSelectedEpisode }) {
  return (
    <div className="episodes">
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
            <h3>{episode.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
