// There are N rooms and you start in room 0.  Each room has
// a distinct number in 0, 1, 2, ..., N-1, and each room may
// have some keys to access the next room.

// Formally, each room i has a list of keys rooms[i],
// and each key rooms[i][j] is an integer in [0, 1, ..., N-1]
// where N = rooms.length.  A key rooms[i][j] = v opens
// the room with number v.

// Initially, all the rooms start locked (except for room 0).
// You can walk back and forth between rooms freely.
// Return true if and only if you can enter every room.

// Example 1:
// Input: [[1],[2],[3],[]]
// Output: true
// Explanation:
// We start in room 0, and pick up key 1.
// We then go to room 1, and pick up key 2.
// We then go to room 2, and pick up key 3.
// We then go to room 3.  Since we were able to go to every room, we return true.

// Example 2:
// Input: [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can't enter the room with number 2




// We can create a boolean array containing the rooms
// that we have seen with the room # mapping to the array
// index, when we encounter a room we mark that index as true.
// We can use a stack (FILO) to keep track of the keys that we encounter
// and the order that we use the keys to ensure we visit all possible rooms

const exploreRooms = (rooms) => {
  const exploredRooms = new Array(rooms.length).fill(false);
  // We have access to room 0 by default
  const availableKeys = [0];

  while (availableKeys.length) {
    let currentKey = availableKeys.pop();
    if (!exploredRooms[currentKey]) {
      availableKeys.push(...rooms[currentKey]);
      exploredRooms[currentKey] = true;
    }
  }

  return !exploredRooms.includes(false);
}

// We can use a stack to keep track of keys we have available to unlock rooms.
// However, we do not want to revisit a room if we find a duplicate key (redundant)
// so we can maintain a set that keeps track of unique occurrences of keys we encounter.
// If we encounter a unique key we add it to the stack and the set. After we visit all rooms
// with this criteria we should have a set that contains 1 instance of each possible key
// that we can encounter. If the set size is the same as the number of rooms then we have
// a key for each room

const exploreRoomsWithSet = (rooms) => {
  const uniqueKeys = new Set([0]);
  const availableKeys = [0];

  while (availableKeys.length) {
    let currentKey = availableKeys.pop();
    rooms[currentKey].forEach(key => {
      if (!uniqueKeys.has(key)) {
        uniqueKeys.add(key);
        availableKeys.push(key);
      }
    });
  }

  return uniqueKeys.size === rooms.length;
}

console.log(exploreRooms([[1], [2], [3,2,1], []]));
console.log(exploreRooms([[1], [3], [2], [2]]));
console.log(exploreRooms([[2], [3], [1], []]));
console.log(exploreRooms([[1, 3], [3, 0, 1], [2], [0]]));

console.log(exploreRoomsWithSet([[1], [4, 2], [3, 2, 1], [1, 2, 3, 4], [1, 2, 3]]));
console.log(exploreRoomsWithSet([[1],[3],[2],[2]]));
console.log(exploreRooms([[1, 3], [3, 0, 1], [2], [0]]));
console.log(exploreRoomsWithSet([[2], [3], [1], []]));
console.log(exploreRoomsWithSet([[6, 7, 8], [5, 4, 9], [], [8], [4], [], [1, 9, 2, 3], [7], [6, 5], [2, 3, 1]]));

