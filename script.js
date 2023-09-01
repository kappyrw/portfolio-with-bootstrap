
function formValidation()
{
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var name=document.form.Name.value;
    var email=document.form.Email.value;
    var Message= document.form.Message.value;

    if(email="" || !emailRegex.test(email))
       {
         alert("please enter a valid email");
         email.focus();
         return false;
       }
    if(message.lenght<10 || messaage.lenght>500 )
       {
         alert("Message should be atleast 10 characters and 500 characters maximum");
         message.focus();
         return false;
       }
}
   

