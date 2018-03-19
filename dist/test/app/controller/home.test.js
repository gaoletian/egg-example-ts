'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("egg-mock/bootstrap");
describe('test/app/controller/home.test.js', () => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdGVzdC9hcHAvY29udHJvbGxlci9ob21lLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLGtEQUErQztBQUUvQyxRQUFRLENBQUMsa0NBQWtDLEVBQUUsR0FBRyxFQUFFO0lBRTlDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1FBQ3JCLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzdDLGtCQUFNLENBQUMsZUFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7UUFDcEIsTUFBTSxDQUFDLGVBQUcsQ0FBQyxXQUFXLEVBQUU7YUFDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUVSLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=