
	alert("hello chetta") ;



function preloader(){
            document.getElementById("loading").style.display = "none";
            document.getElementById("content").style.display = "block";
        }//preloader
        window.onload = preloader;


function validation()
		{ 
			var pswd1=document.reg.psd1.value;
		 	var pswd2=document.reg.psd2.value;
			//alert("hello"+pswd1+" "+pswd2);
		 	if(pswd1 == pswd2)
		 		{return true;}
		 	else{alert("Password must be same..!");
		 		 return false;
		 	    }

		 	var x=document.reg.reat_name.value;
			var y=document.reg.username.value;    
		 	if(x==null||x=="") 
		 		{alert("Name must be filledout...!");   
				 return false;
				}
			if(y==null||y=="") 
		 		{alert("Userame must be filledout...!");   
				 return false;
				}	  
		}