# Introduction 
A simple practice React project to post data into GraphQL server using mutations and then fetch data using queries. The retrieved data is displayed in the form of a list. From the header menu click on "Reversed" to navigate to a page with the same data in reversed form.


# Getting Started
1. Open cmd, naviagte to root directory and run the following commands.
npm install
npm run
The application runs at localhost:3000
2. Open another cmd, naviagte to root directory/server and run the following commands.
npm install
npm run
The server runs at localhost:4000

Insert data using mutations on GraphQL playboard and it will be refelected on the application.

# Sample Mutation:
mutation {
  post(
    description: "Prisma gives you a powerful database toolkit ??"
    url: "https://prisma.io"
  ) {
    id
  }
}
