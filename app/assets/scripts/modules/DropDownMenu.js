
class DropDownMenu
{
	constructor()
	{
		this.dropDown = document.querySelectorAll('.dropdown-menu__link');
		this.offsetTop_Link;
		this.currentDatamenu;
		this.currentMenu;
		this.currentPosition;
		this.events();
		
	}


	events()
	{	
		let bodyRect = document.body.getBoundingClientRect();
		let elRect = this.dropDown[0].getBoundingClientRect();
		this.offsetTop_Link  = (elRect.top - bodyRect.top) ;

		this.dropDown.forEach(el => el.addEventListener('mouseover', (el) => this.show(el.currentTarget)));	
		// this.dropDown.forEach(el => el.addEventListener('wheel', (el) => this.closeWhenWheel(el)));
		this.dropDown.forEach(el => el.addEventListener('mouseout', (el) => this.close(el)));			
	}


	show(el)
	{
		let dataMenu = el.getAttribute("data-menu");
		this.currentMenu = document.querySelector(dataMenu);
		this.currentPosition = window.scrollY + this.offsetTop_Link;
		if(this.currentPosition > this.offsetTop_Link)
		{
			this.currentMenu.setAttribute('style', `margin-top: -${this.currentPosition - this.offsetTop_Link -40}px;`);
		}

		window.addEventListener('scroll', () => {
			this.currentPosition = window.scrollY + this.offsetTop_Link;
			// document.querySelectorAll(`.dropdown-menu`).forEach(el => el.setAttribute('style', `margin-top: -${currentPosition - top -40 }px;`));
			this.currentMenu.setAttribute('style', `margin-top: -${this.currentPosition - this.offsetTop_Link -40}px;`);
		});

		el.classList.add('open');
		

		 
	}

	calcOffsetTop(el)
	{
		let bodyRect = document.body.getBounding()
		let elRect = el.currentTarget.getBoundingClientRect();
		let top = (elRect.top - bodyRect.top);
		
		// if(window.scrollY + window.innerHeight)
	}

	closeWhenWheel(el)
	{
		if(el.currentTarget.classList.contains('open'))
		{
			this.close(el);
		}
	}

	close(el)
	{
		el.currentTarget.classList.remove('open');
		// document.querySelectorAll(`.dropdown-menu`).forEach(el => el.setAttribute('style', ``));

	}
	
}
export default DropDownMenu;