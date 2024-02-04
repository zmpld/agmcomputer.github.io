const toggleBtn = document.querySelector('.toggle_btn');
        const toggleBtnIcon = document.querySelector('.toggle_btn i');
        const dropDownMenu = document.querySelector('.dropdown_menu');

        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open');
            const isOpen = dropDownMenu.classList.contains('open');

            toggleBtnIcon.className = isOpen 
			? 'fas fa-times' 
			: 'fas fa-bars';
        };
		
		const wrapper = document.querySelector('.wrapper');
		const loginLink = document.querySelector('.login-link');
		const registerLink = document.querySelector('.register-link');

		registerLink.addEventListener('click', ()=> {
			wrapper.classList.add('active');
		});
		loginLink.addEventListener('click', ()=> {
			wrapper.classList.remove('active');
		});