import '../styles/styles.css'

import HotNewsSlider from "./modules/HotNewsSlider"
import DropDownMenu from "./modules/DropDownMenu"


let dropDownMenu = new DropDownMenu()
let hotNewsSlider = new HotNewsSlider()


if(module.hot)
{
	module.hot.accept()
}