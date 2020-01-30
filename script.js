var inputEl = document.querySelector(".form-control-plaintext");
var btn = document.querySelector(".btn btn-info btn-lg");

var input;

inputEl.addEventListener("change", function(event) {
    event.preventDefault();
    typeface = input.value;
    document.querySelector(".container").style.fontFamily = input;
  });


  btnEl.addEventListener("change", function(event) {
    event.preventDefault();
    typeface = btnEl.value;
    document.querySelector(".row").style.fontFamily = btn;
  });

moment().format('MMMM Do YYYY, h:mm:ss a'); // January 29th 2020, 11:07:38 pm
moment().format('dddd');                    // Wednesday
moment().format("MMM Do YY");               // Jan 29th 20
moment().format('YYYY [escaped] YYYY');     // 2020 escaped 2020
moment().format();                          // 2020-01-29T23:07:38-06:00
                                           