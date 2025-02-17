import { configureVisitedUrls } from 'cypress-visited-urls'

configureVisitedUrls({
  filterUrl(url) {
    // remove all query parameters
    return url.split('?')[0]
  },
})
