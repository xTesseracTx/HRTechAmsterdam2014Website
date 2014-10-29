// Form Validator Script

// <![CDATA[
function validateForm()
{
var FirstName=document.forms["myForm"]["first_name"].value;

var LastName=document.forms["myForm"]["last_name"].value;
var JobTitle=document.forms["myForm"]["title"].value;
var Email=document.forms["myForm"]["email"].value;
var Phone=document.forms["myForm"]["phone"].value;
var Company=document.forms["myForm"]["company"].value;
var Country=document.forms["myForm"]["country"].value;
var Indusrty=document.forms["myForm"]["industry"].value;
var atpos=Email.indexOf("@");
var dotpos=Email.lastIndexOf(".");
var phonelenght=Phone.length;
re = /^[A-Za-z]+$/;
nu = /^[0-9]+$/;

if (FirstName==null || FirstName=="")
  {
  alert("In order to proceed the FIRST NAME field can not be left empty.");
  return false;
  }
  	
    
  


if (LastName==null || LastName=="")
  {
  alert("In order to proceed the LAST NAME field can not be left empty.");
  return false;
  } 

    


if (JobTitle==null || JobTitle=="")
  {
  alert("In order to proceed the JOB TITLE field can not be left empty.");
  return false;
  }
   


if (Email==null || Email=="")
  {
  alert("In order to proceed the EMAIL field can not be left empty.");
  return false;
  }
 

if (Phone==null || Phone=="")
  {
  alert("In order to proceed the PHONE field can not be left empty.");
  return false;
  }
  if(nu.test(document.getElementById("phone").value))
    {
       
    }
    else
    {
       alert('The PHONE field can contain only numbers.');
	   return false;

    }   
      
if (Company==null || Company=="")
  {
  alert("In order to proceed the COMPANY field can not be left empty.");
  return false;
  }
       
if (Indusrty==null || Indusrty=="none")
  {
  alert("In order to proceed please select a value in the INDUSTRY field.");
  return false;
  }
if (Country==null || Country=="")
  {
  alert("In order to proceed the COUNTRY field can not be left empty.");
  return false;
  }
  	 if(re.test(document.getElementById("country").value))
    {
       
    }
   
  
if (Phone.length <= 5)
  {
  alert("The PHONE number has to contain at least 6 digits.");
  return false;
  }   
  
if (Compay.length <= 2)
  {
  alert("The COMPANY field has to contain at least 3 characters.");
  return false;
  }      

if (Company =="google" )
  {
  alert("Bad robot!");
  return false;
  }

if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Please type a valid email address into the EMAIL field.");
  return false;
  }
 
  
      
}
// ]]>