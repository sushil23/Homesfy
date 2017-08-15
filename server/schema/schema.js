const graphql = require('graphql');
const GraphQLDate = require('graphql-date');
const _ = require('lodash');

const {Book} = require('./../models/book');
const {Transaction} = require('./../models/transaction');
const {User} = require('./../models/user');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLNonNull,
    GraphQLSchema
} = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: {
        _id: {type: GraphQLString},
        name: {type: GraphQLString},
        author: {type: GraphQLString},
        isAvailable: {type: GraphQLBoolean}
    }
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        _id: {type: GraphQLString},
        userName: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        contactNumber: {type: GraphQLString}
    }
});

const TransactionType = new GraphQLObjectType({
    name: 'Transaction',
    fields: () => ({
        _id: {type: GraphQLString},
        user: {
            type: UserType,
            resolve(parentValue, args) {
                return User.findById(parentValue.userId).then((doc) => {
                    return doc;
                }, (err) => {
                    console.log(err);
                });
            }
        },
        book: {
            type: BookType,
            resolve(parentValue, args) {
                return Book.findById(parentValue.bookId).then((doc) => {
                    return doc;
                }, (err) => {
                    console.log(err);
                });
            }
        },
        dueDate: {type: GraphQLDate},
        isBorrow: {type: GraphQLBoolean}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return Book.findById(args.id).then((doc) => {
                    return doc;
                }, (err) => {
                    console.log(err);
                });
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve() {
                return Book.find().then((docs) => {
                    return docs;
                }, (err) => {
                    console.log(err);
                });
            }
        },
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return User.findById(args.id).then((doc) => {
                    return doc;
                }, (err) => {
                    console.log(err);
                });
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve() {
                return User.find().then((docs) => {
                    return docs;
                }, (err) => {
                    console.log(err);
                });
            }
        },
        transaction: {
            type: TransactionType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return Transaction.findById(args.id).then((doc) => {
                    return doc;
                });
            }
        },
        transactions: {
            type: new GraphQLList(TransactionType),
            resolve() {
                return Transaction.find().then((docs) => {
                    return docs;
                }, (err) => {
                    console.log(err);
                });
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                userName: {type: new GraphQLNonNull(GraphQLString)},
                name: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                contactNumber: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {userName, name, email, contactNumber}) {
                var user = new User({
                    userName,
                    name,
                    email,
                    contactNumber
                });

                return user.save().then((doc) => {
                    return doc;
                }, (err) => {
                    console.log(err);
                });
            }
        },
        editUser: {
            type: UserType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)},
                userName: {type: GraphQLString},
                name: {type: GraphQLString},
                email: {type: GraphQLString},
                contactNumber: {type: GraphQLString}
            },
            resolve(parentValue, args) {
                var body = _.pick(args, ['userName', 'name', 'email', 'contactNumber']);
                return User.findByIdAndUpdate(args.id, {$set: body}, {new: true}).then((user) => {
                    if (!user) {
                        return console.log('Not updated');
                    }
                    return user;
                }, (err) => {
                    console.log(err);
                });
            }
        },
        deleteUser: {
            type: UserType,
            args: {id: {type: new GraphQLNonNull(GraphQLString)}},
            resolve(parentValue, args) {
                return User.findByIdAndRemove(args.id).then((user) => {
                    if (!user) {
                        return console.log('Unable to find user');
                    }
                    return user;
                }, (err) => {
                    console.log(err);
                });
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                author: {type: new GraphQLNonNull(GraphQLString)},
                isAvailable: {type: GraphQLBoolean}
            },
            resolve(parentValue, {name, author, isAvailable}) {
                var book = new Book({
                    name,
                    author,
                    isAvailable
                });

                return book.save().then((doc) => {
                    return doc;
                }, (err) => {
                    console.log(err);
                });
            }
        },
        deleteBook: {
            type: BookType,
            args: {id: {type: new GraphQLNonNull(GraphQLString)}},
            resolve(parentValue, args) {
                return Book.findByIdAndRemove(args.id).then((book) => {
                    if (!book) {
                        return console.log('Unable to find book');
                    }
                    return book;
                }, (err) => {
                    console.log(err);
                });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});