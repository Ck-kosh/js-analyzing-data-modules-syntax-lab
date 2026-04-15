


// Step 0: import datejs (must be outside the function)
require("datejs");

function combineUsers(...args) {
  // Step 2: initialize return object
  const combinedObject = {
    users: []
  };

  // Step 3 + 4: loop through args and merge arrays using spread operator
  for (let i = 0; i < args.length; i++) {
    combinedObject.users = [
      ...combinedObject.users,
      ...args[i]
    ];
  }

  // Step 5: get today's date in M/d/yyyy format
  const today = new Date();
  combinedObject.merge_date = today.toString("M/d/yyyy");

  // Step 7: return object
  return combinedObject;
}

module.exports = combineUsers;
