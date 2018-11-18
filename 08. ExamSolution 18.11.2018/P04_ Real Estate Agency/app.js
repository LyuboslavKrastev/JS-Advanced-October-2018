function realEstateAgency () {
	/* Rent price and commission rate should be numbers. Rent price must be positive number (greater than zero (0)). 
	Commission rate should be greater or equal to zero (0) and lower or equal to one hundred (100). 
	Apartment type should be non-empty string and should not contain ':' character.*/

	let regButton = $('button[name=regOffer]');

	regButton.on('click', () => {
		let rentPrice = $('input[name="apartmentRent"]').val();
		let commissionRate = $('input[name="agencyCommission"]').val();
		let apartmentType = $('input[name="apartmentType"]').val();
		let message = $('#message');

		if(isNaN(rentPrice) || isNaN(commissionRate) || apartmentType == ''){
			message.text('Your offer registration went wrong, try again.');
			return;
		}
		let rent = +rentPrice;
		if(rent <= 0){
			message.text('Your offer registration went wrong, try again.');
			return;
		}
		let rate = +commissionRate;
		if(rate < 0 || rate > 100){
			message.text('Your offer registration went wrong, try again.');
			return;
		}
		if (apartmentType.indexOf(':') > -1){
			message.text('Your offer registration went wrong, try again.');
			return;
		}

		let building = $('#building');
		let div = $('<div>').addClass('apartment');
		let rentP = $('<p>').text(`Rent: ${rent}`);
		let typeP = $('<p>').text(`Type: ${apartmentType}`);
		let comP = $('<p>').text(`Commission: ${commissionRate}`);

		div.append(rentP).append(typeP).append(comP);

		building.append(div);

	//clear fields
	$('input[name="apartmentRent"]').val('');
	$('input[name="agencyCommission"]').val('');
	$('input[name="apartmentType"]').val('');

		message.text('Your offer was created successfully.');
	});

	//Find offer field
	let findButton = $('button[name=findOffer]');

	findButton.on('click', () => {
		/*Family budget must be positive number (greater than zero (0)). 
		Apartment type and Family name should be non-empty strings. */

		let familyBudget = $('input[name="familyBudget"]').val();
		let familyApartmentType = $('input[name="familyApartmentType"]').val();
		let familyName = $('input[name="familyName"]').val();
		let message = $('#message');

		let budget = +familyBudget;
		if(budget <= 0){
			message.text('We were unable to find you a home, so sorry :(');
			return;
		}
		if(!familyApartmentType || !familyName){
			message.text('We were unable to find you a home, so sorry :(');
			return;
		}
		let offers = $('.apartment');
		let found = false;
		for(let i=0; i<offers.length; i++){
			let typeText = $(offers[i]).find('p').eq(1);
			let type = typeText.text().substring(6);

			if(type === familyApartmentType){
				let rentText = $(offers[i]).find('p').eq(0).text().substring(6);
				let commissionText = $(offers[i]).find('p').eq(2).text().substring('commission'.length + 2);

				let rent = +rentText;
				let commission = +commissionText;
				console.log(type);
				console.log(rent);
				console.log(commission);
				let rentAndCom = rent + (commission * rent) / 100;
				if(budget >= rentAndCom){
					found = true;
					//<h1>Agency profit: 0 lv.</h1>
					let currentProfit = +$('h1').text().split(' ')[2];
					let commisToTake = (commission * rent) / 100;
					currentProfit += 2 * commisToTake;
					$('h1').text(`Agency profit: ${currentProfit} lv.`);
					$(offers[i]).empty();
					let famP = $('<p>').text(familyName);
					let liveP = $('<p>').text('live here now');
					let moveOutButton = $('<button>').text('MoveOut');

					moveOutButton.on('click', (event) => {
						event.target.parentNode.remove();
						message.text(`They had found cockroaches in ${familyName}\'s apartment`);
					});

					$(offers[i]).append(famP);
					$(offers[i]).append(liveP);
					$(offers[i]).append(moveOutButton);

					break;			
				}
			}	
		}
		if(found){
			message.text('Enjoy your new home! :))');
		}else{
			message.text('We were unable to find you a home, so sorry :(');
		}

		//clear 
		$('input[name="familyBudget"]').val('');
		$('input[name="familyApartmentType"]').val('');
		$('input[name="familyName"]').val('');
	});
}