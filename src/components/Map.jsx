import { useEffect, useRef } from "react";

function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const naverMap = window.naver;

    if (!naverMap || mapRef.current) {
      return;
    }

    const center = new naverMap.maps.LatLng(36.79101398116109, 127.12604377302911);
    const map = new naverMap.maps.Map("map", {
      center,
      zoom: 17,
      minZoom: 15,
      tileDuration: 300,
      baseTileOpacity: 1,
      background: "white",
      tileSpare: 7,
    });

    const marker = new naverMap.maps.Marker({
      position: center,
    });

    marker.setMap(map);
    mapRef.current = map;
  }, []);

  return <div id="map" className="h-full w-full" />;
}

export default Map;
