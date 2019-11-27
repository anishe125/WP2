
export const loadState = stateName => {
    try {
        const serializedState = localStorage.getItem(stateName);
        if (serializedState === null) {
            return {
                apiKey: '9d5b59f6e7f7e77586dc0269e6d0438a',
                citiesQueue: [],
                cities: [],
                loading: true,
                isGeoPosAvailable: null,
                cityDefault: 'Moscow',
                cityByCoords: {},
                errorMessage: null
            };

        }

        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state, stateName) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(stateName, serializedState);
    } catch (err) {
        throw new Error("Can't save changes in local storage");
    }
};