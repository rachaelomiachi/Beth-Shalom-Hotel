JotForm.newDefaultTheme = true;
	JotForm.extendsNewTheme = false;
	JotForm.newPaymentUIForNewCreatedForms = false;
	JotForm.newPaymentUI = true;

	JotForm.init(function(){
	/*INIT-START*/
      setTimeout(function() {
          $('input_17').hint('ex: myname@example.com');
       }, 20);
    if(typeof $('input_18').spinner !== 'undefined') {$('input_18').spinner({ imgPath:'https://cdn.jotfor.ms/images/', width: '310', maxValue:'', minValue:'', allowNegative: false, addAmount: 1, value:'0' });}
    $('input_18').up(2).setAttribute('tabindex','');

 JotForm.calendarMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 JotForm.calendarDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
 JotForm.calendarOther = {"today":"Today"};
 var languageOptions = document.querySelectorAll('#langList li'); 
 for(var langIndex = 0; langIndex < languageOptions.length; langIndex++) { 
   languageOptions[langIndex].on('click', function(e) { setTimeout(function(){ JotForm.setCalendar("22", false, {"days":{"monday":true,"tuesday":true,"wednesday":true,"thursday":true,"friday":true,"saturday":true,"sunday":true},"future":true,"past":true,"custom":false,"ranges":false,"start":"","end":""}); }, 0); });
 } 
 JotForm.onTranslationsFetch(function() { JotForm.setCalendar("22", false, {"days":{"monday":true,"tuesday":true,"wednesday":true,"thursday":true,"friday":true,"saturday":true,"sunday":true},"future":true,"past":true,"custom":false,"ranges":false,"start":"","end":""}); });
 JotForm.displayLocalTime("input_22_hourSelect", "input_22_minuteSelect","input_22_ampm", "input_22_timeInput", false);
if (window.JotForm && JotForm.accessible) $('input_28').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_30').setAttribute('tabindex',0);
          JotForm.isNewSaveAndContinueLaterActive = true;
	/*INIT-END*/
	});

   JotForm.prepareCalculationsOnTheFly([null,null,{"name":"submitForm","qid":"2","text":"Submit","type":"control_button"},null,null,null,{"name":"roomType","qid":"6","text":"Room Type","type":"control_dropdown"},null,null,null,{"name":"freePickup","qid":"10","text":"Free Pickup?","type":"control_radio"},null,null,null,{"name":"clickTo14","qid":"14","text":"Beth-Shalom Hotel Booking","type":"control_head"},null,{"name":"name","qid":"16","text":"Name","type":"control_fullname"},{"name":"email17","qid":"17","subLabel":"example@example.com","text":"E-mail","type":"control_email"},{"name":"numberOf18","qid":"18","text":"Number of Guests","type":"control_spinner"},null,{"name":"departureDate20","qid":"20","text":"Departure Date","type":"control_birthdate"},null,{"name":"arrivalDate","qid":"22","text":"Arrival Date & Time","type":"control_datetime"},null,null,null,null,null,{"name":"flightNumber28","qid":"28","text":"Flight Number","type":"control_textbox"},null,{"name":"specialRequests","qid":"30","text":"Special Requests","type":"control_textarea"}]);
   setTimeout(function() {
JotForm.paymentExtrasOnTheFly([null,null,{"name":"submitForm","qid":"2","text":"Submit","type":"control_button"},null,null,null,{"name":"roomType","qid":"6","text":"Room Type","type":"control_dropdown"},null,null,null,{"name":"freePickup","qid":"10","text":"Free Pickup?","type":"control_radio"},null,null,null,{"name":"clickTo14","qid":"14","text":"Beth-Shalom Hotel Booking","type":"control_head"},null,{"name":"name","qid":"16","text":"Name","type":"control_fullname"},{"name":"email17","qid":"17","subLabel":"example@example.com","text":"E-mail","type":"control_email"},{"name":"numberOf18","qid":"18","text":"Number of Guests","type":"control_spinner"},null,{"name":"departureDate20","qid":"20","text":"Departure Date","type":"control_birthdate"},null,{"name":"arrivalDate","qid":"22","text":"Arrival Date & Time","type":"control_datetime"},null,null,null,null,null,{"name":"flightNumber28","qid":"28","text":"Flight Number","type":"control_textbox"},null,{"name":"specialRequests","qid":"30","text":"Special Requests","type":"control_textarea"}]);}, 20); 
