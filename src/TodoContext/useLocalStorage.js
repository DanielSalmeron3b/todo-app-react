import React from "react";


/* Custom Hook to save data in localStorage */
function useLocalStorage(itemName, initialValue) {
    // Error state
    const [error, setError] = React.useState(false);
    // Loading state
    const [loading, setLoading] = React.useState(true);
    // initialValue is the initial state now
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        // Using setTimeout to preten that we are receiving info from an API and that we
        // have to wait for the request to complete
        setTimeout(() => {
            try {
                // If u want to see how the error state works, uncomment the line below
                // throw new Error()
                // Bringing the item (received as a parameter) saved in localStorage, it can be the list of TODOs
                // or other item saved in localStorage
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    // If the user is new in the app, then there will be nothing on localStorage
                    // so we save an item in localStorage as an empty array
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    // And the default state will be also an empty array
                    parsedItem = initialValue;
                } else {
                    // If there are TODOs saved in localStorage then these are converted to JSON
                    parsedItem = JSON.parse(localStorageItem);
                };

                // The state is now the "response" from what was saved in localStorage
                setItem(parsedItem);
                // The loading state finished now that we received a "response" from localStorage
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 2000);
    }, [initialValue, itemName]);


    const saveItemInLocalStorage = (newItem) => {
        try {
            // Saving the changes in localStorage    
            const stringUpdatedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringUpdatedItem);
            // Setting a new state
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };

    // Returning the state (item), and the function that modifies the state (saveItemInLocalStorage)
    // Also returning the loading and error state
    return {
        item,
        saveItemInLocalStorage,
        loading,
        error,
    };
}

export { useLocalStorage };