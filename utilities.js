exports.currentTimeStamp = Math.floor(new Date().getTime() / 1000.0);

exports.getCurrentTask = function (currentTime) {
  let list_task = [
    1646931600, 1647795600, 1648746000, 1649610000, 1650474000, 1651338000,
    1652202000, 1653066000, 1654016400, 1654880400, 1655744400, 1656608400,
    1657472400, 1658336400, 1659286800, 1660150800, 1661014800, 1661965200,
    1662829200, 1663693200, 1664557200, 1665421200, 1666285200, 1667235600,
    1668099600, 1668963600, 1669827600, 1670691600, 1671555600, 1672506000,
    1673370000, 1674234000, 1675184400, 1676048400, 1676912400, 1677603600,
  ];

  let getCurrentTask = list_task.filter((e) => e > currentTime);
  getCurrentTask = getCurrentTask[0];
  let starting_task = 68;
  getCurrentTask = list_task.indexOf(getCurrentTask) + starting_task;

  let latestTask = list_task.length + starting_task;

  const myDate = new Date(currentTime * 1000);
  console.log("Current Time: " + myDate.toLocaleString());

  console.log(
    "Latest time setup tak: " +
      latestTask +
      " on " +
      new Date(list_task[list_task.length - 1] * 1000).toLocaleString()
  );
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
