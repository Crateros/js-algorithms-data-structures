const hash = (key, size) => {
  let hashedKey = 0;

  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  };
  console.log(hashedKey % size);
  return hashedKey % size;
};

class HashTable {
  constructor() {
    this.size = 20;
    this.buckets = Array(this.size);

    for (let i =0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }

  insert(key, value) {
    // Hash the key to access the index
    const index = hash(key, this.size);
    // Access the hash map at the hasehd index and set the value
    // via Maps native 'set' method
    this.buckets[index].set(key, value);
  };

  remove(key) {
    // Hash the key to access the index
    const index = hash(key, this.size);
    // Access the item in the hash map via Maps native 'get' method
    const removedValue = this.buckets[index].get(key);
    // Remove the value in the hash map via Maps native 'delete' method
    this.buckets[index].delete(key)
    return console.log(removedValue);
  };

  search(key) {
    // Hash the key to access the index
    const index = hash(key, this.size);
    return console.log(this.buckets[index].get(key));
  };
}

const hashTable = new HashTable();
hashTable.insert('Serena', 'Moon');
hashTable.insert('Amy', 'Mercury');
hashTable.insert('Rei', 'Mars');
hashTable.insert('Lita', 'Jupiter');
hashTable.insert('Mina', 'Venus');
hashTable.insert('Darien', 'Tuxedo Mask');

console.log(hashTable);

hashTable.search('Rei');
hashTable.search('Lita');
hashTable.search('Darien');
hashTable.search('Amy');

hashTable.remove('Darien');

console.log(hashTable);
