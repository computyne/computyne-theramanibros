const countDataLength = (data, filterKey, filterValue) => {
    if (!filterValue || filterValue === "all") {
        return data.length;
    }
    const length = data?.filter((dataSingle) => {
        let currentValue = dataSingle[filterKey];

        return currentValue?.toLowerCase() === filterValue?.toLowerCase();
    })?.length;
    return !length ? 0 : length;
};

export default countDataLength;
