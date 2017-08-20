import gql from 'graphql-tag';

const queries = {
    getBooks: gql`
        query getBooks {
            books {
                _id,
               name,
               author,
               isAvailable
            }
        }
    `,
    addBook: gql`
        mutation addBook($name: String!, $author: String!, $isAvailable: Boolean) {
            addBook(name: $name, author: $author, isAvailable: $isAvailable) {
                _id,
                name,
                author,
                isAvailable
            }
        }
    `,
    getUsers: gql`
        query getUsers {
            users {
                _id,
                userName,
                name,
                email,
                contactNumber
            }
        }
    `,
    addUser: gql`
        mutation addUser($userName: String!, $name: String!, $email: String!, $contactNumber: String!) {
            addUser(userName: $userName, name: $name, email: $email, contactNumber: $contactNumber) {
                _id,
                userName,
                name,
                email,
                contactNumber
            }
        }
    `,
    getUserByContactNo: gql`
        query getUserByContactNo($contactNo: String!) {
            userByContactNo(contactNo: $contactNo) {
                _id,
                userName,
                name,
                email
            }
        }
    `,
    getTransactions: gql`
        query getTransactions {
            transactions {
                _id,
                user {
                    name
                },
                book {
                    name
                },
                dueDate,
                isBorrow
            }
        }
    `,
    createTransaction: gql`
        mutation createTransaction($transType: String!, $bookId: String!, $selectedUserId: String!) {
            createTransaction(transType: $transType, bookId: $bookId, selectedUserId: $selectedUserId) {
                _id
            }
        }
    `
};

export default queries;