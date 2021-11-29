/**
 * 一度ダミーの要素をドキュメントに差し込んでスクロールバーの幅を取得する。
 * @module getScrollbarWidth
 */
 class scrollbarWidth {
  constructor() {
    this.scrollbarWidth = this.scrollbarWidth();
  }
  scrollbarWidth() {
    let element = document.createElement('div'); //divを生成
    element.style.visibility = 'hidden'; //divを非表示
    element.style.overflow = 'scroll'; //divにスクロールバーを追記
    document.body.appendChild(element); //div(element)の要素を返す
    const scrollbarWidth = element.offsetWidth - element.clientWidth;
    //element.offsetWidthが画面幅
    //element.clientWidthがスクロールバー抜きの画面幅
    document.body.removeChild(element); //divを削除

    return scrollbarWidth;
  }
}

export {scrollbarWidth};