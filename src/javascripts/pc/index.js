import {TweenMax,TimelineMax} from "gsap";
import {scrollbarWidth} from "./scrollbarWidth";
import {getParam} from "../../common/scripts/javascript/common";
class Index {

  constructor() {
    if (Common.getName('Index')) {
      this.index();
    }
  }

  index() {
    const $window = $(window);
    const $document = $(document);
    let tl = new TimelineMax();
    let scrollbarW = new scrollbarWidth();
    let param = new getParam();
    let sbW = scrollbarW.scrollbarWidth + "px";
    const $body= $('body');
    const $section_loading = $('#section-loading');

    console.log(param);
    
    if(param.length === 0){
      console.log(true);
      $body.css({"padding-right" : sbW,"overflow" : "hidden"}).find($section_loading).css("padding-right", sbW);
      loadedAnimation();
    } else {
      console.log(false);
      $section_loading.css({"display" : "none"});
    }

    $('.js-slick').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1500,
      fade: true,
      arrows: false,
    });


    return console.log('Index');
  }

}

// ファンクションまとめ
// ---------------------------------------------------------

/**
 * ローディングアニメーション
 * @module loadedAnimation
 */
function loadedAnimation() {
  let tl = new TimelineMax();
  const $body= $('body');
  const $section_loading = $('#section-loading');

  tl.to($section_loading, 1.6, {
    onStart : function(){
      $section_loading.addClass('active');
    },
    delay : 0,
    onComplete : function(){
      // 1フレームずらず
      window.requestAnimationFrame(() => {
        tl.to($section_loading, 0.5,{
          "opacity": 0,
        }).set($section_loading, {
          "visibility": "hidden",
          "pointer-events": "none",
          onComplete : function(){
            $body.css({"padding-right" : "0", "overflow" : "visible"});
          }
        });
      });
    }
  });

}

new Index();