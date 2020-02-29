import createApp from './app';
import config from './config';

const app = createApp();

// eslint-disable-next-line no-console
app.listen(config.PORT || 8080, () => console.log('Server on Port 8080'));
