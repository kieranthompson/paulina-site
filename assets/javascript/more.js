var isClicked;
$("#boz-more").click(function(){
    $("#agnieska-row").hide(500);
    $("#magdalena-row").hide(500);
    $("#bozena-row").animate({left: '200px'});

    console.log(isClicked);
  });
