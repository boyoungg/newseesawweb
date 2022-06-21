var toggle = false;
var handle = null;

window.onload = function(){

    var clickBtn = document.getElementById("click_Img");
    var gifImage = document.getElementById("Gif_img");

    const saTriggerMargin = 100;
    const saElementList = document.querySelectorAll('.scroll');


    //setinterval
    var toggle = false;
    var colorBtn = null;

    startInterval();

    function startInterval(){
      if(colorBtn==null){
        colorBtn=setInterval(function(){
              toggleBg();
          }, 1500);
      }
    }

    function stopInterval(){
      clearInterval(colorBtn);
      colorBtn=null;
    }

    function toggleBg(){
      if(toggle){
          var div = document.getElementById('toggle');
          div.style.background='#ff8a60';
          div.style.transition='1s';
      }else{
          var div = document.getElementById('toggle');
          div.style.background='#d8f483';
          div.style.transition='1s';
      }
      toggle =!toggle;
    }


    //click하면 위 이미지 없어지고 gif 이미지 보임, 
    clickBtn.onclick = function(){
        // console.log("버튼눌림");
        clickBtn.style.display = "none";
        gifImage.classList.add('show');
    };

    //스크롤 모션
    const saFunc = function() {
      for (const element of saElementList) {
        if (!element.classList.contains('showScroll')) {
          if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
            element.classList.add('showScroll');
          }
        }
      }
    }
      
    window.addEventListener('load', saFunc);
    window.addEventListener('scroll', saFunc);  
    
  
};

$(document).ready(function () {

  //막대그래프
  $('#bar-7').jqbar({ label: '20대', value: 39.6, barColor: '#fbc24c', orientation: 'v' });
  $('#bar-8').jqbar({ label: '30대', barColor: '#fbc24c', value: 44.5, orientation: 'v' });
  $('#bar-9').jqbar({ label: '40대', barColor: '#fbc24c', value: 65.3, orientation: 'v' });
  $('#bar-10').jqbar({ label: '50대', barColor: '#ff8a60', value: 72.2, orientation: 'v' });


  //이미지갤러리
  $('.slick_gallery').slick({
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    dots: true,
    autoplay: true,
    infinite: true,
  });

  //탑버튼
  $("#scrollTop").click(function(){
    console.log("click");
    $("html, body").animate({scrollTop: 0}, 2000);
  });
});


