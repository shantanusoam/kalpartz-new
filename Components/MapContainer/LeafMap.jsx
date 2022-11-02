import React, { useEffect, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
// import { geosearch } from 'esri-leaflet-geocoder';
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
// import 'leaflet-defaulticon-compatibility';
// import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  // ZoomControl,
  Polyline,
} from 'react-leaflet';
import { Browser, Icon } from 'leaflet';
import { RiPhoneFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import Link from 'next/link.js';
import { statesData } from './GeoData.js';
import { useStateContext } from '../../context/StateContext';
import NearestLocation from '../../function/NearestLocation';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import { toTitleCase } from '../../HelpFunctions/toTitlecase';

// function style(feature) {
//   return {
//     fillColor: '#ED1C24',
//     weight: 0.6,
//     opacity: 1,
//     color: 'white',
//     dashArray: '0',
//     fillOpacity: 0,
//   };
// }
const MapInside = styled.div`
  flex: 3;
  width: 100%;

  zindex: 8;
  @media screen and (max-width: 768px) {
    height: 40% !important;
  }
`;
const limeOptions = { color: 'lime' };
const covidIcon = new Icon({
  iconUrl:
    'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/4622c2c6940e5fc26a7eb95e48f3c42a7855014e/Assets/Images/iconMapMarker.svg',
  iconSize: [25, 25],
});
const userIcon = new Icon({
  iconUrl:
    'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/478d02cff59c0d7439d979755f5172ea0a32fc9b/Assets/Images/userIcon.svg',
  iconSize: [25, 25],
});
const LeafMap = ({ Data, Data2, SData, location }) => {
  const isDesktop = useMediaQuery('(min-width:1148px)');
  const { typeAddress, Currentlatlong } = useStateContext();
  // console.log(
  //   `changes in location inside the fetch from the context api${
  //     Currentlatlong
  //       ? [Currentlatlong.latitude, Currentlatlong.longitude]
  //       : null
  //   }`
  // );
  const mapRef = React.useRef(null);
  const [maps, setMaps] = useState(null);

  const [polyline, setpolyline] = useState(null);
  const [currentPopup, setcurrentPopup] = useState(null);
  const [office, setoffice] = useState(null);
  let nearestlocationData = null;
  const Polylines = [];
  const DataS = [...Data, ...Data2];
  const [officeListss, setofficeListss] = useState(DataS);
  // console.log(`..........${officeListss[0]}`);
  console.log(`...........${location}`);
  // function handleOnSerchResults(data) {
  //   console.log('serch Results', data);
  // }
  useEffect(() => {
    if (maps) {
      setTimeout(() => {
        maps.flyTo(typeAddress || [40.8054, -99.0241], 9, {
          duration: 1,
        });
        // setTimeout(() => {
        //   maps.flyTo([40.8054, -99.0241], 9, {
        //     duration: 1,
        //   });
        // }, 2000);
        setTimeout(() => {
          maps.flyTo(nearestlocationData.geometry.coordinates, 9, {
            duration: 2,
          });
        }, 2000);
      }, 1000);
    }

    // console.log(`from inside the laef an  d using context ${typeAddress}`);
    if (typeAddress) {
      nearestlocationData = NearestLocation(typeAddress);
      console.log(`lol location${nearestlocationData.geometry.coordinates}`);
      Polylines.push(nearestlocationData.geometry.coordinates);
      const Adress = [typeAddress.lat, typeAddress.lng];
      Polylines.push(Adress);
      const ass = [Polylines];
      console.log(ass);
      setpolyline(ass);
      console.log(`polyyyyyline${Polylines}`);
    }
  }, [typeAddress]);
  useEffect(() => {
    // const control = geosearch();
    // control.addTo(MapContainer);
    // control.on('results', handleOnSerchResults);

    // console.log(`...........${maps}`);
    // if(office){
    //   Data.filter
    // }
    if (location) {
      const officeA = officeListss.filter(
        (off) => off.geometry.coordinates === location
      );
      // console.log(
      //   `popuop click in use effect ${officeA[0]}`
      // );
      setoffice(officeA[0]);
    }
    if (maps) {
      setTimeout(() => {
        maps.flyTo(location || [40.8054, -99.0241], isDesktop ? 5 : 4, {
          duration: 1,
        });
      }, 1000);
    }
    // return () => {
    //   control.off('results', handleOnSerchResults);
    // };
  }, [location, maps]);
  useEffect(() => {
    const query = window.location.search;
    const target = query.split('=')[1];
    if (window.location.search) {
      console.log(`lool${target}`);
      const element = document.getElementById(target);
      const headerOffset = 117;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);
  const router = useRouter();
  function scrollToTargetAdjusted(target) {
    if (window.location.pathname === '/') {
      router.push({ pathname: '/locations', query: { scroll: target } });
      return;
    }
    console.log(`lool${target}`);
    const element = document.getElementById(target);
    const headerOffset = 117;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  return (
    <MapInside id="map">
      <MapContainer
        ref={setMaps}
        dragging={!Browser.mobile}
        // whenCreated={(map) => setMaps(map)}
        center={[40.8054, -99.0241]}
        zoom={isDesktop ? 5 : 4}
        ZoomControl={false}
        scrollWheelZoom={false}
        className="lg:h-mapheightFull h-mapheightMob"
        style={{ width: '100%' }}
      >
        {polyline ? (
          <Polyline pathOptions={limeOptions} positions={polyline} />
        ) : null}
        <TileLayer
          url={`
       https://api.mapbox.com/styles/v1/ssoam/cl77qs9yq000c14uk4kv9ecog/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic3NvYW0iLCJhIjoiY2w3N3J5ZTgyMDJwZzNwb3gzYWtxdWttciJ9.g2IBgPyHpz_bDNTAe3g2fw`}
          // attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        {/* <ZoomControl position="bottomright" zoomInText="+" zoomOutText="-" /> */}
        {statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);

          return (
            <Polygon
              key={state.id}
              pathOptions={{
                fillColor: '#ED1C24',
                weight: 0.6,
                opacity: 1,
                color: 'white',
                dashArray: '0',
                fillOpacity: 0,
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillColor: '#ED1C24',
                    weight: 0.6,
                    opacity: 1,

                    color: 'white',
                    dashArray: '0',
                    fillOpacity: 0.4,
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillColor: '#ED1C24',
                    weight: 0.6,
                    opacity: 1,
                    color: 'white',
                    dashArray: '0',
                    fillOpacity: 0,
                  });
                },
                // click: (e) => {},
              }}
            />
          );
        })}
        {/* {statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);

          return (
            <p
              positions={coordinates}
              key={state.id}
              className="text-2xl text-green-400 text-center z-30"
            >
              {state.properties.name}
            </p>
          );
        })} */}
        {officeListss.map((eachData) => (
          <Marker
            animate
            key={eachData.id}
            position={eachData.geometry.coordinates}
            eventHandlers={{
              click: () => {
                setcurrentPopup(null);
                setoffice(eachData);
              },
              hover: () => {
                setoffice(eachData);
              },
            }}
            icon={covidIcon}
          />
        ))}
        {typeAddress ? (
          <Marker
            animate
            position={typeAddress}
            eventHandlers={{
              click: () => {
                setcurrentPopup({
                  coordinates: [typeAddress],
                  text: 'this is your Location',
                });
              },
              // hover: () => {
              //   setoffice(eachData);
              // },
            }}
            icon={userIcon}
          />
        ) : null}
        {Currentlatlong ? (
          <Marker
            animate
            position={[Currentlatlong.latitude, Currentlatlong.longitude]}
            eventHandlers={{
              click: () => {
                setcurrentPopup({
                  coordinates: [
                    Currentlatlong.latitude,
                    Currentlatlong.longitude,
                  ],
                  text: 'this is your Location',
                });
              },
              // hover: () => {
              //   setoffice(eachData);
              // },
            }}
            icon={userIcon}
          />
        ) : null}

        {office && (
          <Popup
            position={[
              office.geometry.coordinates[0],
              office.geometry.coordinates[1],
            ]}
            onClose={() => {
              setoffice(null);
            }}
          >
            <div>
              <h2 className="font-bold text-lg">{office.properties.City}</h2>
              {office.properties.Address ? (
                <div>
                  <div className="text-sm mb-2">
                    {office.properties.Address}, {office.properties.City},{' '}
                    {office.properties.State} {office.properties.ZipCode}
                  </div>
                  {office.properties.Phone ? (
                    <>
                      <div className="text-sm mb-2 flex flex-row">
                        <span>
                          <RiPhoneFill className="text-md m-1" />
                        </span>
                        {office.properties.Phone}
                      </div>
                      <div className="text-sm mb-2 flex flex-row">
                        <span>
                          <MdEmail className="text-md m-1" />
                        </span>
                        <a href="/">{office.properties.Email}</a>
                      </div>
                      <div className="text-sm mb-2 flex flex-row">
                        <span>
                          <BsArrowRightCircleFill className="text-md m-1" />
                        </span>
                        <div
                          className="cursor-pointer text-blue-400"
                          onClick={() => {
                            scrollToTargetAdjusted(office.properties.ZipCode);
                          }}
                          // href={`/locations#${office.properties.ZipCode}`}
                        >
                          See More
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              ) : (
                <div className="text-sm mt-2">Coming soon</div>
              )}
            </div>
          </Popup>
        )}
        {currentPopup && (
          <Popup
            position={
              currentPopup.lat
                ? [currentPopup.lat, currentPopup.lng]
                : [currentPopup.coordinates[0], currentPopup.coordinates[1]]
            }
            onClose={() => {
              setoffice(null);
            }}
          >
            <div>{currentPopup.text}</div>
          </Popup>
        )}
      </MapContainer>
    </MapInside>
  );
};

export default LeafMap;
