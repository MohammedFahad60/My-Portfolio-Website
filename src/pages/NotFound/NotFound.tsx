import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return <main className="not-found"><span>404</span><h1>PAGE NOT FOUND</h1><p>The requested page does not exist.</p><Link to="/" className="button-primary">BACK HOME ↗</Link></main>;
}