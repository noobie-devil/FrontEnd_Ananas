
class DropDownMenu
{
	constructor()
	{
		this.activeDropDown = false;
		this.activeDropDownMenu = false;
		this.dropDown = document.querySelectorAll('.dropdown');
		this.dropDownMenu = document.querySelector('.navbar-header__dropdown-list');
		this.dataMenu;
		this.previousDataMenu;
		this.events();
	}


	events()
	{	
		this.dropDown.forEach(el => el.addEventListener('mouseover', el => {this.onMouseOver(el); console.log('moving tag');}));
		this.dropDown.forEach(el => el.addEventListener('mouseout', el => {this.onMouseOutTag(el); console.log('leaving tag');}));		
		// this.dropDown.forEach(el => el.addEventListener('mouseover', el => this.onMouseOver(el)));
		// this.dropDown.forEach(el => el.addEventListener('mouseout', el => this.onMouseOut(el)));
		// [this.dropDown, this.dropDownMenu].forEach(item => item.addEventListener('mouseenter', event => this.onMouseOver(event)));
		// this.dropDownMenu.forEach(el => el.addEventListener('mouseover', () => this.show()));
		// this.dropDownMenu.forEach(el => el.addEventListener('mouseout', () => this.close()));
		// this.dropDownMenu.addEventListener('mouseenter', () => this.show());
		// this.dropDownMenu.addEventListener('mouseleave', () => this.close());
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
		if(!this.dataMenu || this.dataMenu != (e.currentTarget.getAttribute("data-menu")))
		{
			this.dataMenu = (e.currentTarget.getAttribute("data-menu"));
			this.clearOtherDataMenu(this.dataMenu);
			this.activeDropDown = true;
			this.activeDropDownMenu = true;
		}
		
		if(document.querySelector(this.dataMenu))
		{
			this.currentMenu = document.querySelector(this.dataMenu);
			this.currentMenu.setAttribute('style', 'display: flex;')
			
			this.currentMenu.addEventListener('mouseenter', () => {this.onMouseEnterMenu(); console.log('entering');});
			this.currentMenu.addEventListener('mouseleave', () => {this.onMouseLeaveMenu(); console.log('leaving');});
			this.dropDownMenu.classList.add('show');
		}
		
		
	}

	onMouseOutTag(e)
	{		
		this.activeDropDown = false;
		if(!this.activeDropDown && !this.activeDropDownMenu)
		{
			this.currentMenu.setAttribute('style', 'display: flex;');
			this.dropDownMenu.classList.remove('show');
			
		}
	}

	onMouseEnterMenu()
	{
		this.activeDropDownMenu = true;
		this.activeDropDown = false;
	}

	onMouseLeaveMenu()
	{
		this.activeDropDownMenu = false;
		
			this.currentMenu.setAttribute('style', 'display: flex;');
			this.dropDownMenu.classList.remove('show');
		
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