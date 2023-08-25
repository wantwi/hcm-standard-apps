export const RecurringEarningData = [
    { id: 1, name: 'Expense Tracking Team', companies: ['Atlas One', 'React Store', 'Motion Group', 'Oceans Grill', 'Round Menu'], status: 0 },
    { id: 2, name: 'Data Analysis Team', companies: ['Atlas One', 'Motion Group', 'Oceans Grill', 'Round Menu'], status: 1 },
    { id: 3, name: 'Dreamville Team', companies: ['Atlas One', 'React Store', 'Motion Group', 'Oceans Grill', 'Round Menu'], status: 1 },
    { id: 4, name: 'Business Process Team', companies: ['Atlas One', 'React Store', 'Motion Group', 'Oceans Grill', 'Round Menu'], status: 0 },
    { id: 5, name: 'Networking Team', companies: ['Atlas One', 'React Store', 'Oceans Grill'], status: 1 },
    { id: 1, name: 'Expense Tracking Team', companies: ['Atlas One', 'React Store', 'Motion Group', 'Oceans Grill', 'Round Menu'], status: 0 },
    { id: 2, name: 'Data Analysis Team', companies: ['Atlas One', 'Motion Group', 'Oceans Grill', 'Round Menu'], status: 1 },
    { id: 3, name: 'Dreamville Team', companies: ['Atlas One', 'React Store', 'Motion Group', 'Oceans Grill', 'Round Menu'], status: 1 },
    { id: 4, name: 'Business Process Team', companies: ['Atlas One', 'React Store', 'Motion Group', 'Oceans Grill', 'Round Menu'], status: 0 },
    { id: 5, name: 'Networking Team', companies: ['Atlas One', 'React Store', 'Oceans Grill'], status: 1 },
    { id: 1, name: 'Expense Tracking Team', companies: ['Atlas One', 'React Store', 'Motion Group', 'Oceans Grill', 'Round Menu'], status: 0 },
    { id: 2, name: 'Data Analysis Team', companies: ['Atlas One', 'Motion Group', 'Oceans Grill', 'Round Menu'], status: 1 },
    { id: 3, name: 'Dreamville Team', companies: ['Atlas One', 'React Store', 'Motion Group', 'Oceans Grill', 'Round Menu'], status: 1 },
    { id: 4, name: 'Business Process Team', companies: ['Atlas One', 'React Store', 'Motion Group', 'Oceans Grill', 'Round Menu'], status: 0 },
    { id: 5, name: 'Networking Team', companies: ['Atlas One', 'React Store', 'Oceans Grill'], status: 1 },
].map(x => { return { ...x, strStatus: x.status === 1 ? 'Active' : 'Inactive', numberOfCompanies: x.companies.length } });

