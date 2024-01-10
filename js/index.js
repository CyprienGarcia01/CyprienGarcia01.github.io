var currentIndexCarrousel = 0;

const CarouselList = [
    {
        src: "/assets/carousel/1.jpg",
        title: "Tips to travel around the world !"
    },
    {
        src: "/assets/carousel/2.jpg",
        title: "Tips to travel around the world !"
    },
    {
        src: "/assets/carousel/3.jpg",
        title: "Tips to travel around the world !"
    },
    {
        src: "/assets/carousel/4.jpg",
        title: "Tips to travel around the world !"
    },
    {
        src: "/assets/carousel/5.jpg",
        title: "Tips to travel around the world !"
    },
    {
        src: "/assets/carousel/6.jpg",
        title: "Tips to travel around the world !"
    }
];

const ChangeProgressState = (oldIndex, newIndex) => {
    const ContProgressBtnAll = document.querySelectorAll("#progresscarousel > .btn_progress");
    ContProgressBtnAll[oldIndex].classList.remove("active");
    ContProgressBtnAll[newIndex].classList.add("active");
};

var timeoutID = null;
const StartAutoCarousel = () => {
    const ElemImgCarousel = document.querySelector("#imgcarousel");

    timeoutID = setTimeout(function() {
        let OldCarousel = currentIndexCarrousel;

        if (CarouselList[currentIndexCarrousel + 1] != undefined) {
            currentIndexCarrousel++;
            ElemImgCarousel.src = CarouselList[currentIndexCarrousel].src;

            ChangeProgressState(OldCarousel, currentIndexCarrousel);
        } else {
            currentIndexCarrousel = 0;
            ElemImgCarousel.src = CarouselList[currentIndexCarrousel].src;

            ChangeProgressState(OldCarousel, currentIndexCarrousel);
        }

        StartAutoCarousel();
    }, 10000);
};

const reloadTimeOut = () => {
    clearTimeout(timeoutID);
    StartAutoCarousel();
};




window.addEventListener("DOMContentLoaded", function() {
    const ElemImgCarousel = document.querySelector("#imgcarousel");
    ElemImgCarousel.src = CarouselList[0].src;

    const BtnClickLeft = document.querySelector("#btn-click-left");
    const BtnClickRight = document.querySelector("#btn-click-right");

    BtnClickLeft.addEventListener("click", function() {
        let OldCarousel = currentIndexCarrousel;
        if (CarouselList[currentIndexCarrousel - 1] != undefined) {
            currentIndexCarrousel--;
            ElemImgCarousel.src = CarouselList[currentIndexCarrousel].src;

            ChangeProgressState(OldCarousel, currentIndexCarrousel);
            reloadTimeOut();
        } else {
            currentIndexCarrousel = (CarouselList.length - 1);
            ElemImgCarousel.src = CarouselList[currentIndexCarrousel].src;

            ChangeProgressState(OldCarousel, currentIndexCarrousel);
        }
    });

    BtnClickRight.addEventListener("click", function() {
        let OldCarousel = currentIndexCarrousel;
        if (CarouselList[currentIndexCarrousel + 1] != undefined) {
            currentIndexCarrousel++;
            ElemImgCarousel.src = CarouselList[currentIndexCarrousel].src;

            ChangeProgressState(OldCarousel, currentIndexCarrousel);
            reloadTimeOut();
        } else {
            currentIndexCarrousel = 0;
            ElemImgCarousel.src = CarouselList[currentIndexCarrousel].src;

            ChangeProgressState(OldCarousel, currentIndexCarrousel);
        }
    });


    const ContProgress = document.querySelector("#progresscarousel");
    var CountIndexProgess = 0;
    CarouselList.forEach((elem) => {
        let div = document.createElement("div");
        div.classList.add("btn_progress");
        div.classList.add("desactive");
        ContProgress.append(div);

        let indexBtn = CountIndexProgess;

        div.addEventListener("click", function() {
            let OldCarousel = currentIndexCarrousel;

            if (CarouselList[indexBtn] != undefined) {
                currentIndexCarrousel = indexBtn;
                ElemImgCarousel.src = CarouselList[indexBtn].src;

                ChangeProgressState(OldCarousel, indexBtn);
                reloadTimeOut();
            }
        });

        CountIndexProgess++;
    });

    const ContProgressBtnAll = document.querySelectorAll("#progresscarousel > .btn_progress");
    ContProgressBtnAll[currentIndexCarrousel].classList.add("active");

    StartAutoCarousel();
});