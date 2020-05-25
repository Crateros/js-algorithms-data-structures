Gary is an avid hiker. He tracks his hikes meticulously, paying close
attention to small details like topography. During his last hike,
he took exactly n steps. For every step he took, he noted if it was an
uphill or a downhill step. Gary's hikes start and end at sea level. We define
the following terms:

A mountain is a non-empty sequence of consecutive steps above sea level,
starting with a step up from sea level and ending with a step down to sea level.
A valley is a non-empty sequence of consecutive steps below sea level,
starting with a step down from sea level and ending with a step up to sea level.
Given Gary's sequence of up and down steps during his last hike, find
and print the number of valleys he walked through.
U = step up
D = step down


function processData(input) {
    var holding = input.split('\n');
    var hike = holding[1].split('');
    var inValley = false;
    var valleys = 0;
    var elevation = 0;
    var ascent = 0;
    var descent = 0;

    for (var i = 0; i < hike.length; i++) {
        if (hike[i] === 'U') {
            elevation ++;
            //console.log(hike[i]);
            //console.log(elevation);
            if(elevation <= 0) {
                ascent ++;
                //console.log("in valley, ascending", ascent);
            }
        }
        else {
            elevation --;
            //console.log(hike[i]);
            //console.log(elevation);
            if(elevation < 0) {
                descent ++;
                //console.log("in valley, descending", descent);
                inValley = true;
            }
        }
        if (inValley === true) {
            if (descent == ascent) {
                valleys ++;
                inValley = false;
            }
        }
    }
    console.log(valleys);
}
