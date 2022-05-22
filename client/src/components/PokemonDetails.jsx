import React from 'react';
import LegendaryBadge from '../assets/legendary.png';

export const PokemonDetails = ({ data }) => {
  const { name, description, is_legendary, sprites, type } = data;
  const pokemonType = is_legendary ? 'name legendary' : `name ${type}`;
  return (
    Object.keys(data).length > 0 && (
      <div className="details-container">
        <div className="header">
          {name && <h3 className={pokemonType}>{name}</h3>}
          {is_legendary && (
            <img
              className="pokemon-badge"
              src={LegendaryBadge}
              alt="Legendary Badge"
            />
          )}
        </div>
        <div>{description && <p className="description">{description}</p>}</div>
        <div>
          <img
            className="pokemon-img"
            src={sprites?.front_default}
            alt="Logo"
          />
        </div>
      </div>
    )
  );
};
