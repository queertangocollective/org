import { helper } from '@ember/component/helper';

function isSameDay(a, b) {
  let date = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return date.format(a) === date.format(b);
}

function isSameMonth(a, b) {
  let date = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'long'
  });
  return date.format(a) === date.format(b);
}

export default helper(function([s, e]) {
  let start = new Date(Date.parse(s));
  let end = new Date(Date.parse(e));
  let long = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
  let time = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour: 'numeric',
    minute: 'numeric'
  });
  let day = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
  if (isSameDay(start, end)) {
    return long.format(start) + ' - ' + time.format(end);
  } else if (isSameMonth(start, end)) {
    return long.format(start) + ' - ' + day.format(end);
  }
  return long.format(start) + ' - ' + long.format(end);
});

