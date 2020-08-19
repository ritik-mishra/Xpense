	
		const allexpenses = []
		const newArr = [];
	// this function adds total expense from array
		function sum(){
				let totalexpense = 0 ;
					for (let index = 0; index < allexpenses.length; index++) {
							 totalexpense =  totalexpense + allexpenses[index].itemcost;
							}
						
				const headingElement = document.querySelector("#headingTotal");
				headingElement.textContent = totalexpense ;
					}
				// this function prints array to screen
		function render()  { 
					const allexpensesHTML = allexpenses.map(expenseitem => {
					return `
					<ul class="list-group" id="">
						<li class="list-group-item d-flex justify-content-between">
							<div class="d-flex flex-column">
								${expenseitem.itemname}
								<small class="text-muted">${expenseitem.moment.toLocaleDateString('en-US',{year:'numeric',day:'numeric',month:'long'})}</small>
							</div>
							<div>
								<span class="px-5">
									${expenseitem.itemcost}
								</span>
								<button type="button" 
								onclick="deleteItem(${expenseitem.moment.valueOf()	}		)";
								class="btn btn-outline-danger btn-sm">
									<i class="fas fa-trash-alt"></i>
								</button>
							</div>
						</li>
					</ul>		
					`
				}
			) 

			const joinedhtml = allexpensesHTML.join("");  
				const expensetableelement= document.querySelector("#listbox")
		     	expensetableelement.innerHTML = joinedhtml;
		}
		// adds items to array
		function additem(){
			const inputelement = document.querySelector("#inputamount");
			const textvalue = inputelement.value;
			const expense = parseInt(textvalue,10);
			const inputtextelement = document.querySelector("#inputtext")
			 const textdesc = inputtextelement.value;
			const expenseitem  = {}
				expenseitem.itemcost=expense;
				expenseitem.itemname=textdesc;
				expenseitem.moment= new Date();
				allexpenses.push(expenseitem)


			sum();
			render()
			}

		
		// deletes item from array
		// 


		function deleteItem(datevalue){
			const newArr = []
			
			 for(i=0;i<allexpenses.length;i++){
					if (allexpenses[i].moment.valueOf() == datevalue ) {
								allexpenses.splice(i, 1);
			}
					}
		sum();
		render();				
	}


		// listens to click event
			const element = document.querySelector("#addbutton");
			element.addEventListener("click",additem,false);

		
			
	
	