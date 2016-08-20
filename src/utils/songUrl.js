export default function (url) {
    let tempUrl = 'https://www.mixcloud.com/widget/iframe/?feed=https://www.mixcloud.com';
    if (!url && typeof url !== 'string') {
        return;
    }
    return tempUrl + url + '&hide_cover=1&light=1';
}
