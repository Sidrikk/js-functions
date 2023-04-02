import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomainsCount = (emails) => {
  return emails.reduce((result, email) => {
    let domain = email.split('@')[1];
    if (freeEmailDomains.includes(domain)) {
      result[domain] ? result[domain] += 1 : result[domain] = 1;
    }
    return result;
  }, {})
}


export default getFreeDomainsCount;
// END