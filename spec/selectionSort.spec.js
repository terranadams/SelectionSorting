describe("Selection Sort", function() {
    it("Should return [1, 2, 3, 4, 5] when inputed [2, 4, 3, 5, 1]", function() {
        let result = selectionSort([2, 4, 3, 5, 1])
        expect(result).toEqual([1, 2, 3, 4, 5])
    })
    it("Should return [1, 2, 3, 4, 5] when inputed [4, 1, 3, 5, 2]", function() {
        let result = selectionSort([4, 1, 3, 5, 2])
        expect(result).toEqual([1, 2, 3, 4, 5])
    })
    it("Should return [1, 2, 3, 4, 5] when inputed [5, 1, 3, 2, 4]", function() {
        let result = selectionSort([5, 1, 3, 2, 4])
        expect(result).toEqual([1, 2, 3, 4, 5])
    })
    it("Should return [1, 2, 3, 4, 5] when inputed [1, 3, 2, 5, 4]", function() {
        let result = selectionSort([1, 3, 2, 5, 4])
        expect(result).toEqual([1, 2, 3, 4, 5])
    })
    it("Should return [1, 2, 3, 4, 5] when inputed [5, 4, 3, 2, 1]", function() {
        let result = selectionSort([5, 4, 3, 2, 1])
        expect(result).toEqual([1, 2, 3, 4, 5])
    })
})