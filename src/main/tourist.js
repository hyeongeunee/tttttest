const images = [
    'http://localhost:3000/img/locimages/gangneung.jpg',
    'http://localhost:3000/img/locimages/gyeongju.jpg',
    'http://localhost:3000/img/locimages/daegu.jpg',
    'http://localhost:3000/img/locimages//busan.jpg',
    'http://localhost:3000/img/locimages//seoul.jpg',
    'http://localhost:3000/img/locimages//sokcho.jpg',
    'http://localhost:3000/img/locimages//yeosu.jpg',
    'http://localhost:3000/img/locimages//Yeongwol.jpg',
    'http://localhost:3000/img/locimages//incheon.jpg',
    'http://localhost:3000/img/locimages//junju.jpg',
    'http://localhost:3000/img/locimages//jeju.jpg',
];

// ----------------------------------------------------------------------

const images_name = ['강릉', '경주', '대구', '부산', '서울', '속초', '여수', '영월군', '인천', '전주', '제주'];

// ----------------------------------------------------------------------

const tourist = [...Array(11)].map((_, index) => {
    return {
        name: images_name[index],
        cover: images[index],
    };
});

export default tourist;
