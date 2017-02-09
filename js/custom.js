$(document).ready(function(){

    $("#business-card-div").hide();

    $("#business-card-checkbox").change(function(){
      if(this.checked){
        $("#business-card-div").show();
      } else {
        $("#business-card-div").hide();
      }
    });

    $("#phone-validation-label").css({'color':'#B22222'});
    $("#phone-validation-helptext").text("Missing Information")
    $("#phone-validation-helptext").css({'color':'#B22222'});

    $("#phone-validation-input").keyup(function(){
      var length = $("#phone-validation-input").val().length;
      if (length == 10) {
        $("#phone-validation-label").css({'color':'black'});
        $("#phone-validation-helptext").hide();
        $("#phone-validation-img").hide();
      } else if (length == 0){
        $("#phone-validation-label").css({'color':'#B22222'});
        $("#phone-validation-helptext").text("Missing Information")
        $("#phone-validation-helptext").show();
        $("#phone-validation-img").show();
      } else {
        $("#phone-validation-label").css({'color':'#B22222'});
        $("#phone-validation-helptext").text("Phone number must be 10 digits long")
        $("#phone-validation-helptext").show();
        $("#phone-validation-img").show();
      }
    });
});
