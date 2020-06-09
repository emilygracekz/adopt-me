import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA');
    const [animal, AnimalDropdown] = useDropdown('Animal', 'Dogs', ANIMALS);
    const [breeds, setBreeds] = useState([]);
    const [breed, BreedDropdown] = useDropdown('Breed', '', breeds);

    return (
      <div className="search-params">
        <forms>
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
        </forms>
      </div>
    );
}

export default SearchParams;