const images_eName=[
  "GANGNEUNG",
  "GYEONGJU",
  "DAEGU",
  "BUSAN",
  "SEOUL",
  "SOKCHO",
  "YEOSU",
  "YEONGWOL",
  "INCHEON",
  "JUNJU",
  "JEJU"

]



//-----------------------------------------------------------------------



const images = [
  "locimages/gangneung.jpg",
  "locimages/gyeongju.jpg",
  "locimages/daegu.jpg",
  "locimages//busan.jpg",
  "locimages//seoul.jpg",
  "locimages//sokcho.jpg",
  "locimages//yeosu.jpg",
  "locimages//Yeongwol.jpg",
  "locimages//incheon.jpg",
  "locimages//junju.jpg",
  "locimages//jeju.jpg",
 
]

// ----------------------------------------------------------------------

const images_name = [
  "강릉",
  "경주",
  "대구",
  "부산",
  "서울",
  "속초",
  "여수",
  "영월군",
  "인천",
  "전주",
  "제주"

];


// ----------------------------------------------------------------------

const TourArray = [...Array(11)].map((_, index) => {
  return {
    name: images_name[index],
    cover : images[index],
    eName : images_eName[index]
  };
});

export default TourArray;