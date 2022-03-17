describe('Math functions', ()=> {
    describe("Sum", ()=> {
        it('2+3=5', ()=> {
            let actual = sum(2,3);
            let expected = 5;
 
            expect(actual).toBe(expected);
        });
    });

    describe("Subtract", ()=> {
        it('5-3=2', ()=> {
            let actual = subtract(5,3);
            let expected = 2;
 
            expect(actual).toBe(expected);
        });
    });

    describe("Multiply", ()=> {
        it('2*3=6', ()=> {
            let actual = multiply(2,3);
            let expected = 6;
 
            expect(actual).toBe(expected);
        });
    });

    describe("Divide", ()=> {
        it('6/3=2', ()=> {
            let actual = divide(6,3);
            let expected = 2;
 
            expect(actual).toBe(expected);
        });

        it("6/0 = Can't divide with 0", ()=> {
            let actual = divide(3, 0);
            let expected = Infinity;
            expect(actual).toBe(expected);
        });
    });

    describe("Average", ()=> {
        it('(6+4)/2=5', ()=> {
            let actual = average(6,4);
            let expected = 5;
 
            expect(actual).toBe(expected);
        });
    });
});
