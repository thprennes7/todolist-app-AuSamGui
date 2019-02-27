// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery-3.3.1.min.js
//= require jquery.validate.js
$(document).ready(() => {

  let $cardDiv = $("ul > div.card"), $li = $(".btn-outline-secondary");

  console.log($cardDiv);
  console.log($li);


  $cardDiv.hide();
  $($cardDiv[0]).show();

  for (let x = 0; x < $li.length; x++){
    $($li[x]).on('click', () => {
      for (let y = 0; y < $li.length; y++){
        if (y !== x){
          $($cardDiv[y]).hide();
          console.log(`Slided up ${$cardDiv[y]}`);
        };
      };
      $($cardDiv[x]).show();
      console.log(`Slided down ${$cardDiv[x]}`);
    });
  };

  let $avatarImg = $(".rounded-circle"), $userAction = $("#user-action");

  $userAction.hide();

  $avatarImg.on('click', () => {
    $userAction.slideToggle(200);
  })

  $userAction.on('mouseleave', () => {
    $userAction.slideUp();
  })
})
