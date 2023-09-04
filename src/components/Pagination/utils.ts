interface ILink {
    showDots: boolean,
    pageNumber: number,
    label: number
}

export const getPaginationLinks = (maxNumberOfLinks, totalPages, current): ILink[] => {
    const rawPageNumbers = Array.from({length: totalPages}, (_, i) => i + 1);
    if (rawPageNumbers.length <= maxNumberOfLinks) {
        return rawPageNumbers.map(num => ({
            pageNumber: num,
            label: num,
            showDots: false,
        })) as ILink[];
    }
    

    const numberOfLinksOnEachSides = Math.floor((maxNumberOfLinks / 2));
    const end = Math.min(totalPages, current + numberOfLinksOnEachSides) + (current <= numberOfLinksOnEachSides + 1 ? numberOfLinksOnEachSides - current + 1 : 0);
    const start = Math.max(1, end - maxNumberOfLinks + 1);

    const shorterRawPageNumbers = rawPageNumbers.filter(num => num > start && num < end);


    const links: ILink[] = shorterRawPageNumbers.map(num => ({
        pageNumber: num,
        label: num,
        showDots: false,
    }));

    if (!links.find(link => link.pageNumber === 2)) {
        const link = links.shift();
        if (link) {
            links.unshift({
                pageNumber: link.pageNumber,
                label: 0,
                showDots: true
            });
        }
    }
    if (!links.find(link => link.pageNumber === totalPages - 1)) {
        const link = links.pop();
        if (link) {
            links.push({
                pageNumber: link.pageNumber,
                label: 0,
                showDots: true
            })
        }
    }
    if (links[0].pageNumber !== 1) {
        links.unshift({
            pageNumber: 1,
            label: 1,
            showDots: false,
        })
    }
    if (links[links.length - 1].pageNumber !== totalPages) {
        links.push({
            pageNumber: totalPages,
            label: totalPages,
            showDots: false,
        })
    }
    return links;
}