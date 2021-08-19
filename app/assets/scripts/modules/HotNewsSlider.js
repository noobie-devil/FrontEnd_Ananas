import Glide from "@glidejs/glide"

class HotNewsSlider
{
	constructor()
	{
		if(document.querySelector(".hot-news-slider"))
		{
			let glide = new Glide(".hot-news-slider",{
				type: "carousel",
				perView: 1,
				autoplay: 3000,
				animationDuration: 900,
			})
			glide.mount()
		}
	}
}


export default HotNewsSlider