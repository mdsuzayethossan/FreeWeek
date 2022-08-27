
(() => {
    'use strict'
  
    document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    });

    //
    document.getElementById('header-dropdown-btn').addEventListener('click', function(){
        const headerDropdownMenus = document.getElementById('header-dropdown-menus');
        headerDropdownMenus.classList.toggle("show");
    });

    //
    
  })()
  