import '../styles/styles.css'

import HotNewsSlider from "./modules/HotNewsSlider"


let hotNewsSlider = new HotNewsSlider()

if(module.hot)
{
	module.hot.accept()
}