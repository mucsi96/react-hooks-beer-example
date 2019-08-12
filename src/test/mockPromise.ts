import { act } from 'react-test-renderer';

export type TMockPromise<T> = Promise<T> & {
  resolve: (value: T) => Promise<void>;
  reject: (error: Error) => Promise<void>;
};

export function createMockPromise<T>() {
  let resolveMockPromise: (value: T) => void = () => {};
  let rejectMockPromise: (error: Error) => void = () => {};

  const mockPromise = new Promise((resolve, reject) => {
    resolveMockPromise = resolve;
    rejectMockPromise = reject;
  }) as TMockPromise<T>;

  mockPromise.resolve = (value: T) =>
    act(async () => {
      resolveMockPromise(value);
      await mockPromise;
    });
  mockPromise.reject = (error: Error) =>
    act(async () => {
      rejectMockPromise(error);
      await mockPromise;
    });

  return mockPromise;
}
