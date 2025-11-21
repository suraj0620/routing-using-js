import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Home Page</h1>
      <p>This is the Home page.</p>

      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
}
