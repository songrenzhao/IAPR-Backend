import createApp from './app';

const app = createApp();

// eslint-disable-next-line no-console
app.listen(process.env.PORT || 8080, () => console.log(`Server on Port ${port}`));
