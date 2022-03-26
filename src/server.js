import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://www.omdbapi.com/?apikey=fbf45cd4",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetTitle {
        rates(title: "Joker") {
          Title
        }
      }
    `,
  })
  .then((result) => console.log("result --->", result));

export default client;
