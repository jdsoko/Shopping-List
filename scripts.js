'use strict';

$('h1').hide();

$(function() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        
        const listItem = $(this).find('input [name="shopping-list-entry"]');
        
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

    })

   








});