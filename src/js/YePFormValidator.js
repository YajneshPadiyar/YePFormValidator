(function ($) {

   $.fn.YePFormValidator = function (options) {

      var FormValidSetup = $.extend({
            Type : "",
			OnBlur : true,
			message: "Enter a valid value"
         }, options);
      return this.each(function () {
		var element = this;
         switch(FormValidSetup.Type.toUpperCase()){
		 case("EMAIL"):
			Validate(element);
		 break;
		 default:
		 }
		 $(".YepEmailValidateOnBlur").blur(EmailValidateOnBlur);
      });
	  
      function Validate(element)
	  {
		$(element).addClass("YepEmailValidate");
		if(FormValidSetup.OnBlur)
		{
			$(element).addClass("YepEmailValidateOnBlur");
		}
	  }
      function EmailValidateOnBlur(e){
		var value = $(this).val();
		var element = this;
		var ptrn = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		var regExpr = new RegExp(ptrn);
		if(regExpr.test(value)){
		RemoveHighLight(element);
		}
		else{
		HighLightError(element);
		ShowErrorMessage(element);
		}
		return;
	  }
	  function ShowErrorMessage(element){
	  $(element).after("<div>"+FormValidSetup.message+" </div>");
	  }
	  function RemoveHighLight(){
		$(element).removeClass("Error-Input");
	  }
	  function HighLightError(element){
		$(element).addClass("Error-Input");
	  }
   }
}
   (jQuery));
