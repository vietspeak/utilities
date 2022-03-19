exports.currentTimeStamp = Math.floor(new Date().getTime() / 1000.0);

exports.getCurrentTask = function (currentTime) {
  let list_task = [
    1646931600, 1647795600, 1647795600, 1648746000, 1649610000, 1650474000,
    1651338000, 1652202000, 1653066000, 1654016400, 1654880400, 1655744400,
    1656608400,
  ];

  console.log(currentTime);
  let getCurrentTask = list_task.filter((e) => e > currentTime);
  getCurrentTask = getCurrentTask[0];
  let starting_task = 68;
  getCurrentTask = list_task.indexOf(getCurrentTask) + starting_task;
  return getCurrentTask;
};

exports.cleanTextToCompare = function (textInput) {
  let result = textInput.trim().toLowerCase();
  const cong = /[‘’]/g;
  result = result.replace(cong, `'`);

  const dash = /-/g;
  result = result.replace(dash, " ");
  //   match everything except word and space + '
  const nonString = /[^\w\s']+/gim;

  result = result.replace(nonString, "");
  const newline = /\r?\n|\r/g;
  result = result.replace(newline, " ");
  return result;
};
