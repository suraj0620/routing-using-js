import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>This is the About page.</p>

      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
}
