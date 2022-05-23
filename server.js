let express = require('express');

let app = express();

app.use(express.static(__direname + '/dist/argon-design-system-angular'));

app.get('/*', (req, resp) => {
    resp.sendFile(__direname + '/dist/argon-design-system-angular/index.html');
});

app.listen(process.env.PORT || 8080);