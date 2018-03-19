"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("egg-mock/bootstrap");
describe('test/app/controller/user.test.js', () => {
    it('should assert', () => {
        const pkg = require('../../../package.json');
        bootstrap_1.assert(bootstrap_1.app.config.keys.startsWith(pkg.name));
    });
    it('should GET /', () => {
        return bootstrap_1.app.httpRequest()
            .get('/')
            .expect(200);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQStDO0FBRS9DLFFBQVEsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFHLEVBQUU7SUFFOUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7UUFDckIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDN0Msa0JBQU0sQ0FBQyxlQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtRQUNwQixNQUFNLENBQUMsZUFBRyxDQUFDLFdBQVcsRUFBRTthQUNuQixHQUFHLENBQUMsR0FBRyxDQUFDO2FBRVIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==