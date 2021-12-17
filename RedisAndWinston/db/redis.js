import { createClient } from 'redis';

const client = createClient({
    url: 'redis://localhost:6377'
});

export default client;