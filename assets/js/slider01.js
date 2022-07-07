var app = new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
            {
                headlineFirstLine: "DOMOTICA AL ALCANCE DE TODOS",
                headlineSecondLine: "",
                sublineFirstLine: "Soluciones en automatización ",
                sublineSecondLine: "Casas inteligentes",
                sublineSecondLine: "luces inteligentes",
                bgImg: "assets/img/iluminacion-inteligente-en-casa.jpg",
                rectImg: "assets/img/iluminacion-inteligente-en-casa.jpg"
            },
            {
                headlineFirstLine: "Nos adecuamos a los sistemas que ya tengas",
                headlineSecondLine: "",
                sublineFirstLine: "Instalación en pocos pasos",
                sublineSecondLine: "Hardware y software propios",
                bgImg: "assets/img/inteligencia-casa.jpg",
                rectImg: "assets/img/inteligencia-casa.jpg"
            },
            {
                headlineFirstLine: "Ecosistemas  inteligentes ",
                headlineSecondLine: "",
                sublineFirstLine: "automatizaciones y escenas",
                bgImg: "assets/img/casas-inteligentes.jpg",
                rectImg: "assets/img/casas-inteligentes.jpg"
            }
        ]
    },
  mounted: function () {
    var productRotatorSlide = document.getElementById("app");
        var startX = 0;
        var endX = 0;

        productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchend", function(event) {
            var threshold = startX - endX;

            if (threshold < 150 && 0 < this.currentSlide) {
                this.currentSlide--;
            }
            if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            }
        }.bind(this));
  },
    methods: {
        updateSlide(index) {
            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
            this.currentSlide = index;
            this.isFirstLoad = false;
        }
    }
})