
function calorieCalc ( weight, distance, time  ) {


    function getMETS ( distance, time) {
        var retval;
        var lookup = [
            {mph: 4, METS: 6 },
            {mph: 5, METS: 8.3 },
            {mph: 5.2, METS: 9 },
            {mph: 6, METS: 9.8 },
            {mph: 6.7, METS: 10.5 },
            {mph: 7, METS: 11 },
            {mph: 7.5, METS: 11.5 },
            {mph: 8, METS: 11.8 },
            {mph: 8.6, METS: 12.3 },
            {mph: 9, METS: 12.8 },
            {mph: 10, METS: 14.5 },
            {mph: 11, METS: 16 },
            {mph: 12, METS: 19 }

            ];

        var mph = distance/(time/3600);

        if (mph > 12) {
            alert('You cannot run that fast');
        }

        var found = false;
        lookup.forEach (function (current ) {
            if ((current.mph > mph) && (found === false) ) {
                found = true;
                retval = current.METS;
            }
        });

        return retval;

    }

    // Weight on charts is in KG
    weight *= 2.2;


    var calories = getMETS(distance, time) * weight * time/3600;

    return calories;
        
    }

module.exports = calorieCalc;