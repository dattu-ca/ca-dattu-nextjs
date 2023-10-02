import {getPaginationLinks} from '../utils'

describe('utils > Pagination', () => {
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
                    // Arrange
                    totalPages = i;
                    
                    // Act
                    const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);

                    // Assert
                    expect(getLabels(result)).toEqual(expected);
                    expect(result.filter(item => item.showDots).length).toEqual(0)
                })
            }
        });
        
        describe('[!maxNumberOfLinks=9] and [!totalPages=10]' , () => {
            beforeEach(() => {
                totalPages = 10;
            });
            describe('[!currentPage=1] ', () => {
                const expected = `${getArray(1, 7).join(' ')} ... 10`
                it(`should return [${expected}] and [{showDots:true}.length=1]`, () => {
                    // Arrange
                    currentPage = 1;

                    // Act
                    const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);

                    // Assert
                    expect(result.length).toEqual(9);
                    expect(getLabels(result)).toEqual(expected);
                    expect(result.filter(item => item.showDots).length).toEqual(1)
                })
            });
            describe('[!currentPage=10]', () => {
                const expected = `1 ... ${getArray(4, 10).join(' ')}`
                it(`should return [${expected}]  and [{showDots:true}.length=1]`, () => {
                    // Arrange
                    currentPage = 10;

                    // Act
                    const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);

                    // Assert
                    expect(result.length).toEqual(9);
                    expect(getLabels(result)).toEqual(expected);
                    expect(result.filter(item => item.showDots).length).toEqual(1)
                })
            });
            describe('[!currentPage=5]', () => {
                const expected = `${getArray(1, 7).join(' ')} ... 10`
                it(`should return [${expected}] and [{showDots:true}.length=1]`, () => {
                    // Arrange
                    currentPage = 5;

                    // Act
                    const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);

                    // Assert
                    expect(result.length).toEqual(9);
                    expect(getLabels(result)).toEqual(expected);
                    expect(result.filter(item => item.showDots).length).toEqual(1)
                })
            });
            describe('[!currentPage=6]', () => {
                const expected = `1 ... ${getArray(4, 10).join(' ')}`
                it(`should return [${expected}] and [{showDots:true}.length=1]`, () => {
                    // Arrange
                    currentPage = 6;

                    // Act
                    const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);

                    // Assert
                    expect(result.length).toEqual(9);
                    expect(getLabels(result)).toEqual(expected);
                    expect(result.filter(item => item.showDots).length).toEqual(1)
                })
            });  
        })
        
        describe('[!maxNumberOfLinks=9] and [!totalPages=100]', () => {
            beforeEach(() => {
                totalPages = 100;
            });
            describe('[!currentPage=1], ', () => {
                const expected = `${getArray(1, 7).join(' ')} ... 100`
                it(`should return [${expected}] and [{showDots:true}.length=2]`, () => {
                    // Arrange
                    currentPage = 1;

                    // Act
                    const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);

                    // Assert
                    expect(result.length).toEqual(9);
                    expect(getLabels(result)).toEqual(expected);
                    expect(result.filter(item => item.showDots).length).toEqual(1)
                })
            });
            describe('[!currentPage=100]', () => {
                const expected = `1 ... ${getArray(94, 100).join(' ')}`
                it(`should return [${expected}] and [{showDots:true}.length=2]`, () => {
                    // Arrange
                    currentPage = 100;

                    // Act
                    const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);

                    // Assert
                    expect(result.length).toEqual(9);
                    expect(getLabels(result)).toEqual(expected);
                    expect(result.filter(item => item.showDots).length).toEqual(1)
                })
            });
            describe('[!currentPage=6]', () => {
                const expected = `1 ... ${getArray(4, 8).join(' ')} ... 100`
                it(`should return [${expected}] and [{showDots:true}.length=2]`, () => {
                    // Arrange
                    currentPage = 6;

                    // Act
                    const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);

                    // Assert
                    expect(result.length).toEqual(9);
                    expect(getLabels(result)).toEqual(expected);
                    expect(result.filter(item => item.showDots).length).toEqual(2)
                })
            });
            describe('[!currentPage=55]', () => {
                const expected = `1 ... ${getArray(53, 57).join(' ')} ... 100`
                it(`should return [${expected}] and [{showDots:true}.length=2]`, () => {
                    // Arrange
                    currentPage = 55;

                    // Act
                    const result = getPaginationLinks(totalPages, currentPage, maxNumberOfLinks);

                    // Assert
                    expect(result.length).toEqual(9);
                    expect(getLabels(result)).toEqual(expected);
                    expect(result.filter(item => item.showDots).length).toEqual(2)
                })
            });    
        })
        
        
    })
})