//returns account object w matching id string
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) =>
    a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  for (let book of books) {
    for (let borrow of book.borrows) {
      if (borrow.id === account.id) {
        counter++;
      }
    }
  }
  return counter;
}


function getBooksPossessedByAccount(account, books, authors) {
  const checkedOutBooks = books.filter((book) => {
    //filtering the books by account and not returned
    let firstEntry = book.borrows[0];
    return firstEntry.id === account.id && firstEntry.returned === false;
  });
  //appending the checked out book with author that matches author id
  const checkedOutWithAuthor = checkedOutBooks.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return {
      ...book,
      author: author,
    };
  });
  return checkedOutWithAuthor;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
