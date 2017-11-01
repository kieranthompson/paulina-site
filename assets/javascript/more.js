var isClicked;
$("#boz-more").click(function(){
  isClicked = !isClicked;
  if(isClicked) {
    $("#boz-text").hide(200);
    $("#agnieska-row").hide(300);
    $("#magdalena-row").hide(300);
    $("#bozena-row").animate({left: '200px'});
    $("#boz-more .more").text("mniej-");
    $("#boz-text").show(200);
    $("#boz-text").text("Adw. Bożena Nieciecka – Ostojska od kilkunastu lat wykonuje zawód adwokata specjalizując się w sprawach z zakresu prawa rodzinnego w szerokim tego słowa znaczeniu. Adw. Nieciecka – Ostojska ukończyłam prawo na Uniwersytecie Łódzkim. Po studiach zdobyła uprawnienia sędziego zdając egzamin sędziowski. Następnie po odbyciu aplikacji adwokackiej zdałam z bardzo dobrym rezultatem egzamin adwokacki. W okresie pracy adwokata pełniła funkcję patrona kilkunastu aplikantów, którzy aktualnie są doświadczonymi adwokatami. W ramach samorządu adwokackiego w Okręgowej Radzie Adwokackiej w Łodzi wybrana została rzecznikiem dyscyplinarnym, sędzią sądu dyscyplinarnego, członkiem licznych komisji samorządowych. Do chwili obecnej pozostaje wykładowcą z prawa rodzinnego na zajęciach szkoleniowych dla aplikantów adwokackich oraz jest powoływana do składu komisji egzaminacyjnej. Uczestniczę w licznych szkoleniach i wykładach doskonaląc swoje umiejętności dziedzinie spraw   rodzinnych zapoznając się z aktualnymi trendami orzecznictwa i literatury prawniczej."
);
    $("#boz-text").css({'position': 'absolute', 'top': '0', 'left': '310px', 'min-width': '450px'});
  }

  if(!isClicked) {
    $("#agnieska-row").show(300);
    $("#magdalena-row").show(300);
    $("#boz-text").css({'position':'static', 'min-width': '0'});
    $("#bozena-row").animate({left: '0px'});
    $("#bozena-row").addClass("col-sm-4");
    $("#boz-text").addClass("team-text row");
    $("#boz-more .more").text("wiecej+")
    $("#boz-text").text("Adw. Bożena Nieciecka – Ostojska od kilkunastu lat wykonuje zawód adwokata specjalizując się w sprawach z zakresu prawa rodzinnego w szerokim tego słowa."
  );
    $("#boz-more .more").css('margin-top', '25px');
  }
    console.log(isClicked);
  });

  $("#ag-more").click(function() {
    isClicked = !isClicked;
    if(isClicked) {
      $("#ag-text").hide();
      $("#bozena-row").hide();
      $("#magdalena-row").hide();
      $("#agnieska-row").animate({left: '200px'});
      $("#ag-more .more").text("mniej-");
      $("#ag-text").show(200);
      $("#ag-text").text("Adw. Agnieszka Oskaldowicz – Leduchowska, jest absolwentką Wydziału Prawa na Uniwersytecie Łódzkim. Posiada wieloletnie doświadczenie zawodowe, jeszcze na studiach zdobywała doświadczenie w pracując w Kancelarii Notarialnej i Adwokackiej, gdzie wykonywała swoją pracę z dużym zaangażowaniem i pasją, co zaowocowało pozytywnym wynikiem podczas naboru na aplikację adwokacką, którą odbywała w Łódzkiej Izbie Adwokackiej pod patronatem Mecenas Bożeny Niecieckiej - Ostojskiej. Adw. Agnieszka Oskaldowicz – Leduchowska w pełni realizuje się w wykonywaniu swego zawodu, posiada doświadczenie w prowadzeniu negocjacji pozaprocesowych, co jest bardzo istotne szczególnie w prawie rodzinnym, w którym się specjalizuje. Na bieżąco poszerza swą wiedzę i podnosi swe kwalifikacje zawodowe, bierze udział w licznych szkoleniach i wykładach, obecnie jest słuchaczką Studiów Podyplomowych z zakresu Prawa Rodzinnego prowadzonych na Uniwersy tecie Łódzkim.");

      $("#ag-text").css({'position': 'absolute', 'top': '0', 'left': '310px', 'min-width': '450px'});
    }

    if(!isClicked) {
      $("#bozena-row").show(300);
      $("#magdalena-row").show(300);
      $("#ag-text").css({'position':'static', 'min-width': '0'});
      $("#agnieska-row").animate({left: '0px'});
      $("#agnieska-row").addClass("col-sm-4");
      $("#ag-text").addClass("team-text row");
      $("#ag-more .more").text("wiecej+")
      $("#ag-text").text("Adw. Agnieszka Oskaldowicz – Leduchowska, jest absolwentką Wydziału Prawa na Uniwersytecie Łódzkim. Posiada wieloletnie doświadczenie zawodowe");
    }
  });

  $("#mag-more").click(function() {
    isClicked = !isClicked;
    if(isClicked) {
      $("#mag-text").hide();
      $("#agnieska-row").hide();
      $("#bozena-row").hide();
      $("#magdalena-row").animate({left: '200px'});
      $("#mag-more .more").text("mniej-");
      $("#mag-text").show(200);
      $("#mag-text").text("Adw. Magdalena Niewiadomska-Wojcieszek ukończyła z wynikiem bardzo dobrym studia na kierunku prawo na Wydziale Prawa i Administracji Uniwersytetu Łódzkiego, Podczas studiów otrzymała dwukrotnie list gratulacyjny od Rektora UŁ za bardzo dobre wyniki w nauce. Podczas studiów podejmowała praktykę w łódzkich kancelariach. Aplikację adwokacką odbyła w Okręgowej Radzie Adwokackiej w Łodzi pod patronatem adw. Bożeny Niecieckiej – Ostojskiej. Okres aplikacji pozwolił jej na zdobycie cennego doświadczenia, co pozwala jej na prowadzenie z sukcesem indywidualnej praktyki adwokackiej. Adw. Magdalena Niewiadomska – Wojcieszek odbyła również studia doktoranckie będąc doktorantem w Katedrze Zbiorowego i Europejskiego Prawa Pracy. Od początku kariery zawodowej związana z prawem rodzinnym. Nieustannie poszerza swoją wiedzę uczestnicząc w licznych szkoleniach oraz odbywając studia podyplomowe.");

      $("#mag-text").css({'position': 'absolute', 'top': '0', 'left': '310px', 'min-width': '450px'});
    }

    if(!isClicked) {
      $("#bozena-row").show(300);
      $("#agnieska-row").show(300);
      $("#mag-text").css({'position':'static', 'min-width': '0'});
      $("#magdalena-row").animate({left: '0px'});
      $("#magdalena-row").addClass("col-sm-4");
      $("#mag-text").addClass("team-text row");
      $("#mag-more .more").text("wiecej+")
      $("#mag-text").text("Adw. Magdalena Niewiadomska-Wojcieszek ukończyła z wynikiem bardzo dobrym studia na kierunku prawo na Wydziale Prawa i Administracji Uniwersytetu Łódzkiego");
    }
  });
