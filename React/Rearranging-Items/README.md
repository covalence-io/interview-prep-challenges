# Fetching data in React+Typescript, and rearranging elements

-   Step 1:

    -   Look at the structure of the data within [./src/data/albums.json](./src/data/albums.json) and create an interface in [./src/types/index.ts](./src/types/index.ts) describing its structure

-   Step 2:

    -   In [App.tsx](./src/App.tsx), on page load, fetch the data from that file (you can fetch from a local path instead of a URL `fetch('../data/albums.json')`) and set it to state with the generic being described by the interface
    -   Then display the data in the ul below. You may change or add any styling that you like.

-   Step 3:

    -   Create up & down buttons in each li.
    -   If it is the first item in the list, it should only display a down button.
    -   If it is the last item in the list, it should only display an up button.

-   Step 4:
    // TODO: add in the rearranging elements in an array challenge
    -   Finally, make the list sortable by clicking on any of the buttons. (_You may want to practice the rearranging elements in JS challenge first unless you're comfortable with array manipulation logic_)
