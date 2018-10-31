function solve(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = {
            width: matrix[i][0],
            height: matrix[i][1],
            area: function() {
            // The this keyword is important because the width and height are not local variables, but are part of the object.
                return this.width * this.height; 
            },
            compareTo(other) {
                 let areaDifference = other.area() - this.area();

                 if(areaDifference !== 0){
                    return areaDifference;
                 }

                 return other.width - this.width;
            }
        }     
    }

    return matrix.sort((a, b) => a.compareTo(b));
}

console.log(solve([[10,5],[5,12]]));