import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    /*Page doesn't exist*/
    <div>
      <div>The page you're looking for doesn't exist</div>
      <div>Go back to home Page</div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
