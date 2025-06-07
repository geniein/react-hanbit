import { useEffect } from "react";

function Map() {

    //클릭한 위치의 위도는 36.79101398116109 이고, 경도는 127.12604377302911 입니다
    let map
    let mapOption = {
        center: new naver.maps.LatLng(36.79101398116109, 127.12604377302911),
        zoom: 17,
        minZoom: 15,
        tileDuration: 300,
        // 확대 시 타일 변경되는 시간
        baseTileOpacity: 1,
        // 타일 투명도 ( 투명도 낮추면 배경 색이 보임 )
        background: 'white',
        //배경 색
        tileSpare: 7,
        //화면 바깥 여분 타일 개수
    };

    useEffect(() => {
        if (!map) {
            map = new naver.maps.Map('map', mapOption);
            var marker = new naver.maps.Marker({ 
                position: map.getCenter() 
            }); 
            marker.setMap(map);
            // naver.maps.event.addListener(map, 'click', function(mouseEvent) {        
            //     var latlng = mouseEvent.latLng;
            //     marker.setPosition(latlng);
            // });
        }
    }, []);


    return (
        <div id="map" className="w-full h-full">
        </div>
    );
}

export default Map;