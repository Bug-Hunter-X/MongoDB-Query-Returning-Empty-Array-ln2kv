```javascript
const query = { name: /John/i }; // Case-insensitive search

// This will return an empty array if there is no matching document
db.collection('users').find(query).toArray((err, result) => {
  if (err) throw err; // Handle errors properly
  console.log(result); // Prints the matched documents
});
```