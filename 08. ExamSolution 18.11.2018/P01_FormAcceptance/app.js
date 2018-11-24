function acceptance() {
	/*When all fields (company, product, quantity and scrape) are filled with correct input.
- Company and product needs to be non-empty strings.
- Quantity and scrape needs to be numbers.
 */
	let companyName = $('input[name="shippingCompany"]').val();
	let productName = $('input[name="productName"]').val();
	let productQuantity = $('input[name="productQuantity"]').val();
	let productScrape = $('input[name="productScrape"]').val();

	if(companyName && productName && productQuantity && productScrape){
		if(isNaN(productQuantity) || isNaN(productScrape)){
			return;
		}
		if(companyName === '' || productName === ''){
			return;
		}
		let quantity = +productQuantity;
		let scrape = +productScrape;
		let realQuantity = quantity - scrape;
		if(realQuantity > 0){
			let warehouse = $('#warehouse');
			let outOfStockButton = $('<button type="button">Out of stock</button>');
			outOfStockButton.on('click', (event) => {
				event.target.parentNode.remove();
			});
			let div = $('<div>');
				
			let p = $('<p>')
				.text(`[${companyName}] ${productName} - ${realQuantity} pieces`);

			div.append(p);
			div.append(outOfStockButton);
			warehouse.append(div);

			// reset input fields
			$('input[name="shippingCompany"]').val('');
			$('input[name="productName"]').val('');
			$('input[name="productQuantity"]').val('');
			$('input[name="productScrape"]').val('');
		}				
	}
}
