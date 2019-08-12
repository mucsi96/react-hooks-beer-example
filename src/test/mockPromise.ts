export type TMockPromise<T> = Promise<T> & {
  resolve: (value: T) => void;
  reject: (error: Error) => void;
};

export function createMockPromise<T>() {
  let mockResolve: (value: T) => void = () => {};
  let mockReject: (error: Error) => void = () => {};
  const mockPromise = new Promise((resolve, reject) => {
    mockResolve = resolve;
    mockReject = reject;
  }) as TMockPromise<T>;

  mockPromise.resolve = mockResolve;
  mockPromise.reject = mockReject;

  return mockPromise;
}
