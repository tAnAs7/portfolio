import moment from "moment"

moment.updateLocale("vi", {
  relativeTime: {
    future: (diff) => (diff === "ngay lúc này" ? diff : `sau ${diff}`),
    past: (diff) => (diff ==="ngay lúc này" ? diff : `${diff} trước`),
    s: " ngay lúc này",
    ss: "%d giây",
    m: "%d tháng",
    mm: "%d tháng",
    h: "%d giờ",
    hh: "%d giờ",
    d: "%d ngày",
    dd: "%d ngày",
    w: "%d tuần",
    ww: "%d tuần",
    M: "%d tháng",
    MM: "%d tháng",
    y: "%d năm",
    yy: "%d năm",
  }
});

const parseMoment = (start, end) => {
    if(moment(start).fromNow() >= moment.now() && moment(end).fromNow() > moment.now())
        return "Đang diễn ra, kết thúc " + moment(end).fromNow()
    else if (moment(end).fromNow() === moment.now())
        return "Đã kết thúc " + moment(end).fromNow()
    else return "Bắt đầu " + moment(start).fromNow()
};

export { moment, parseMoment }