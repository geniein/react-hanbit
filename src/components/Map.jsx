import { useEffect, useRef } from "react";

function Map() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !window.naver?.maps) return;

    const center = new window.naver.maps.LatLng(36.79101398116109, 127.12604377302911);
    const map = new window.naver.maps.Map("map", {
      center,
      zoom: 17,
      minZoom: 15,
      tileDuration: 300,
      baseTileOpacity: 1,
      background: "white",
      tileSpare: 7,
    });

    new window.naver.maps.Marker({ position: center, map });
    initialized.current = true;
  }, []);

  return <div id="map" className="h-full w-full rounded-[2rem]" />;
}

export default Map;
