const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

//dynamic webpages ,,for static go expressStatic webpage
app.set('view engine', 'ejs');

app.get('/profile', (req, resp) => {
    const user = {
        name: 'charles singh',
        age: '19',
        city: 'patna'

    }
    resp.render('profile', { user });
});

app.get('/login', (req, resp) => {
    resp.render('login');
});

// app.get('', (req, resp) => {
//     resp.sendFile(`${publicPath}/index.html`);
// });

// app.get('/about', (req, resp) => {
//     resp.sendFile(`${publicPath}/about.html`);
// });

// app.get('/login', (req, resp) => {
//     resp.sendFile(`${publicPath}/login.html`);
// });

// app.get('/logout', (req, resp) => {
//     resp.sendFile(`${publicPath}/logout.html`);
// });
// app.get('*', (req, resp) => {
//     resp.sendFile(`${publicPath}/404.html`);
// });

app.listen(4300);