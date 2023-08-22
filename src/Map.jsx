import { useEffect } from 'react';
import output from './finalresult.json';
const { kakao } = window;

function Map() {
    useEffect(() => {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
            //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.4987464, 127.03169), //지도의 중심좌표.
            level: 8, //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        var positions = [];

        // for (var i = 0; i < output.length; i++) {
        //     if (output[i].areacode === 1) {
        //         var position = {
        //             title: output[i].title,
        //             latlng: new kakao.maps.LatLng(output[i].mapy, output[i].mapx),
        //         };
        //         positions.push(position);
        //     }
        // }

        // 마커 이미지의 이미지 주소입니다
        var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

        for (var k = 0; k < positions.length; k++) {
            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new kakao.maps.Size(24, 35);

            // 마커 이미지를 생성합니다
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[k].latlng, // 마커를 표시할 위치
                title: positions[k].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage, // 마커 이미지
            });
        }
    });

    return (
        <div
            id="map"
            style={{
                width: 'auto',
                height: '900px',
            }}
        ></div>
    );
}

export default Map;
