/**
 * Created by max on 16-11-17.
 */

'use strict';

class Common {};

Common.title = 'DingDing';
Common.DingDingWindowsSize = {
    width: 1000,
    height: 600
};
Common.loginWindowSize = {
    width: 374,
    height: 345
};

Common.debug = false;

Common.userAgent = {
    'freebsd': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
    'sunos': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
    'win32': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
    'linux': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
    'darwin': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36'
};

Common.webDingding = "https://im.dingtalk.com/?spm=a3140.7858860.2231601.4.EE4inq";

module.exports = Common;