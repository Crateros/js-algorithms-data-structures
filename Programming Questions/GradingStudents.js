// Grading students, round to multiple of 5 if current grade is less x <= 2 away
// from nearest multiple. However, cannot round if rounding would result in anything
// below a 40.
//
// Sample Input
// 4 (students)
// 73
// 67
// 38
// 33
// Sample Output
// 75
// 67
// 40
// 33

function main() {
    var n = parseInt(readLine());
    for(var a0 = 0; a0 < n; a0++){
        var grade = parseInt(readLine());
        if(grade % 5 > 2 && grade > 37) {
            grade = grade + 5 - grade % 5;
        }
        console.log(grade);
    }

}
