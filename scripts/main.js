class Main {
  constructor() {
    this.heroSlider = new HeroSlider('.swiper');
    this.sidewaysSlider = new SidewaysSlider('.sidewaysSlider')

    this._observers = [];
    this._init();
  }

  _init() {
    this._scrollInit();
  }

  destroy() {
    this._observers.forEach(so => so.destroy());
  };

  _scrollInit() {
    this._observers.push(
      new ScrollObserver('.swiper', this._toggleSlideAnimeCB.bind(this), { once: false }),
      new ScrollObserver('.sidewaysSlider', this._toggleSlideAnimeCB.bind(this), { once: false }),
    )
  }

  _toggleSlideAnimeCB(el, isIntersecting) {
    if (isIntersecting) {
      this.heroSlider.autoStart();
    } else {
      this.heroSlider.autoStop();
    }    
  }
}

new Main;