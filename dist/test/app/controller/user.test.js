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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdGVzdC9hcHAvY29udHJvbGxlci91c2VyLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFBK0M7QUFFL0MsUUFBUSxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsRUFBRTtJQUU5QyxFQUFFLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtRQUNyQixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUM3QyxrQkFBTSxDQUFDLGVBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFO1FBQ3BCLE1BQU0sQ0FBQyxlQUFHLENBQUMsV0FBVyxFQUFFO2FBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFFUixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9