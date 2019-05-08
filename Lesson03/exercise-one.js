const workingWeek = ['Monday', 'Tuesday', 'Saturday', 'Wednesday', 'Thursday'];

workingWeek.push('Friday.');
console.log(workingWeek);
workingWeek.splice(2,1);

const workingWeekList = workingWeek.join(', ');
console.log(workingWeekList);
