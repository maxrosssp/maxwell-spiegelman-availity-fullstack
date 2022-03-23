import Papa from 'papaparse';

const validateParentheses = (str = '') => {
    let openParenthesesCount = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            openParenthesesCount += 1;
        } else if (str[i] === ')') {
            openParenthesesCount -= 1;
            
            if (openParenthesesCount < 0) {
                return false;
            }
        }
    }

    return openParenthesesCount === 0;
};

const identity = (val) => val;

const keyValueMapper = {
    userId: identity, 
    first: identity, 
    last: identity,
    version: (val) => isNaN(parseInt(val)) ? val : parseInt(val), 
    company: identity
};

const mapRowToObject = (row) => {
    const obj = {};
    if (row.length === 4) {
        const [first, last] = row[1].split(' ');
        row = [row[0], first, last, row[2], row[3]];
    }
    Object.keys(keyValueMapper).forEach((key, index) => obj[key] = keyValueMapper[key](row[index]));
    return obj;
};

const isHeader = (row) => row.join(',').toLowerCase().replaceAll(' ', '').match(/(firstname|lastname|version)/);

const getCompanyEnrollments = (data = []) => {
    const firstRow = data[0] || [];
    const header = isHeader(firstRow) ? firstRow : undefined;

    const users = data.slice(header ? 1 : 0).map(mapRowToObject);

    users.sort((a, b) => a.version - b.version);
    users.sort((a, b) => a.userId.localeCompare(b.userId));

    const companies = [];
    (new Array(...(new Set(users.map(user => user.company))))).forEach(company => {
        const companyUsers = users.filter(user => user.company === company);
        let filteredUsers = companyUsers.filter((user, index) => index + 1 < companyUsers.length ? user.userId !== companyUsers[index + 1].userId : true);
        
        filteredUsers.sort((a, b) => a.first.localeCompare(b.first));
        filteredUsers.sort((a, b) => a.last.localeCompare(b.last));

        if (header) {
            filteredUsers.unshift(mapRowToObject(header));
        }

        if (firstRow.length === 4) {
            filteredUsers = filteredUsers.map(user => [user.userId, user.first + ' ' + (user.last || ''), user.version, user.company]);
        }

        companies.push({
            name: company,
            count: filteredUsers.length,
            fileName: company + '_enrollments.csv',
            csvDownloadUrl: URL.createObjectURL(new Blob([Papa.unparse(filteredUsers, { header: false })]))
        });
    });

    return companies;
};

const parseEnrollmentsCsv = (file) => new Promise((resolve, reject) => {
    Papa.parse(file, {
        skipEmptyLines: true,
        error: (err, file, inputElem, reason) => reject(err + ' - ' + reason),
        complete: ({ data }) => resolve(getCompanyEnrollments(data)),
    });
});

export {
    validateParentheses,
    parseEnrollmentsCsv
};
