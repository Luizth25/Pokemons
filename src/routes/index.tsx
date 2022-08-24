import { Route, Routes as RouteRRD, Navigate } from "react-router-dom";

import Home from "pages/Home";
import PokemonDetails from "pages/PokemonDetails";
import SearchName from "pages/SearchName";
import SearchType from "pages/SearchType";

const Routes = () => {
  return (
    <RouteRRD>
      <Route index element={<Home />} />
      <Route path="/search-name" element={<SearchName />} />
      <Route path="/search-type" element={<SearchType />} />
      <Route path="/pokemon-details/:id" element={<PokemonDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </RouteRRD>
  );
};

export default Routes;
