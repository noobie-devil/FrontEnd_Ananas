
class DropDownMenu
{
	constructor()
	{
		this.activeDropDown = false;
		this.activeDropDownMenu = false;
		this.dropDown = document.querySelectorAll('.dropdown');
		this.dropDownMenu = document.querySelector('.navbar-header__dropdown-list');
		this.currentMenu;
		this.currentdataMenu;
		this.previousDataMenu;
		this.mouseLeaveMenuTiming;
		this.mouseEnterMenuTiming;
		this.mouseOverTagTiming;
		this.mouseOutTagTiming;
		this.hoverMenuTiming;
		// this.events();
	}


	events()
	{	
		this.dropDown.forEach(el => el.addEventListener('mouseover', el => {this.onMouseOver(el); console.log('moving tag');}));
		this.dropDown.forEach(el => el.addEventListener('mouseout', el => {this.onMouseOutTag(el); console.log('leaving tag');}));	

	}

	clearOtherDataMenu(dataMenu)
	{
		document.querySelectorAll(`.dropdown-menu__list:not(${dataMenu})`).forEach(el => el.setAttribute('style', ''));
		this.dropDownMenu.classList.remove('show');
	}	

	onMouseOver(e)
	{
		if(window.innerWidth < 1106)
		{
			this.dropDownMenu.setAttribute('style', `top: ${this.calcOffsetTop(e)}px;`);
		}
		else
		{
			this.dropDownMenu.setAttribute('style', ``);
		}
		this.currentdataMenu = e.currentTarget.getAttribute("data-menu");

		if(this.mouseLeaveMenuTiming)
		{
			if(this.currentdataMenu == this.previousDataMenu)
			{
				clearTimeout(this.mouseLeaveMenuTiming);
				this.mouseLeaveMenuTiming = null;
			}
		}
		if(this.mouseOutTagTiming)
		{
			if(this.currentdataMenu != this.previousDataMenu)
			{
				
			}
		}

		if(this.hoverTagTiming)
		{
			clearTimeout(this.hoverTiming);
			this.hoverTiming = null;
		}
		if(this.currentdataMenu != this.previousDataMenu)
		{
			this.previousDataMenu = this.currentdataMenu;
			this.hoverTagTiming = setTimeout(() => {
				this.hoverTagTiming = null;
				this.openDropDownMenu(e);
				this.dropDownMenu.addEventListener('mouseenter', () => {this.onMouseEnterMenu();});
				this.dropDownMenu.addEventListener('mouseleave', () => {this.onMouseLeaveMenu();});
			},300);
		}
		
	}

	onMouseOutTag(e)
	{		
		this.hoverTagTiming = setTimeout(() => {
			this.currentMenu.setAttribute('style', '');
			this.dropDownMenu.classList.remove('show');
			this.currentdataMenu = null;
			this.currentMenu = null;
			this.hoverTagTiming = null;
			this.previousDataMenu = null;
		}, 400);
	}

	closeDropdownMenu()
	{
		this.hoverTiming = setTimeout(() => {
			this.currentMenu.setAttribute('style', '');
			this.dropDownMenu.classList.remove('show');
			this.previousDataMenu = null;
			this.hoverTiming = null;
			this.currentMenu = null;
		},100);
	}

	openDropDownMenu(e)
	{
		this.clearOtherDataMenu(this.currentdataMenu);
		this.previousDataMenu = this.currentdataMenu;
		if(document.querySelector(this.currentdataMenu))
		{
			this.currentMenu = document.querySelector(this.currentdataMenu);
			this.currentMenu.setAttribute('style', 'display: flex;');
			this.dropDownMenu.classList.add('show');
			this.dropDownMenu.addEventListener('mouseenter', () => {this.onMouseEnterMenu();});
			this.dropDownMenu.addEventListener('mouseleave', () => {this.onMouseLeaveMenu(); });
		}
		// if(this.hoverTiming)
		// {
		// 	clearTimeout(this.hoverTiming);
		// 	this.hoverTiming = null;
		// }
		// if(this.currentdataMenu != this.previousDataMenu)
		// {
		// 	this.clearOtherDataMenu(this.currentdataMenu);
		// 	this.previousDataMenu = this.currentdataMenu;
		// 	if(document.querySelector(this.currentdataMenu))
		// 	{
		// 		this.currentMenu = document.querySelector(this.currentdataMenu);
		// 		this.currentMenu.setAttribute('style', 'display: flex;');
		// 		this.dropDownMenu.classList.add('show');
		// 		this.dropDownMenu.addEventListener('mouseenter', () => {this.onMouseEnterMenu();});
		// 		this.dropDownMenu.addEventListener('mouseleave', () => {this.onMouseLeaveMenu(); });
		// 	}
		// }
		
	}

	

	onMouseEnterMenu()
	{
		clearTimeout(this.hoverTiming);
		this.hoverTiming = null;
	}

	onMouseLeaveMenu()
	{	
		this.hoverTiming = setTimeout(() => {
			this.currentMenu.setAttribute('style', '');
			this.dropDownMenu.classList.remove('show');
			this.previousDataMenu = null;
		},1000);
	}

	// show()
	// {
	// 	this.hoverMenu = true;

	// }

	// close()
	// {
	// 	this.currentMenu.style.display = "none";
	// 	this.dropDownMenu.classList.remove('show');
	// 	this.hoverMenu = false;
	// }

	calcOffsetTop(el)
	{
		let bodyRect = document.body.getBoundingClientRect();
		let elRect = el.currentTarget.getBoundingClientRect();
		let top = (elRect.top - bodyRect.top) + 57;
		return top;	
	}
	
	

	

	clearAll()
	{
		document.querySelectorAll(`.dropdown-menu__list`).forEach(el => el.setAttribute('style', ''));
		this.dropDownMenu.classList.remove('show');
	}

	
}
export default DropDownMenu;