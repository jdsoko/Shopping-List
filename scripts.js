'use strict';


$(function() {
    $('#js-shopping-list-form').submit(function(event) {
        
        event.preventDefault();
        
        
        
        const listItem = $(this).find('input').val();

        
        $('ul').append(
           `<li>
           <span class="shopping-item">${listItem}</span>
           <div class="shopping-item-controls">
             <button class="shopping-item-toggle">
               <span class="button-label">check</span>
             </button>
             <button class="shopping-item-delete">
               <span class="button-label">delete</span>
             </button>
           </div>
         </li>` 
        )

        $('#js-shopping-list-form').trigger('reset');


    


    })



   $(document).on('click', 'button.shopping-item-delete', function(event){
      $(this).closest('li').remove();
   
  
  })


  $(document).on('click', 'button.shopping-item-toggle', function(event){
      $(this).parent().prev('span').toggleClass('shopping-item__checked');


  })



});


