import axios from "axios";

export const api = axios.create();

export const searchNamePath = "https://pokeapi.co/api/v2/pokemon";
export const searchTypePath = "https://pokeapi.co/api/v2/type";
