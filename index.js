const datejs = require('datejs');

function combineUsers (...args){
  let combinedObject = {
    users: []
  };
  args.forEach(subArr =>{
    combinedObject.users.push(...subArr)
  });
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');
  
  return combinedObject
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
// run with `node server.mjs`
