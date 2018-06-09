import TimeAgo from 'javascript-time-ago';
import zhHant from 'javascript-time-ago/locale/zh-Hant';

TimeAgo.locale(zhHant);
const timeAgo = new TimeAgo('zh-Hant');

export default date => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const time = timeAgo.format(d);

  return `${year} 年 ${month} 月 ${day} 日（${time}）`;
};
