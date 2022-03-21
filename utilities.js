exports.currentTimeStamp = () => Math.floor(new Date().getTime() / 1000.0);

exports.getCurrentTask = function (currentTime) {
  let list_task = [
    1646931600, 1647795600, 1648746000, 1649610000, 1650474000, 1651338000,
    1652202000, 1653066000, 1654016400, 1654880400, 1655744400, 1656608400,
    1657472400, 1658336400, 1659286800, 1660150800, 1661014800, 1661965200,
    1662829200, 1663693200, 1664557200, 1665421200, 1666285200, 1667235600,
    1668099600, 1668963600, 1669827600, 1670691600, 1671555600, 1672506000,
    1673370000, 1674234000, 1675184400, 1676048400, 1676912400, 1677603600,
    1678467600, 1679331600, 1680282000, 1681146000, 1682010000, 1682874000,
    1683738000, 1684602000, 1685552400, 1686416400, 1687280400,
  ];

  let getCurrentTask = list_task.filter((e) => e > currentTime);

  getCurrentTask = getCurrentTask[0];

  let starting_task = 68;

  getCurrentTask = list_task.indexOf(getCurrentTask) + starting_task;

  let latestTask = list_task.length + starting_task;

  const myDate = (timeStampt) => {
    return new Date(timeStampt * 1000).toLocaleString("en-US", {
      timeZone: "Asia/Ho_Chi_Minh",
    });
  };

  console.log(
    "Current task: " + getCurrentTask + " - time: " + myDate(currentTime)
  );

  console.log(
    "Latest time setup task: " +
      latestTask +
      " on " +
      myDate(list_task[list_task.length - 1])
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

exports.vttToPlainText = (textInput) => {
  if (textInput.length === 0) {
    return;
  }

  textInput = textInput.replace(/WEBVTT/g, "");
  textInput = textInput.replace(/.+ --> .+/g, "");
  textInput = textInput.replace(/<\/c>/g, "");
  textInput = textInput.replace(/<.+?>/g, "");
  textInput = textInput.replace(/^\s*$/g, "");
  textInput = textInput.replace(/&nbsp;/g, " ");
  textInput = textInput.replace(/-/g, " ");
  let lines = textInput.split("\n");

  lines.splice(0, 2);
  lines = lines.map((line) => line.trim());
  lines = lines.filter((line) => line.length > 0);
  lines = lines.filter((line, index, lines) => line !== lines[index + 1]);
  return lines.join(" ");
};

exports.stringToSlug = function (str) {
  // remove accents
  var from =
      "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
    to =
      "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(RegExp(from[i], "gi"), to[i]);
  }

  str = str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-]/g, "-")
    .replace(/-+/g, "-");

  return str;
};

exports.later = function (delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
};
