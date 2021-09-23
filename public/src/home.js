

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  // edit to make fancier later :)
  let counter = 0;
  for (let book of books) {
    for (let i = 0; i < book.borrows.length; i++)
      if (book.borrows[i].returned === false) {
        counter++;
      }
  }
  return counter;
}


// # Problem solving tips:

// Keep in mind that this is a small part of the entire journey:
// 1. Understand the problem - reflect the question back into your our words.
//     -  Do you understand all the words used in stating the problem?
//     -  What are you asked to find or show?
//     -  Can you restate the problem in your own words?
//     -  Can you think of a picture or diagram that might help you understand the problem?
//     -  Is there enough information to enable you to find a solution?

// 2. Devise a plan
//     * Guess and check           |   * Look for a pattern
//     * Make an orderly list      |   * Draw a picture
//     * Eliminate possibilities   |   * Solve a simpler problem 
//     * Use symmetry              |   * Use a model
//     * Consider special cases    |   * Work backwards
//     * Use direct reasoning      |   * Use a formula
//     * Solve an equation         |   * Be ingenious

// 3. Carry out the plan
//     * Third. Carry out your plan.
//     * Carrying out your plan of the solution, check each step. Can you see clearly that the step is correct? Can you prove that it is correct?

// 4. Look back -refactor
//     * Fourth. Examine the solution obtained.
//     * Can you check the result? Can you check the argument?
//     * Can you derive the solution differently? Can you see it at a glance?
//     * Can you use the result, or the method, for some other problem?

// teddy - TA

function _helperSorted(obj){
  const keys = Object.keys(obj);
  return keys.sort((keyA, keyB) => {
    if (obj[keyA] > obj[keyB]) {
      return -1;
    } else if (obj[keyB] > obj[keyA]) {
      return 1;
    } else {
      return 0;
    }
  });
}




function getMostCommonGenres(books) {
  const count = books.reduce((acc, { genre }) => {
    if(acc[genre]) {
      acc[genre] += 1;
    } else {
      acc[genre] = 1;
    }
    return acc;
  }, {});
  const sorted = _helperSorted(count);
  return sorted.map((name) => ({
    name,
    count: count[name],
  })).slice(0, 5);
}




function getMostPopularBooks(books) {
let count = 5;
const borrows = books.map(book => 
  ( {name: book.title, count: book.borrows.length }));
  borrows.sort((var1,var2) => var2.count - var1.count);
return borrows.slice(0,count);
};



function getMostPopularAuthors(books, authors) {  
  let authorArr = [];
  for (let i = 0; i < authors.length; i++){
    for (let j = 0; j< books.length; j++){
      if (authors[i].id === books[j].authorId){
        let author =
        { name: authors[i].name.first + " " + authors[i].name.last,
          count: books[j].borrows.length
          }
          authorArr.push(author);
      }
    }
  }
    return authorArr.sort((authorA,authorB) => authorB.count - authorA.count).slice(0,5);
};




module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};