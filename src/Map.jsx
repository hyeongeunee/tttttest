import React, { useEffect } from 'react';

function Map({ selectedItems }) {
    useEffect(() => {
        const container = document.getElementById('map');
        const { kakao } = window;

        const options = {
            center: new kakao.maps.LatLng(37.4987464, 127.03169),
            level: 9,
        };
        const map = new kakao.maps.Map(container, options);

        var positions = [];

        for (var i = 0; i < selectedItems.length; i++) {
            var position = {
                title: selectedItems[i].title,
                latlng: new kakao.maps.LatLng(selectedItems[i].mapy, selectedItems[i].mapx),
            };
            positions.push(position);
        }

        var imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/2018/pc/img/marker_spot.png';

        for (var k = 0; k < positions.length; k++) {
            var imageSize = new kakao.maps.Size(24, 35);
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            var marker = new kakao.maps.Marker({
                map: map,
                position: positions[k].latlng,
                title: positions[k].title,
                image: markerImage,
            });

            // 인포윈도우를 생성하고 클로저를 사용하여 마커의 정보를 유지합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: `<div style="padding: 5px;">${positions[k].title}</div>`,
            });

            // 마커에 마우스오버 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));

            // 마커에 마우스아웃 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        }
    }, [selectedItems]);

    // 인포윈도우를 표시하는 클로저를 반환하는 함수
    function makeOverListener(map, marker, infowindow) {
        return function () {
            infowindow.open(map, marker);
        };
    }

    // 인포윈도우를 닫는 클로저를 반환하는 함수
    function makeOutListener(infowindow) {
        return function () {
            infowindow.close();
        };
    }

    return (
        <div
            id="map"
            style={{
                width: '100%',
                height: '900px',
            }}
        ></div>
    );
}

export default Map;
