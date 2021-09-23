function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let trueArr = [];
  let falseArr = [];
  for (let book of books) {
    if (book.borrows[0].returned === true) {
      trueArr.push(book);
    } else {
      falseArr.push(book);
    }
  }
  return [falseArr, trueArr];
}

// It should return an array of ten or fewer account objects that represents the accounts given by the IDs
// in the provided book's `borrows` array. However, each account object should include the `returned`
// entry from the corresponding transaction object in the `borrows` array.


function getBorrowersForBook(book, accounts) {
  let finalResult = [];
  let borrowedBooks = book.borrows;
  borrowedBooks.forEach(borrowedBooks => {
    let account = accounts.find(user => user.id === borrowedBooks.id);
    let user = account;
    user['returned'] =  borrowedBooks.returned;
    finalResult.push(user);
})
return finalResult.slice(0,10);
};


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
