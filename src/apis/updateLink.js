const URLS = {
  UPDATE_TAGNAME: `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=[tagName]&per_page=24&format=json&nojsoncallback=1`,
};

class Link {
  static returnLink(link) {
    return URLS.UPDATE_TAGNAME.replace("tagName", link);
  }
}

export default Link;
