import {TweenMax,TimelineMax} from "gsap";
class CommonBody {

  constructor() {
    this.common();
  }

  common() {
    $('.nav_btnItem').on('click', navAction)
    $('.nav_bg').on('click', navClose)
    return console.log('Common');
  }

}


// ファンクションまとめ
// ---------------------------------------------------------

/**
 * ナビアクション
 * @module navAction
 */
function navAction(){
  let $this = $(this);
  let $sectionNav = $('#section-nav');
  let $body = $('body');
  let tl = new TimelineMax();
  if($this.hasClass('active')){
    tl.to($sectionNav, 1.6, {
      onStart : function(){
        $body.css('overflow','visible');
        $this.removeClass('active').parents('.nav').removeClass('active');
      },
      delay : 0,
      onComplete : function(){
        // 1フレームずらず
        window.requestAnimationFrame(() => {
          tl.to($section_loading, 0.5,{
            "position": "absolute",
          });
        });
      }
    });
  } else {
    $body.css('overflow','hidden');
    $sectionNav.css('position','fixed');
    $this.addClass('active').parents('.nav').addClass('active');
  }
}
/**
 * ナビクローズ
 * @module navClose
 */
function navClose(){
  let $this = $(this);
  let $sectionNav = $('#section-nav');
  let $body = $('body');
  let tl = new TimelineMax();
  

  tl.to($sectionNav, 1.6, {
    onStart : function(){
      $body.css('overflow','visible');
      $this.parents('.nav').removeClass('active').find('.nav_btnItem').removeClass('active');
    },
    delay : 0,
    onComplete : function(){
      // 1フレームずらず
      window.requestAnimationFrame(() => {
        tl.to($section_loading, 0.5,{
          "position": "absolute",
        });
      });
    }
  });
}


new CommonBody();