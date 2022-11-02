import { useState, useEffect } from 'react';

const GOOGLE_MAP_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
const extractAddress = (place) => {
  const address = {
    city: '',
    state: '',
    zip: '',
    country: '',
    plain() {
      const city = this.city ? `${this.city}, ` : '';
      const zip = this.zip ? `${this.zip}, ` : '';
      const state = this.state ? `${this.state}, ` : '';
      return city + zip + state + this.country;
    },
  };

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach((component) => {
    const { types } = component;
    const value = component.long_name;

    if (types.includes('locality')) {
      address.city = value;
    }

    if (types.includes('administrative_area_level_2')) {
      address.state = value;
    }

    if (types.includes('postal_code')) {
      address.zip = value;
    }

    if (types.includes('country')) {
      address.country = value;
    }
  });

  return address;
};

const useGeoLocation = () => {
  const [address, setAddress] = useState({});
  const [locations, setLocation] = useState({
    loaded: false,
    coordinates: { lat: '', lng: '' },
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };
  const reverseGeocode = ({ Llocations }) => {
    const url = `${GOOGLE_MAP_API_URL}?key=AIzaSyCumu5B8e6vcRoLhKw1bpWxODsy2YiUtEk&latlng=${Llocations.coordinates.lat},${Llocations.coordinates.lng}`;

    fetch(url)
      .then((response) => response.json())
      .then((location) => {
        const place = location.results[0];
        const Address = extractAddress(place);
        setAddress(Address);
      });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    reverseGeocode(locations);
  }, [address]);

  return address;
};

export default useGeoLocation;
