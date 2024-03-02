class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }
  _initSwiper() {
    return new Swiper(this.el, {
      effect: 'coverflow',
      loop: true,
      speed: 1500,
      slidesPerView: 1,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        }
      }, 
      centeredSlides: true,
    });
  }

  // 引数にオブジェクトを代入することで
  // パラメータの書き換えができるように改造
  // 表示時間を調整する。
  autoStart(options = {}) {
    options = Object.assign({
      delay: 8000
    }, options);
    this.swiper.params.autoplay = options;
    // start()関数は組み込み。
    this.swiper.autoplay.start();
  }
  autoStop() {
    this.swiper.autoplay.stop();
  }
}

class SidewaysSlider extends HeroSlider {
  constructor(el) {
    super(el);
    // スーパークラスのコンストラクターを呼び出しています
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      effect: 'fade', // 'fade' に変更
      loop: true,
      speed: 1500,
      slidesPerView: 1, // slidesPerView を1に変更
      breakpoints: {
        1024: {
          slidesPerView: 1, // 1024px以上でも1に変更
        }
      }, 
      centeredSlides: true,
    });
  }
}


// org
// class SidewaysSlider extends HeroSlider {
//   constructor(swiper) {
//     super(swiper);
//     this.swiper = this._initSwiper();
//   }
//   _initSwiper() {
//     return new Swiper(this.el, {
//       effect: 'fade',
//       loop: true,
//       speed: 1500,
//       slidesPerView: 1,
//       breakpoints: {
//         1024: {
//             slidesPerView: 1,
//         }
//       }, 
//       centeredSlides: true,
//     });    
//   }
// }