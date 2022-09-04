import * as name from '../constants/pageName.js';

const PageName = (location) => {
    const temp = location.substring(1).split("/");
    let result
    if(temp.length>1)
        result = temp[temp.length-1];
    else result = temp[0];
    switch (result) {
        case "": return "Trang chủ";
        case "events":
            return name.events;
        case "news":
            return name.news;
        case "about-me":
            return name.about_me;
        case "contact":
            return name.contact;
        case "event-management":
            return name.event_management;
        case "account-management":
            return name.account_management;
        default:
            return "Untitled";
    }
};

export default PageName