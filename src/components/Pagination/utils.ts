interface ILink {
    showDots: boolean;
    pageNumber: number;
    label: number | string;
}

export const getPaginationLinks = (totalPages: number, currentPage: number, maxNumberOfLinks: number = 9): ILink[] => {
    // Getting all the pages possible for the pagination numbers
    const rawPageNumbers = Array.from({length: totalPages}, (_, i) => i + 1);

    // No need for any extra logic.
    if (rawPageNumbers.length <= maxNumberOfLinks) {
        return rawPageNumbers.map(num => ({
            pageNumber: num,
            label: num,
            showDots: false,
        })) as ILink[];
    }

    // ASSUMPTION: The `maxNumberOfLinks` is an ODD number
    const numberOfLinksOnEachSides = Math.floor((maxNumberOfLinks / 2));

    // If the current page is such that we don't have the exact length of links on one side, then we take more from the other side.
    const end = Math.min(totalPages, currentPage + numberOfLinksOnEachSides) + (currentPage <= numberOfLinksOnEachSides + 1 ? numberOfLinksOnEachSides - currentPage + 1 : 0);
    const start = Math.max(1, end - maxNumberOfLinks + 1);

    // The length should be at most 7; it excludes the number 1 and the last page number.
    const shorterRawPageNumbers = rawPageNumbers.filter(num => num > start && num < end);

    const links: ILink[] = shorterRawPageNumbers.map(num => ({
        pageNumber: num,
        label: num,
        showDots: false,
    }));


    // If there is no 2, then we replace the first number in the list with the 3 dots ("...")
    if (!links.find(link => link.pageNumber === 2)) {
        const link = links.shift();
        if (link) {
            links.unshift({
                pageNumber: link.pageNumber,
                label: '...',
                showDots: true
            });
        }
    }
    // If there is no last page - 1, then we replace the last number from list with the 3 dots ("...")
    if (!links.find(link => link.pageNumber === totalPages - 1)) {
        const link = links.pop();
        if (link) {
            links.push({
                pageNumber: link.pageNumber,
                label: '...',
                showDots: true
            })
        }
    }


    // If the first number isn't 1, then we add the link for page 1 in the beginning of the list
    if (links[0].pageNumber !== 1) {
        links.unshift({
            pageNumber: 1,
            label: 1,
            showDots: false,
        })
    }

    // If the last number isn't the last page number, then we add the link for the last page at the end
    if (links[links.length - 1].pageNumber !== totalPages) {
        links.push({
            pageNumber: totalPages,
            label: totalPages,
            showDots: false,
        })
    }

    return links;
}