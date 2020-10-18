let db;
// create the new db request for a budget database
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
   //create pending object store
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function(event) {
  db = event.target.result;
  //check that database is communicating before reading
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function(event) {//log errors
  console.log(event.target.errorCode);
};

saveRecord = (record) => {
//create a transaction on pending db, store record on the object store
  const transaction = db.transaction(["pending"], "readwrite");
  const store = transaction.objectStore("pending");
  store.add(record);
}

checkDatabase = () => {
   //access pending object store, get all records, set to variable
  const transaction = db.transaction(["pending"], "readwrite");
  const store = transaction.objectStore("pending");
  const getAll = store.getAll();

  getAll.onsuccess = () => {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(() => {
        //clear all items in the pending object store
        const transaction = db.transaction(["pending"], "readwrite");
        const store = transaction.objectStore("pending");
        store.clear();
      });
    }
  };
}

// listen for database online
window.addEventListener("online", checkDatabase);
