/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function Get() {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMove] = useState();

  async function apiGet() {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      .then((response) => {
        console.log(response.data.name);
        console.log(response.data.moves);
        setName(response.data.name);
        setMove(response.data.moves.length);
      });
  }
  useEffect(() => {
    apiGet();
  });

  const handleNum = (e) => {
    setNum(e.target.value);
  };
  return (
    <>
      <Container>
        <h2>you select this {num} pokemon.</h2>
        <h2>Pokemon name is {name}</h2>
        <h2>Pokemon are {moves} moves.</h2>
        <select value={num} onChange={handleNum}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="25">25</option>
          <option value="11 ">11</option>
          <option value="35">35</option>
        </select>
      </Container>
    </>
  );
}
