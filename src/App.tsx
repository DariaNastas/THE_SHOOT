import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="logo">
          THE <span className="highlight">SHOOT</span>
        </div>
        <nav>
          <ul className="menu">
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">TALENTS</a>
            </li>
            <li>
              <button className="button-orange">I'm photographer</button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <h1>THE SHOOT</h1>
        <p className="description">
          Discover and connect with professional photographers effortlessly.
          Browse portfolios, filter by specialty, location, and style, and find
          your perfect match.
        </p>
        <div className="search">
          <input
            type="text"
            placeholder="Enter city or photographer name or category"
          />
          <button>Search</button>
        </div>

        <div className="categories">
          <button className="tag active">All</button>
          <button className="tag">Nature & Wildlife</button>
          <button className="tag">Event</button>
          <button className="tag">Portrait</button>
          <button className="tag">Videography</button>
          <button className="tag">Commercial</button>
          <button className="tag">Special effects & Experimental</button>
          <button className="tag">Pet Photography</button>
          <button className="tag">Boudoir & Glamour</button>
        </div>

        <div className="gallery">
          <div className="image-card">
            <img src="https://images.unsplash.com/photo-1" alt="photo1" />
            <p>Alex Shevchenko</p>
          </div>
          <div className="image-card">
            <img src="https://images.unsplash.com/photo-2" alt="photo2" />
            <p>Yuki Nakamura</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
