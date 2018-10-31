function processCommands(commands){
	let commandProcessor = (function() {
    	let collection = [];

    	function add (item){
        	collection.push(item);
   		}
    	function remove(item){
        	collection = collection.filter((el) => {
            	return el !== item;
        	});
    	}
    	function print(){
        	console.log(collection.join(','));
    	}

    	return {add, remove, print}
    })();
    
	commands.forEach((tokens) => {
        let [action, item] = tokens.split(' ');
        commandProcessor[action](item);
	});
}

processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);

