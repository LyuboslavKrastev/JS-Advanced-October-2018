(function () {
    function extensibleObject() {
    let obj = {
        extend: function(templateObject){
            for(let propety of Object.keys(templateObject)){
                if(typeof(templateObject[propety]) == 'function'){
                    /*To make a function shared between all instances, 
                    it’ll have to be attached to the prototype instead of the instance.*/
                    Object.getPrototypeOf(obj)[propety] = templateObject[propety];
                } else {
                    obj[propety] = templateObject[propety];
                }
            }
        }
    };

    return obj;
}
})();