/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const url2tiny = {};
var encode = function(longUrl) {
    const codex = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += codex[Math.floor(Math.random() * 62)];
    }
    url2tiny[code] = longUrl; 
    return "http://tinyurl.com/" + code; 
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let part =shortUrl.split('.com/')[1];
    if (url2tiny[part]) return url2tiny[part]; 
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */