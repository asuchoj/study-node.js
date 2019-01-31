let http = require('http');
let url = require('url');
let fs = require('fs');

let server = new http.Server;

server.listen(80, '127.0.0.1');

server.on('request', function (req, res) {
    let parseUrl = url.parse(req.url, true);

    fs.readFile(getPageNameByPAth(parseUrl.pathname) + '.html', function (err, data) {
        if(err) throw new Error(err);

        res.end(data);
    })
});

function getPageNameByPAth(path) {
    switch (path) {
        case '/' :
        case '/home':
            return 'index';
        case '/about':
            return 'about';
        default: return 'error'
    }
}