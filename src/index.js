// ======= Utils ============
Array.prototype.equals = function (array) {
  if (!array) {
    return false;
  }

  if (this.length !== array.length) {
    return false;
  }

  for (let i = 0; i < this.length; i++) {
    // nested array
    let itemFirstArray = this[i];
    let itemSecondArray = array[i];

    if (itemFirstArray instanceof Array && itemSecondArray instanceof Array) {
      return itemFirstArray.equals(itemSecondArray);
    }

    if (itemFirstArray !== itemSecondArray) {
      return false;
    }
  }

  return true;
};

function expect(actual, expectation) {
  console.log("=======================================");
  console.log("Actual >>", actual);
  console.log("Expectation >>", actual);
  console.log("Pass >> ", expectation.equals(actual));
}

function getRandomInt(max, hasNegative) {
  const result = Math.floor(Math.random() * Math.floor(max));

  if (hasNegative) {
    /*
     * Math.round(Math.random()) will give you 0 or 1
     * Multiplying the result by 2 will give you 0 or 2
     * And then subtracting 1 gives you -1 or 1.
     */
    const negativeOrNot = Math.round(Math.random()) * 2 - 1;
    return result * negativeOrNot;
  }
  return result;
}
function isArray(arr) {
  if (!arr) {
    return false;
  }

  if (Object.prototype.toString.apply(arr) === "[object Array]") {
    return true;
  }

  return false;
}

function cloneArray(arr) {
  if (!isArray(arr)) {
    return arr;
  }

  return arr.slice(0);
}

function createRandomArray(size) {
  return Array.from({ length: size }, () => getRandomInt(size, true));
}

function measureExecutionTime(fn) {
  const t0 = performance.now();

  const result = fn();

  const t1 = performance.now();
  console.log(`Call to ${fn.name} took ${t1 - t0} milliseconds.`);

  return result;
}

// ========= Examples =============

const example_1 = () => {
  // Unique elements of arrays
  const uniqueElements = (firstArr, secondArr) => {
    if (!firstArr && !secondArr) {
      return [];
    }

    if (firstArr && !secondArr) {
      return [...new Set(firstArr)];
    }

    if (secondArr && !firstArr) {
      return [...new Set(secondArr)];
    }

    return [...new Set(firstArr.concat(secondArr))];
  };

  console.log(uniqueElements([1, 2, 2, 3], [3, 3, 4, 5, 6]));
};

const example_2 = () => {
  // Find duplicated elements in an array
  const findDuplicatedElements = data => {
    if (!Array.isArray(data)) {
      return [];
    }

    const duplicatedElements = data.filter(item => {
      const isUnique = data.indexOf(item) === data.lastIndexOf(item);
      return !isUnique;
    });

    return uniqueElements([...new Set(duplicatedElements)]);
  };

  console.log(findDuplicatedElements([1, 2, 2, 3, 4, 5, 5, 6, 7]));
};

const example_3 = () => {
  // Check a String is palindrome
  const isPalindrome = str => {
    if (!str || typeof str !== "string") {
      return false;
    }

    return (
      str
        .split("")
        .reverse()
        .join("") === str
    );
  };

  console.log(isPalindrome("level"));
  console.log(isPalindrome("apple"));
};

const example_4 = () => {
  // to filter false, null, 0 and blank values from an array
  const filerArrayValuesBy = (arr, filterValues) => {
    if (!Array.isArray(arr)) {
      return [];
    }

    return arr.filter(item => {
      return filterValues.indexOf(item) < 0;
    });
  };

  console.log(
    filerArrayValuesBy(
      [58, "", "abcd", true, null, false, 0],
      [false, null, 0, ""]
    )
  );
};

const example_5 = () => {
  const move = (arr, fromPs, toPs) => {
    const newArr = [];
    let fromValue = null;

    for (let i = 0; i < arr.length; i++) {
      if (i !== fromPs || fromPs < 0) {
        newArr.push(arr[i]);
      } else {
        fromValue = arr[i];
      }

      if (i === toPs) {
        newArr.push(fromValue);
      }
    }

    return newArr;
  };

  expect(move([10, 20, 30, 40, 50], 0, 2), [20, 30, 10, 40, 50]);
  expect(move([10, 20, 30, 40, 50], 1, 2), [10, 30, 20, 40, 50]);
  expect(move([10, 20, 30, 40, 50], -1, -2), [10, 20, 30, 40, 50]);
};

const example_6 = () => {
  const pickRandom = arr => {
    if (!Array.isArray(arr)) {
      return -1;
    }

    return arr[getRandomInt(arr.length)];
  };

  console.log(pickRandom([10, 20, 30, 40, 50]));
};

const example_7 = () => {
  const getMaxElement = arr => {
    if (!Array.isArray(arr)) {
      return -1;
    }

    return arr.reduce((accumulator, curValue) => {
      if (curValue > accumulator) {
        return curValue;
      }
    }, 0);
  };

  console.log(getMaxElement([10, 20, 30, 40, 50]));
};

const example_8 = () => {
  const quickSort = arr => {
    if (!isArray(arr) || arr.length <= 1) {
      return arr;
    }

    const leftArr = [];
    const rightArr = [];
    const point = arr[0];
  };

  console.log(quickSort([3, 0, 2, 5, -1, 4, 1]));
};

const example_9 = () => {
  const findSmallest = (arr1, arr2) => {
    const uniqueArr1 = [...new Set(arr1)];
    const uniqueArr2 = [...new Set(arr2)];

    const concatArr = [].concat(uniqueArr1, uniqueArr2);

    console.log(">>> concatArr", concatArr);

    const duplicatedItems = concatArr.filter(item => {
      return concatArr.indexOf(item) !== concatArr.lastIndexOf(item);
    });

    console.log(">>> duplicatedItems", duplicatedItems);

    const smallestItem = duplicatedItems.reduce((previous, currValue) => {
      if (previous === -1) {
        return currValue;
      }

      if (currValue <= previous) {
        return currValue;
      }

      return previous;
    }, -1);

    return smallestItem;
  };

  const findSmallest_2 = (arr1, arr2) => {
    const uniqueArr1 = [...new Set(arr1)];
    const uniqueArr2 = [...new Set(arr2)];

    const concatArr = [].concat(uniqueArr1, uniqueArr2);

    console.log(">>> concatArr", concatArr);

    const checkItems = {};
    let smallestItem = null;

    for (let i = 0; i < concatArr.length; i++) {
      const item = concatArr[i];
      const checkItem = checkItems[item];

      if (checkItem) {
        if (!smallestItem) {
          smallestItem = checkItem;
        }

        if (checkItem < smallestItem) {
          smallestItem = checkItem;
        }
      } else {
        checkItems[item] = item;
      }
    }

    return smallestItem;
  };

  console.log(findSmallest_2([1, 1, 3, 4, 4], [3, 4, 5, 6]));
};

const example_10 = () => {
  const countTripleSumTo0 = a => {
    const N = a.length;
    let cnt = 0;

    for (let i = 0; i < N; i++)
      for (let j = i + 1; j < N; j++)
        for (let k = j + 1; k < N; k++) if (a[i] + a[j] + a[k] === 0) cnt++;

    return cnt;
  };

  const randomArray = createRandomArray(1000);

  console.log(measureExecutionTime(countTripleSumTo0.bind(this, randomArray)));
};

// =====================
// ===== Execution =====
// =====================
example_10();
