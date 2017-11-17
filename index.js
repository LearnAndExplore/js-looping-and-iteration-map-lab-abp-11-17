// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return newDrivers = drivers.map(function(driver){
    //console.log(driver.toLowerCase());
    return driver.toLowerCase();
  })
}
function nameToAttributes(drivers){
  return driversFirstLastAttribute = drivers.map(function(driver) {
    spaceLocation = driver.indexOf(" ",0);
    firstName = driver.slice(0,spaceLocation);
    lastName = driver.slice(spaceLocation+1);
    console.log(`firstName: ${firstName}, lastName: ${lastName}`);
    return {"firstName":firstName,"lastName":lastName};
  })
}

function attributesToPhrase(drivers){
  return driversString = drivers.map(function(driver){
    return `${driver["name"]} is from ${driver["hometown"]}`;
  });

}
