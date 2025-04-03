const swiperWrapper = document.querySelector("div.wrapper>div.offer>div.swiper-container>div.swiper-wrapper");

let offerslide = async () => {
    const res = await (await fetch("http://localhost:2000/offer")).json();

    res.forEach(elem => {
        swiperWrapper.innerHTML += `
        <div class="swiper-slide w-full h-full ">
            <a href="#" class="textoffer w-auto h-full text-[14px] text-[#333333] flex justify-center items-center font-[f2] cursor-pointer">
                ${elem.text}
            </a>
        </div>
        `;
    });

    new Swiper("div.wrapper>div.offer>div.swiper-container", {
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        allowTouchMove: false,
    });

    let links=[...document.getElementsByClassName("textoffer")];
    links.forEach(elem=>{
        elem.addEventListener("mouseenter", function(){
            this.classList.add("underline")
        })
           
        elem.addEventListener("mouseleave", function(){
            this.classList.remove("underline")
        })
    })
};

export default offerslide;





