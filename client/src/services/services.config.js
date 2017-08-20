import ApolloClient from 'apollo-client';

config.$inject = ['apolloProvider'];
export default function config(apolloProvider) {
    const client = new ApolloClient();

    apolloProvider.defaultClient(client);
}