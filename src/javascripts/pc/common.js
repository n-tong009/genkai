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
  // console.log(this);
  if($this.hasClass('active')){
    $this.removeClass('active').parents('.nav').removeClass('active');
  } else {
    $this.addClass('active').parents('.nav').addClass('active');
  }
}
/**
 * ナビクローズ
 * @module navClose
 */
function navClose(){
  let $this = $(this);
  $this.parents('.nav').removeClass('active').find('.nav_btnItem').removeClass('active');
}


new CommonBody();