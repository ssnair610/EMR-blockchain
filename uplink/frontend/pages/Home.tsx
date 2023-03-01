// Home Page React Component


import * as React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/login">About page</Link>
    </div>
  );
}
