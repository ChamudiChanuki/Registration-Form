			//getting form fields
			var id = document.forms['myform']['id'];
			var username = document.forms['myform']['username'];
			var email = document.forms['myform']['email'];
			var address = document.forms['myform']['address'];


			//getting all error divs/fields
			var id_error = document.getElementById('id_error');
			var name_error = document.getElementById('name_error');
			var email_error = document.getElementById('email_error');
			var address_error = document.getElementById('address_error');


			function addRow()
			{
                // validate id
                if (id.value == "") 
                {
                  id.style.border = "2px solid red";
                  document.getElementById('id_div').style.color = "red";
                  id_error.textContent = "ID is required";
                  id.focus();
                  return false;
                }

                // validate username
                else if (username.value == "") 
                {
                  username.style.border = "2px solid red";
                  document.getElementById('username_div').style.color = "red";
                  name_error.textContent = "Username is required";
                  username.focus();
                  return false;
                }

                // validate email
                else if (email.value == "")
                 {
                  email.style.border = "2px solid red";
                  document.getElementById('email_div').style.color = "red";
                  email_error.textContent = "Email is required";
                  email.focus();
                  return false;
                }
                // validate password
                else if (address.value == "") 
                {
                  address.style.border = "2px solid red";
                  document.getElementById('address_div').style.color = "red";
                  address_error.textContent = "Address is required";
                  address.focus();
                  return false;
                }
                else
                {
                	  //creating Student Object
	                  var student = 
	                          {
	                            sid: id.value,
	                            sname: username.value,
	                            semail: email.value,
	                            saddress: address.value
	                          };


	                  //this is optional if u use 1 table 
	                  var table = document.getElementsByTagName('table')[0];
	                  
	                  //insert new row
	                  var newRow = table.insertRow(table.rows.length);
                  
	                  // add cells to the row
	                  var cel1 = newRow.insertCell(0);
	                  var cel2 = newRow.insertCell(1);
	                  var cel3 = newRow.insertCell(2);
	                  var cel4 = newRow.insertCell(3);
	                  var cel5 = newRow.insertCell(4);

	 
	                  //button create
	                  var UpdateButton=document.createElement("button");
	                  var DeleteButton=document.createElement("button");
	                  				  

					  //givig colors to buttons
					  UpdateButton.style.backgroundColor = "green";
					  DeleteButton.style.backgroundColor = "red";
					  UpdateButton.style.color="white"
					  DeleteButton.style.color="white";
	  
	                  
	                  // add values to the cells
	                  cel1.innerHTML = student.sid;
	                  cel2.innerHTML = student.sname;
	                  cel3.innerHTML = student.semail;
	                  cel4.innerHTML = student.saddress;
	                  cel5.appendChild(UpdateButton); 
	                  UpdateButton.innerHTML="Update";
					  cel5.appendChild(DeleteButton);
					  DeleteButton.innerHTML="Remove";


					  //delete row 
					  var RowIndex;

					  DeleteButton.addEventListener("click",function()
					  	{
							for(var j=0;j<table.rows.length;j++)
							{
								//4 time execute - e.g 2nd index click - it will delete only that
								table.rows[j].onclick=function()
								{
									var txt;

									if (confirm("Prees Okey, If you want to delete data.")) 
									{
								        RowIndex=this.rowIndex;
									  	table.deleteRow(RowIndex);
								    } 
								    else 
								    {
								        txt = "You pressed Cancel!";
								    }
								};
							}
						});


					  //update row
					  UpdateButton.addEventListener("click",function()
						{
							for(var i=1;i<table.rows.length;i++)
							{
								table.rows[i].onclick=function()
								{
									document.getElementById("myid").value=this.cells[0].innerHTML;
									document.getElementById("myname").value=this.cells[1].innerHTML;
									document.getElementById("myemail").value=this.cells[2].innerHTML;
									document.getElementById("myaddress").value=this.cells[3].innerHTML;
								};
							}
						});

						return true;
                }
			}