import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Beginner from "../Parts/Beginner";
import Intermediate from "../Parts/Intermediate";

export const Home = () => {
  return (
    <div>
      <Beginner/>
      <Intermediate/>
    </div>
  );
};
