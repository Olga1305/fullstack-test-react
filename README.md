This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# < Frontend Test >

# Requirements for Frontend Developer

## New Features:

### FET-001 “Details page for a single beer”:
**Description:**
As a user I want to see the details of a single beer in a different page of the list.
This detail page should show at least the information of:
- Name
- Description
- First Brewed
- Image
- Foods that pair with that beer
- Abv and Ibu
- Contributor/s
- It also has to show the difference between Original Gravity and Final gravity
(target_og and target_fg params).

**Requirements:**

✓ When you click on an item on the list, you’ll be sent to a new page with the
details specified.

✓ You should be able to go back from that page to the list.

✓ You should be able to refresh the page and still see the details.

✓ Details page will have a button. When you click on it the difference between
the two gravities will be displayed.

**Status**

All done.

![image](https://live.staticflickr.com/65535/49213049867_73c485b40f_h.jpg)

---
### FET-002 “Search by name”
**Description:**
As a user I want to search by name of the beer. In order to achieve that there
will be an input to do that search on top of the list.

**Requirements:**

✓ When I type something on the input, I’ll get the beers that contains that string.

✓ If I delete the input, it will fetch all beers again.

**Status**

All done.

---
### FET-003 “Pagination”

**Description:**
As a user I want to be able to see more beers than the initials ones. Therefore,
there should be some method to paginate the list.

**Requirements:**

✓ If I see 0..n items, in the next page I want to see the n+1..2n items .

*Number of items per page is up to the developer.
*The method of pagination will be on the developer. It can be with scroll
detection or other ways. Infinite scroll will be a plus.

**Status**

All done.

---
## Data fetch

The data of this project is fetch on:

- Branch "master" on public api [Punk API](https://punkapi.com/documentation/v2).
- Branch "connectedApi" on an Express app - [Server Repository](https://github.com/Olga1305/fullstack-test-backend). The server runs on [http://localhost:3001](http://localhost:3001), the MongoDB database runs on [http://localhost:27017/beers](http://localhost:27017/beers)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
