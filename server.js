const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const path = require('path');

const app = express();

// allow cross domain
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema, // schema: schema
    graphiql: true,
  })
);

const buildPath = path.join(__dirname, 'client/build');
app.use(express.static(buildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));