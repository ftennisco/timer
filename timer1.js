const setAlarm = function(time) {
  const alarmTime = Number(time);

  if (isNaN(alarmTime) || alarmTime < 0) {
    return;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, alarmTime * 1000);
};

const args = process.argv.slice(2);

args.forEach(setAlarm);