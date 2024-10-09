import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div>
        <h1>HTTP Error 404: Page Not found</h1>
        <Link to="/">Go back to Home Page</Link>
      </div>
    </>
  );
}

export default NotFound;
