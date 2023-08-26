import React, { useEffect } from 'react';
import { textOverCut } from './textOverCut.js';
import './Map.css';

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
                firstimage: selectedItems[i].firstimage,
            };
            positions.push(position);
        }

        var imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/2018/pc/img/marker_spot.png';

        var overlays = []; // 오버레이를 저장할 배열

        for (var k = 0; k < positions.length; k++) {
            var imageSize = new kakao.maps.Size(24, 35);
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            var marker = new kakao.maps.Marker({
                map: map,
                position: positions[k].latlng,
                title: positions[k].title,
                image: markerImage,
            });

            var content = `<div class="overlaybox">
                        <div class="boxtitle" onclick="closeOverlay(${k})">${positions[k].title}</div>
                        <div class="first">
                            <img src="${
                                positions[k].firstimage
                            }" alt="tour Image" style="width: 100%; height: 100%; object-fit: cover;">
                            <div class="triangle text">${k + 1}</div>
                            <div class="addr text">${selectedItems[k].addr1}</div>
                        </div>
                        <span class="title">${textOverCut(selectedItems[k].overview, 105, ' ... ')}</span>
                    </div>`;

            var overlay = new kakao.maps.CustomOverlay({
                position: positions[k].latlng,
                content: content,
                xAnchor: 0.3,
                yAnchor: 0.91,
            });

            overlays.push(overlay); // 오버레이 배열에 추가

            kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, overlay));
            kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(overlay));
            kakao.maps.event.addListener(marker, 'click', makeClickListener(overlay));
        }

        function makeOverListener(map, marker, overlay) {
            return function () {
                overlay.setMap(map);
            };
        }

        function makeOutListener(overlay) {
            return function () {
                overlay.setMap(null);
            };
        }

        function makeClickListener(overlay) {
            return function () {
                overlay.setMap(map);
            };
        }

        // 오버레이를 닫기 위한 함수
        window.closeOverlay = function (index) {
            overlays[index].setMap(null);
        };
    }, [selectedItems]);

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