export const RecurringEarningData2 = [
    { id: 1, staffId: 'PSL001', name: 'James Ablorh', units: 5, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL002', name: 'Mawuli Ablorh', units: 3, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL003', name: 'Adden Maxwell', units: 1, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL004', name: 'Offlang Bull', units: 1, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL005', name: 'Ji Xinping', units: 1, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL006', name: 'Peter Malestrom', units: 1, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL007', name: 'James Ablorh', units: 2, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL008', name: 'Mighty Obianuju', units: 5, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL009', name: 'Wande Coal', units: 1, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL0010', name: 'James Ashitey', units: 1, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL0012', name: 'James Maiduguri', units: 1, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL0013', name: 'James Healthy', units: 2, expDate: "12/Dec/2024" }

];

export const loanData = [
    { id: 1, staffId: 'PSL001', loanType: 'Car Loan', principal: '2000', name: 'James Ablorh', units: 5, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL002', loanType: 'Student Loan', principal: '2000', name: 'Mawuli Ablorh', units: 3, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL003', loanType: 'Covid Relief Loan', principal: '2000', name: 'Adden Maxwell', units: 1, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL004', loanType: 'Mortgage', principal: '2000', name: 'Offlang Bull', units: 1, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL005', loanType: 'Car Loan', principal: '2000', name: 'Ji Xinping', units: 1, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL006', loanType: 'Student Loan', principal: '2000', name: 'Peter Malestrom', units: 1, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL007', loanType: 'Covid Relief Loan', principal: '2000', name: 'James Ablorh', units: 2, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL008', loanType: 'Mortgage', principal: '2000', name: 'Mighty Obianuju', units: 5, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL0010', loanType: 'Car Loan', principal: '2000', name: 'James Ashitey', units: 1, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL0012', loanType: 'Student Loan', principal: '2000', name: 'James Maiduguri', units: 1, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL009', loanType: 'Covid Relief Loan', principal: '2000', name: 'Wande Coal', units: 1, expDate: "12/Dec/2024" },
    { id: 1, staffId: 'PSL0013', loanType: 'Mortgage', principal: '2000', name: 'James Healthy', units: 2, expDate: "12/Dec/2024" }

];



export const AbsentTableData = [
    { id: 1, name: 'Michael Nartey', date: "22/11/2020", hours: "20", GL: "Department GL", status: 0 },
    { id: 2, name: 'Michael Nartey', date: "22/11/2020", hours: "20", GL: "Department GL", status: 1 },
    { id: 3, name: 'Michael Nartey', date: "22/11/2020", hours: "20", GL: "Department GL", status: 1 },
    { id: 4, name: 'Michael Nartey', date: "22/11/2020", hours: "20", GL: "Department GL", status: 0 },
    { id: 5, name: 'Michael Nartey', date: "22/11/2020", hours: "20", GL: "Department GL", status: 1 },
].map(x => { return { ...x, strStatus: x.status === 1 ? 'Active' : 'Inactive', } });


export const PayPeriodData = [
    { id: 1, year: '2021', period: "001", periodName: "January", startDate: "1-jan-2021", endDate: "31-Jan-2021", status: 1 },
    { id: 2, year: '2021', period: "002", periodName: "Febuary", startDate: "1-Feb-2021", endDate: "28-Feb-2021", status: 0 },
    { id: 3, year: '2021', period: "003", periodName: "March", startDate: "1-March-2021", endDate: "31-March-2021", status: 0 },
    { id: 4, year: '2021', period: "004", periodName: "April", startDate: "1-April-2021", endDate: "30-April-2021", status: 0 },
    { id: 5, year: '2021', period: "005", periodName: "May", startDate: "1-May-2021", endDate: "31-May-2021", status: 0 },
    { id: 6, year: '2021', period: "006", periodName: "June", startDate: "1-Jun-2021", endDate: "30-Jun-2021", status: 0 },
    { id: 7, year: '2021', period: "007", periodName: "July", startDate: "1-Jul-2021", endDate: "31-Jul-2021", status: 0 },
    { id: 8, year: '2021', period: "008", periodName: "August", startDate: "1-Aug-2021", endDate: "31-Aug-2021", status: 0 },
    { id: 9, year: '2021', period: "009", periodName: "September", startDate: "1-Sept-2021", endDate: "30-Sept-2021", status: 0 },
    { id: 10, year: '2021', period: "010", periodName: "October", startDate: "1-Oct-2021", endDate: "31-Oct-2021", status: 0 },
    { id: 11, year: '2021', period: "011", periodName: "November", startDate: "1-Nov-2021", endDate: "30-Nov-2021", status: 0 },
    { id: 12, year: '2021', period: "012", periodName: "December", startDate: "1-Dec-2021", endDate: "31-Dec-2021", status: 0 },
].map(x => { return { ...x, strStatus: x.status === 1 ? 'Active' : 'Inactive' } });

export const TimesheetData = [
    { id: 1, columnNo: '101', columnName: "One", EarningCode: "011", status: 0 },
    { id: 2, columnNo: '101', columnName: "One", EarningCode: "011", status: 1 },
    { id: 3, columnNo: '101', columnName: "One", EarningCode: "011", status: 1 },
    { id: 4, columnNo: '101', columnName: "One", EarningCode: "011", status: 0 },
    { id: 5, columnNo: '101', columnName: "One", EarningCode: "011", status: 1 },
].map(x => { return { ...x, strStatus: x.status === 1 ? 'Active' : 'Inactive' } });

export const TimesheetDataEntry = [
    { id: 1, period: "001", code: "001", periodName: "January", startDate: "1-jan-2021", endDate: "31-Jan-2021", status: 1 },
    { id: 2, period: "002", code: "002", periodName: "Febuary", startDate: "1-Feb-2021", endDate: "28-Feb-2021", status: 0 },
    { id: 3, period: "003", code: "003", periodName: "March", startDate: "1-March-2021", endDate: "31-March-2021", status: 0 },
    { id: 4, period: "004", code: "004", periodName: "April", startDate: "1-April-2021", endDate: "30-April-2021", status: 0 },
    { id: 5, period: "005", code: "005", periodName: "May", startDate: "1-May-2021", endDate: "31-May-2021", status: 0 },
    { id: 6, period: "006", code: "006", periodName: "June", startDate: "1-Jun-2021", endDate: "30-Jun-2021", status: 0 },
    { id: 7, period: "007", code: "007", periodName: "July", startDate: "1-Jul-2021", endDate: "31-Jul-2021", status: 0 },
    { id: 8, period: "008", code: "008", periodName: "August", startDate: "1-Aug-2021", endDate: "31-Aug-2021", status: 0 },
    { id: 9, period: "009", code: "009", periodName: "September", startDate: "1-Sept-2021", endDate: "30-Sept-2021", status: 0 },
    { id: 10, period: "010", code: "010", periodName: "October", startDate: "1-Oct-2021", endDate: "31-Oct-2021", status: 0 },
    { id: 11, period: "011", code: "011", periodName: "November", startDate: "1-Nov-2021", endDate: "30-Nov-2021", status: 0 },
    { id: 12, period: "012", code: "012", periodName: "December", startDate: "1-Dec-2021", endDate: "31-Dec-2021", status: 0 },
].map(x => { return { ...x, strStatus: x.status === 1 ? 'Active' : 'Inactive' } });


export const Employees = [
    { fName: 'Joseph Dugbatey - PSL210', fullName: 'Joseph Dugbatey', id: 'PSL210', pkid: 1 },
    { fName: 'Mary Offei - PSL211', fullName: 'Mary Offei', id: 'PSL211', pkid: 2 },
    { fName: 'George Makron - PSL213', fullName: 'George Makron', id: 'PSL213', pkid: 3 },
    { fName: 'Norridge Bull - PSL214', fullName: 'Norridge Bull', id: 'PSL214', pkid: 4 },
    { fName: 'Evans Zumalo - PSL215', fullName: 'Evans Zumalo', id: 'PSL215', pkid: 5 }
];