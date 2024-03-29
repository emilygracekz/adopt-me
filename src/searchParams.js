import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA');
    const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
    const [breeds, setBreeds] = useState([]);
    const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

    useEffect(() => {
        setBreeds([]);
        setBreed('');

        pet.breeds(animal).then(({ breeds }) => {
            const breedStrings = breeds.map(({ name }) => name);
                setBreeds(breedStrings);
        }, console.error);
    }, [animal, setBreed, setBreeds]);

    return (
      <div className="search-params">
        <form>
          <label htmlFor="Location">
            Location
            <input
              id="Location"
              value={location}
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
            <button>Submit</button>
          </label>
          <AnimalDropdown />
          <BreedDropdown />
        </form>
      </div>
    );
}

export default SearchParams;