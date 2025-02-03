```javascript
const query = { name: { $regex: /John/i } }; // Case-insensitive search using $regex and 'i' flag

// This will return an array of matching documents, handling cases correctly
db.collection('users').find(query).toArray((err, result) => {
  if (err) throw err; // Handle errors properly
  console.log(result); // Prints the matched documents
});
```