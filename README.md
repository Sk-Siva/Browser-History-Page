# Searchable Browser History  

A **Searchable Browser History** application that allows users to view, search, and manage their browsing history efficiently.  

## Features  

✔ **Real-time Search** – Users can filter history items by typing in the search bar, regardless of case sensitivity.  
✔ **Dynamic List Update** – Only matching results are displayed; if no matches are found, an **Empty History View** appears.  
✔ **Delete Functionality** – Users can remove history items individually. When all items are deleted, the **Empty History View** is shown.  

## How It Works  

1. The app initially displays a list of history items, each containing:  
   - **Timestamp**  
   - **Website Logo**  
   - **Title**  
   - **Domain URL**  
   - **Delete Button**  
   
2. **Search Functionality:**  
   - When a user enters a non-empty value in the search bar, only matching history items are displayed.  
   - The search is **case-insensitive** (e.g., searching "Google" matches "google.com").  
   - If no matches are found, an **Empty History View** is shown.  

3. **Delete Functionality:**  
   - Clicking the **delete button** removes a specific history item.  
   - If all history items are deleted, the **Empty History View** is displayed.  

## Technologies Used  

- HTML, CSS  
- JavaScript (React.js)  
