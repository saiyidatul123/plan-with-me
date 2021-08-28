import React, {useState} from "react";

async function searchNews(q) {
  q = encodeURIComponent(q);

  const response = await fetch(
    "https://myallies-breaking-news-v1.p.rapidapi.com/GetTopNews",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "myallies-breaking-news-v1.p.rapidapi.com",
        "x-rapidapi-key": "2a6c64b5d3msh68076e434d3ae35p1c81bcjsn9cdcd326a20f",
      },
    }
  );
  const body = await response.json();
  return body.value;
}

const News = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState(null);

  const search = (e) => {
    e.preventDefault();
    searchNews(query).then(setList);
  };
  return (
    <div>
      <form onSubmit={search}>
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      {!list ? null : (
        <ul>
          {list.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

function Item({ item }) {
    const separateWords = s => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    return (
      <li className="item">
        <h2 className="title">
          <a href={item.URL}>{item.Title}</a>
        </h2>
        <div className="meta">
          <span>{formatDate(item.Created)}</span>
        </div>
      </li>
    );
  }

export default News;
