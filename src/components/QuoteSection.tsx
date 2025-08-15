import { FaQuoteLeft } from "react-icons/fa";

export default function Quote() {
  return (
    <div className="section quote">
      <p className="quote-text">
        <FaQuoteLeft /> I'm hungry.
      </p>
      <p className="quote-author">- Anthony</p>
    </div>
  );
}
