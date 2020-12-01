function removeEveryOther(months) {
    for (let i=1; i<months.length; i++) {
      months.splice(i, 1);
    }
   return months;
  }

console.log( removeEveryOther(['Hello', 'Goodbye', 'Hello Again']) );

