(function ($) {

   $.fn.YePFormValidator = function (options) {
		
      var FormValidSetup = $.extend({
            Type : "",
			OnBlur : true,
			message: "Enter a valid value"
         }, options);
      return this.each(function () {
		var element = this;
		console.log(FormValidSetup.Type);
         switch(FormValidSetup.Type.toUpperCase()){
		 case("EMAIL"):{
			Validate(element,'YepEmailValidate','YepEmailValidateOnBlur');
			}
		 break;
		 case("NUMERIC"):{
			Validate(element,'YepNumbericValidate','YepNumbericValidateOnBlur');
		 }
		 break;
		 default:
		 }
		 $(".YepEmailValidateOnBlur").blur(EmailValidateOnBlur);
		 $(".YepNumbericValidateOnBlur").blur(NumbericValidateOnBlur);
      });
	  function NumbericValidateOnBlur(e){
		var value = $(this).val();
		var element = this;
		var isValid = false;
		for(var i = 0,len = value.length;i<len;i++){
			if(isNaN(Number(value[i]))){
				isValid = true;
				break;
			}
		}
		if(isValid){
		HighLightError(element);
		ShowErrorMessage(element);
		}else{RemoveHighLight(element);}
	  }
	  //Validate(element,ValidateClass,ValidateOnBlur)
      function Validate(element,vc,bc)
	  {
		$(element).addClass(vc);
		if(FormValidSetup.OnBlur)
		{
			$(element).addClass(bc);
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
	  function RemoveHighLight(element){
		$(element).removeClass("Error-Input");
	  }
	  function HighLightError(element){
		$(element).addClass("Error-Input");
	  }
   }
}
   (jQuery));
