Search Image Layer

Welcome to Search Image Layer a full stack JavaScript app that allows you to search for images.

The specs of this microservice come from FreeCode Camp challenge:

* User Story: I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
* User Story: I can paginate through the responses by adding a ?offset=2 parameter to the URL.
* User Story: I can get a list of the most recently submitted search strings.

to search for images, use the api: .../api/imagesearch/query[?offset=N].

to see the latest search, use the api: .../api/latest/imagesearch. I modified a bit the specs here and only the last 10 search will be showed.

A live demo is available on [Heroku](https://fcc-image-search-microservice.herokuapp.com/)
