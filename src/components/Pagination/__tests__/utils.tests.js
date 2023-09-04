import {getPaginationLinks} from '../utils'

describe('Pagination > utils', () => {
    describe('getPaginationLinks', () => {
        let totalPages = 100;
        let currentPage = 1;
        let maxNumberOfLinks = 9;
        beforeEach(() => {
            totalPages = 100;
            currentPage = 1;
            maxNumberOfLinks = 9;
        });
        const getLabels = (result) =>{
            return result.map(item => item.showDots ? '...' : item.label).join(' ')
        }
        const getArray = (from, till) => {
            return Array.from({length: till + 1 - from}, (_, i) => i + from)
        }
        
        describe('[!currentPage=1], [!maxNumberOfLinks=9] and [?totalPages >= 0 && <=9]', () => {
            for(let i = 0; i <= maxNumberOfLinks; i++){
                const expected = getArray(1, i).join(' ')
                it(`should return [${expected}] and no item with {showDots:true} when [!totalPages=${i}]`, () => {
                    totalPages = i;
                    const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);
                    expect(getLabels(result)).toEqual(expected);
                    expect(result.filter(item => item.showDots).length).toEqual(0)
                })
            }
        });
        describe('[!currentPage=1], [!maxNumberOfLinks=9] and [!totalPages=10]', () => {
            const expected = `${getArray(1, 7).join(' ')} ... 10`
            it(`should return [${expected}] and [{showDots:true}.length=1]`, () => {
                totalPages = 10;
                const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);
                
                expect(result.length).toEqual(9);
                expect(getLabels(result)).toEqual(expected);
                expect(result.filter(item => item.showDots).length).toEqual(1)
            })
        });
        describe('[!currentPage=10], [!maxNumberOfLinks=9] and [!totalPages=10]', () => {
            const expected = `1 ... ${getArray(4, 10).join(' ')}`
            it(`should return [${expected}]  and [{showDots:true}.length=1]`, () => {
                currentPage = 10;
                totalPages = 10;
                const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);
                
                expect(result.length).toEqual(9);
                expect(getLabels(result)).toEqual(expected);
                expect(result.filter(item => item.showDots).length).toEqual(1)
            })
        });
        describe('[!currentPage=5], [!maxNumberOfLinks=9] and [!totalPages=10]', () => {
            const expected = `${getArray(1, 7).join(' ')} ... 10`
            it(`should return [${expected}] and [{showDots:true}.length=1]`, () => {
                currentPage = 5;
                totalPages = 10;
                const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);
                
                expect(result.length).toEqual(9);
                expect(getLabels(result)).toEqual(expected);
                expect(result.filter(item => item.showDots).length).toEqual(1)
            })
        });
        describe('[!currentPage=6], [!maxNumberOfLinks=9] and [!totalPages=10]', () => {
            const expected = `1 ... ${getArray(4, 10).join(' ')}`
            it(`should return [${expected}] and [{showDots:true}.length=1]`, () => {
                currentPage = 6;
                totalPages = 10;
                const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);
                
                expect(result.length).toEqual(9);
                expect(getLabels(result)).toEqual(expected);
                expect(result.filter(item => item.showDots).length).toEqual(1)
            })
        });
        describe('[!currentPage=1], [!maxNumberOfLinks=9] and [!totalPages=100]', () => {
            const expected = `${getArray(1, 7).join(' ')} ... 100`
            it(`should return [${expected}] and [{showDots:true}.length=2]`, () => {
                currentPage = 1;
                totalPages = 100;
                const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);
                
                expect(result.length).toEqual(9);
                expect(getLabels(result)).toEqual(expected);
                expect(result.filter(item => item.showDots).length).toEqual(1)
            })
        });
        describe('[!currentPage=100], [!maxNumberOfLinks=9] and [!totalPages=100]', () => {
            const expected = `1 ... ${getArray(94, 100).join(' ')}`
            it(`should return [${expected}] and [{showDots:true}.length=2]`, () => {
                currentPage = 100;
                totalPages = 100;
                const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);
                
                expect(result.length).toEqual(9);
                expect(getLabels(result)).toEqual(expected);
                expect(result.filter(item => item.showDots).length).toEqual(1)
            })
        });
        describe('[!currentPage=6], [!maxNumberOfLinks=9] and [!totalPages=100]', () => {
            const expected = `1 ... ${getArray(4, 8).join(' ')} ... 100`
            it(`should return [${expected}] and [{showDots:true}.length=2]`, () => {
                currentPage = 6;
                totalPages = 100;
                const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);
                
                expect(result.length).toEqual(9);
                expect(getLabels(result)).toEqual(expected);
                expect(result.filter(item => item.showDots).length).toEqual(2)
            })
        });
    })
})