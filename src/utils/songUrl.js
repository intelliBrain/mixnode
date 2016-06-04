export default function (url) {
    let tempUrl = 'http://www.mixcloud.com/widget/iframe/?feed=http://www.mixcloud.com';
    if (!url && typeof url !== 'string') {
        return;
    }
    return tempUrl + url + '&hide_cover=1&light=1';
}
