# MongoDB Query Returning Empty Array

This repository demonstrates a common issue in MongoDB queries where the query returns an empty array even though there are matching documents in the collection.

The problem arises from case sensitivity in the query, specifically when using regular expressions for matching strings.

## Bug Description
The provided JavaScript code uses a regular expression for a case-insensitive search for documents with the name 'John'. However, if the case of 'John' in the database does not perfectly match the case in the query, it might not return documents.

## Bug Solution
The solution involves properly handling case-insensitive queries. In this scenario, using the `$regex` operator with the `i` flag ensures a case-insensitive search, guaranteeing accurate retrieval of matching documents.