   /**
     * EquityJs
     *
     * A Node.js Library For The Equity Eazzy API 
     * 
     * Mohammed Sohail <sohailsameja@gmail.com>
     * Released Under AGPL-v3 License
     *
     * Examples
     *
     */

// EquityJs Library
const Equity = require('equityjs');

// Ensure You Have These Keys 
const myKey = process.env.CONSUMER_KEY;
const mySecret = process.env.CONSUMER_TOKEN;

// refresh The Token Every 1 Hour Or Enter Custome Time Here
const refreshToken = 59*60*1000

// Initialize EquityJs
const equity = new Equity({
  consumerKey: myKey,
  consumerSecret: mySecret
});

// Obtain A New Token And Let It Update Every 1 Hour/ Custom Time
// grant_type is always 'password'
setInterval(function () {
equity.getToken({
    username: 'YOUR_EQUITY_API_USERNAME',
    password: 'YOUR_EQUITY_API_PASSWORD',
    grant_type: 'password'
});
}, refreshToken);

// Changing Your Merchant Password
equity.changePassword({
        merchantId: 'YOUR_EQUITY_MERCHANT_ID',
        currentPassword: 'YOUR_CURRENT_EQUITY_PASSWORD',
        newPassword: 'YOUR_NEW_EQUITY_PASSWORD'
}, function(error, response) {
    // Handle The Response Here
});