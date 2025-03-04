const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

// Parse the proxy into the `http(s)` proxy format
function parseProxy(proxy) {
  const [domain, port, user, pass] = proxy.split(':');
  return `http://${user}:${pass}@${domain}:${port}`;
}

const proxyList = [];

// Load accounts from CSV
async function loadAccounts(filePath) {
  return new Promise((resolve, reject) => {
    const accounts = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        if (row.email && row.password && row.proxy) {
          accounts.push({
            email: row.email,
            password: row.password,
            proxy: parseProxy(row.proxy),
          });

          proxyList.push(parseProxy(row.proxy));
        }
      })
      .on('end', () => resolve(accounts))
      .on('error', (err) => reject(err));
  });
}


//just copy the form as many as your accounts
/*
const accountLists = [
        {
          "email": "XXXXXX",
          "password": "XXXXXX"
        },
        {
          "email": "XXXXXX",
          "password": "XXXXXX"
        }
];
*/


async function getAccountLists() {
  const accountsFile = path.resolve(__dirname, 'data/profiles.csv');
  const accountLists = await loadAccounts(accountsFile);

  // Write to proxy.txt, each proxy on a new line
  const proxyFile = path.resolve(__dirname, 'proxy.txt');
  // console.log('proxyList: ', proxyFile, proxyList);
  fs.writeFileSync(proxyFile, proxyList.join('\n'), 'utf8');

  return accountLists;
}

module.exports = getAccountLists;
