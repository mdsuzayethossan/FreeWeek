
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
    $(".modal-dialog").css("width", "100%");
    $('#image-item').click(function(){
      window.location.href = 'view.html';
    });
    
  })()
  