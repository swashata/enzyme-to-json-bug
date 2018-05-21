# Break the test

This demonstrates how a silly thing can break your tests. It uses enzyme and
enzyme-to-json to implement snapshot testing with jest.

The component against which we are running tests, has a `onClick` handler. We
test the handler by `jest.fn()` mock function. We simulate the click with
enzyme and test to see if the mock was called.

But it also changes the values associated with `jest.fn()` and the snapshot
gets broken.

## Steps to take

Just clone this repo and `yarn install` followed by `npx jest`.

```bash
yarn install
npx jest
```

It should fail.

## Reason?

The reason is simple. The `jest.fn()` is getting called before matching the snapshot.
So the `timestamp` or basically the internal implementation and values of the
`jest.fn()` changes everytime the tests run. Hence the snapshots will never match.

Infact, when snapshot testing, the implementation should be done in a way that internal values do not change over time.

If we try to snapshot test this object

```
const currentTime = Date.now();
expect(currentTime).toMatchSnapshot();
```

it will always fail, because `currentTime` changes everytime the tests are called.

Rather we can mock it

```
const currentTime = 1526900471489;
expect(currentTime).toMatchSnapshot();
```

and it will pass.

## Weird thing with `enzyme-to-json`

For some weird reason the failing snapshots when being updated, keeps on adding
to the list. I will open an issue.
