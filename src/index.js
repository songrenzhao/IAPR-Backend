import createApp from './app';
import config from './config';

const app = createApp();

const port = config.env.PORT || 8080;

// eslint-disable-next-line no-console
app.listen(config.env.PORT || 8080, () => console.log(`Server on Port ${port}`));
