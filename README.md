# Mars Photos API Server

Queries from [Mars Photos Client](https://kchhan.github.io/mars-photos-client/) go through this Express server to connect to the NASA API

## Set Up

#### Clone the repository:

```bash
git clone https://github.com/kchhan/mars-photos-api
```

#### Create your environment file:

```bash
cp .env.example .env
```

#### Update setting in the .env file:

-   API_KEY (free API key from [NASA](https://api.nasa.gov/))

#### Install Javascript dependencies:

```bash
npm install
```

_If you don't have Node and NPM installed, [instructions here](https://www.npmjs.com/get-npm)._

#### Run an initial build:

```bash
npm run start
```

**Express Docs:**

[http://expressjs.com/](http://expressjs.com/)