// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

//видео
document.querySelector('.about_video-overlay').onclick = function(){
  this.style.display = 'none';
};

//ограничение на цифры в инпуте с именем
const inputName = document.getElementById('name');

inputName.addEventListener('keydown', (e) =>{
  if(e.key.match(/[0-9]/)) {
    return e.preventDefault();
  }
});

inputName.addEventListener('input', () =>{
  name.value = inputName.value.replace(/[0-9]/g, '');
});
