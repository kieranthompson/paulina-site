var isClicked;
$("#boz-more").click(function(){
  isClicked = !isClicked;
  if(isClicked == true) {
    $("#boz-text").hide(200);
    $("#agnieska-row").hide(300);
    $("#magdalena-row").hide(300);
    $("#bozena-row").animate({left: '200px'});
    $("#boz-more p").text("mniej-");
    $("#boz-text").show(200);
    $("#boz-text").text("Adw. Bożena Nieciecka – Ostojska od kilkunastu lat wykonuje zawód adwokata specjalizując się w sprawach z zakresu prawa rodzinnego w szerokim tego słowa znaczeniu. Adw. Nieciecka – Ostojska ukończyłam prawo na Uniwersytecie Łódzkim. Po studiach zdobyła uprawnienia sędziego zdając egzamin sędziowski. Następnie po odbyciu aplikacji adwokackiej zdałam z bardzo dobrym rezultatem egzamin adwokacki. W okresie pracy adwokata pełniła funkcję patrona kilkunastu aplikantów, którzy aktualnie są doświadczonymi adwokatami. W ramach samorządu adwokackiego w Okręgowej Radzie Adwokackiej w Łodzi wybrana została rzecznikiem dyscyplinarnym, sędzią sądu dyscyplinarnego, członkiem licznych komisji samorządowych. Do chwili obecnej pozostaje wykładowcą z prawa rodzinnego na zajęciach szkoleniowych dla aplikantów adwokackich oraz jest powoływana do składu komisji egzaminacyjnej. Uczestniczę w licznych szkoleniach i wykładach doskonaląc swoje umiejętności dziedzinie spraw   rodzinnych zapoznając się z aktualnymi trendami orzecznictwa i literatury prawniczej."
  );
    $("#boz-text").removeClass("team-text row");
    $("#boz-text").css({'position': 'absolute', 'top': '0', 'left': '300px', 'min-width': '350px'});
  }

  if(isClicked == false) {
    $("#agnieska-row").show(300);
    $("#magdalena-row").show(300);
    $("#boz-text").css({'position':'static', 'min-width': '0'});
    $("#bozena-row").animate({left: '0px'});
    $("#bozena-row").addClass("col-sm-4");
    $("#boz-text").addClass("team-text row");
    $("#boz-more p").text("wiecej+")
    $("#boz-text").text("Adw. Bożena Nieciecka – Ostojska od kilkunastu lat wykonuje zawód adwokata specjalizując się w sprawach z zakresu prawa rodzinnego w szerokim tego słowa."
  );
  }
    console.log(isClicked);
  });
