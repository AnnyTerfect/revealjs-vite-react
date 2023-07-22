function decodeHtmlEntities(htmlString) {
  return htmlString
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&copy;/g, "©")
    .replace(/&reg;/g, "®")
    .replace(/&euro;/g, "€")
    .replace(/<!--.*?-->/g, "")
    .replace(/<\?.*?\?>/g, "")
    .replace(/<!.*?>/g, "");
}

export default decodeHtmlEntities;
