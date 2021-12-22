import request from 'supertest';
import app from '../app';

describe('Product routes', () => {
    describe('GET products', () => {
        it('should return json', (done) => {
            request(app)
                .get('/')
                .expect(200, () => done());
        });

        it('should return json', (done) => {
            request(app)
                .get('/products/hola')
                .expect(200, (_, res) => {
                    expect(typeof res.body).toBe('object');
                });
        });
    });
});