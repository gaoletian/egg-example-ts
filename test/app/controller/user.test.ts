import {app, assert} from 'egg-mock/bootstrap';

describe('test/app/controller/user.test.js', () => {

    it('should assert', () => {
        const pkg = require('../../../package.json');
        assert(app.config.keys.startsWith(pkg.name));
    });

    it('should GET /', () => {
        return app.httpRequest()
            .get('/')
            // .expect('hi, egg')
            .expect(200);
    });
});
