import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../context/StateContext';

const GOOGLE_MAP_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
// const extractAddress = (place) => {
//   const address = {
//     city: '',
//     state: '',
//     zip: '',
//     country: '',
//     plain() {
//       const city = this.city ? `${this.city}, ` : '';
//       const zip = this.zip ? `${this.zip}, ` : '';
//       const state = this.state ? `${this.state}, ` : '';
//       return city + zip + state + this.country;
//     },
//   };

//   if (!Array.isArray(place?.address_components)) {
//     return address;
//   }

//   place.address_components.forEach((component) => {
//     const { types } = component;
//     const value = component.long_name;

//     if (types.includes('locality')) {
//       address.city = value;
//     }

//     if (types.includes('administrative_area_level_2')) {
//       address.state = value;
//     }

//     if (types.includes('postal_code')) {
//       address.zip = value;
//     }

//     if (types.includes('country')) {
//       address.country = value;
//     }
//   });

//   return address;
// };

const Search = (setTypedLocation) => {
  const { userAddress, setTypeAddress, typeAddress } = useStateContext();
  const [Address, setAddress] = useState(null);
  const [buttonText, setBulltonText] = useState('Search');
  const [Success, setSuccess] = useState('Search');
  const [Error, setError] = useState('Search');
  const driveAddress = (location) => {
    const g = location.geometry;
    const l = g.location;
    setTypeAddress(l);
    return l;
  };
  const resetForm = () => {
    setAddress(null);
    setBulltonText('Search');
  };
  useEffect(() => {
    Error ? resetForm() : null;
  }, [Error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`.........is number......${Address.isNaN}`);
    setBulltonText('Sending...');
    const url = `${GOOGLE_MAP_API_URL}?address=${Address}&sensor=true&key=AIzaSyCumu5B8e6vcRoLhKw1bpWxODsy2YiUtEk&latlng`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((location) => {
        const place = location.results[0];
        const drivedlocation = driveAddress(place);
        [(setSuccess(true), resetForm())];
      })
      .catch((et) => {
        setError(true);
        window.alert(`${Address} Location not found`);
        console.log(`Message not sent${et}`);
      });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="pokemon-form">
      <div className="bg-black h-16 flex justify-end flex-center ">
        <div className="  text-gray-600 flex m-2 ">
          <input
            onChange={(e) => setAddress(e.target.value)}
            className="  bg-white  px-5 pr-8 w-60 text-sm focus:outline-none appearance-none"
            type="search"
            name="search"
            placeholder="Enter your city or ZIP code"
          />
          <button type="submit" className=" bg-red-600   ">
            <div className="text-white px-5">{buttonText}</div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
