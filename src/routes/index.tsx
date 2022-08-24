import { Route, Routes as RouteRRD } from "react-router-dom";

import Home from "pages/Home";
import PokemonDetails from "pages/PokemonDetails";
import SearchName from "pages/SearchName";
import SearchType from "pages/SearchType";

const Routes = () => {
  return (
    <RouteRRD>
      <Route path="/" element={<Home />} />
      <Route path="/search-name" element={<SearchName />} />
      <Route path="/search-type" element={<SearchType />} />
      <Route path="/pokemon-details/:id" element={<PokemonDetails />} />
    </RouteRRD>
  );
};
export default Routes;
