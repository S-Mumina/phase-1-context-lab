/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
/*
 const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}*/

// Helper function to calculate the hours worked on a specific date
const hoursWorkedOnDate = function (date) {
    const timeInEvent = this.timeInEvents.find((e) => e.date === date);
    const timeOutEvent = this.timeOutEvents.find((e) => e.date === date);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 60;
    return hoursWorked;
};

// Helper function to calculate wages earned on a specific date
const wagesEarnedOnDate = function (date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    const wagesEarned = hoursWorked * this.payPerHour;
    return wagesEarned;
};

const createEmployeeRecord = function (employeeData) {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
};

const createEmployeeRecords = function (employeeDataArray) {
    return employeeDataArray.map(createEmployeeRecord);
};

const createTimeInEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        date,
        hour: parseInt(hour, 10),
    });
    return this;
};

const createTimeOutEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour, 10),
    });
    return this;
};

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    });

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0);

    return payable;
};

const findEmployeeByFirstName = function (srcArray, firstName) {
    return srcArray.find((employee) => employee.firstName === firstName);
};

const calculatePayroll = function (employeeRecords) {
    return employeeRecords.reduce(function (totalPayroll, employee) {
        return totalPayroll + allWagesFor.call(employee);
    }, 0);
};
