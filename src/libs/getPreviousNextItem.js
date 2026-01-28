// const getPreviousNextItem = (items, currentId) => {
// 	const totalItems = items?.length;
// 	const prevId = currentId > 1 ? currentId - 1 : 1;
// 	const nextId = currentId < totalItems ? currentId + 1 : totalItems;
// 	const currentItem = items?.find(({ id }) => currentId === id);
// 	const isPrevItem = currentId > 1;
// 	const isNextItem = currentId < totalItems;
// 	return { prevId, nextId, currentItem, isPrevItem, isNextItem };
// };

// export default getPreviousNextItem;


const getPreviousNextItem = (items, currentItem) => {
    const index = items.findIndex((i) => i.id === currentItem.id);

    return {
        currentItem,
        prevItem: index > 0 ? items[index - 1] : null,
        nextItem: index < items.length - 1 ? items[index + 1] : null,
        isPrevItem: index > 0,
        isNextItem: index < items.length - 1,
    };
};

export default getPreviousNextItem;
