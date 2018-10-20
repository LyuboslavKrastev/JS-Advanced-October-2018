function attachEventsListeners(){
    document.getElementById('convert').addEventListener('click', convert);

    function convert(){
        let inputSelect = document.getElementById('inputUnits').value;       
        let outputSelect = document.getElementById('outputUnits').value;
        let inputDistance = +document.getElementById('inputDistance').value;

        if(inputSelect === outputSelect){
            return document.getElementById('outputDistance').value = inputDistance;
        }
        
        let distanceInMeters = convertToMeters();

        console.log(inputSelect);

        console.log(distanceInMeters);

        let result = 0;

        if(outputSelect === 'km'){
            result = distanceInMeters / 1000;
        } else if(outputSelect === 'm'){
            result = distanceInMeters;
        } else if(outputSelect === 'cm'){
            result = distanceInMeters * 100;
        } else if (outputSelect === 'mm'){
            result = distanceInMeters * 1000;
        } else if (outputSelect === 'mi'){
            result = distanceInMeters / 1609.34;
        } else if (outputSelect === 'yrd'){
            result = distanceInMeters / 0.9144;
        } else if (outputSelect === 'ft'){
            result = distanceInMeters / 0.3048;
        } else if (outputSelect === 'in'){
            result = distanceInMeters / 0.0254;
        }       
        document.getElementById('outputDistance').value = result;       

        function convertToMeters(){
            if(inputSelect === 'km'){
                return inputDistance * 1000;
            } else if(inputSelect === 'm'){
                return inputDistance;
            } else if(inputSelect === 'cm') {
                return inputDistance * 0.01;
            } else if(inputSelect === 'mm'){
                return inputDistance * 0.001;
            } else if(inputSelect === 'mi'){
                return inputDistance * 1609.34;
            } else if (inputSelect === 'yrd'){
                return inputDistance * 0.9144;
            } else if (inputSelect === 'ft'){
                return inputDistance * 0.3048;
            } else if (inputSelect === 'in'){
                return inputDistance * 0.0254;
            }
        }
    }
}