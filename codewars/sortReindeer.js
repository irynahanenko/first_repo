// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.
// Notes:
// It's guaranteed that each string is composed of two words
// In case of two identical last names, keep the original order

function sortReindeer(reindeerNames) {
    return reindeerNames.sort((a,b) => {
      let aname = a.split(' ');
      let bname = b.split(' ');
      if (aname[1]<= bname[1]) return -1;
      else return 1;
    })
  }