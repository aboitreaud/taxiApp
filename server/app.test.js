const { app, computePrice } = require('./app.js');

test("Price of ride of distance 0 mile expected to be 0.00 EUR", () => {
    expect(computePrice(0, Date.now(), 100)).toBe((0).toFixed(2));
});

test("Price of ride of distance 1 mile, in busy period, expected to be 4.50 EUR", () => {
    expect(computePrice(1, new Date("2020-06-19T16:01:17.031Z"), 1000)).toBe((4.5).toFixed(2));
});

test("Price of ride of distance 1.1 mile, in busy period, expected to be 5.00 EUR", () => {
    expect(computePrice(1.1, new Date("2020-06-19T16:01:17.031Z"), 1000)).toBe((5).toFixed(2));
});

test("Price of ride of distance 4 miles, at night, expected to be 11.50 EUR", () => {
    expect(computePrice(4, new Date("2022-06-19T23:01:17.031Z"), 4000)).toBe((11.5).toFixed(2));
});

test("Price of ride of distance 2 miles, starting at night & ending after, expected to be 6.50 EUR", () => {
    expect(computePrice(2, new Date("2022-06-19T05:01:17.031Z"), 7200)).toBe((6.5).toFixed(2));
});

test("Price of ride of distance 2 miles, neither at nigh nor in busy period, expected to be 6.00 EUR", () => {
    expect(computePrice(2, new Date("2022-06-19T10:01:17.031Z"), 4000)).toBe((6).toFixed(2));
});

test("Price of ride of distance 2 miles, starting in busy period and ending at night, expected to be 7.50 EUR", () => {
    expect(computePrice(2, new Date("2022-06-19T18:01:17.031Z"), 10800)).toBe((7.5).toFixed(2));
});