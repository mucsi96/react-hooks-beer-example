import { renderHook, act } from '@testing-library/react-hooks';
import { useRouteParams } from './useRouteParams';

let mockPath: string;
delete window.location;
window.location = {
  get pathname() {
    return mockPath;
  }
} as Location;

const renderWithProps = (pattern: string) => renderHook(() => useRouteParams(pattern));

beforeEach(() => {
  mockPath = '/';
});

describe('useRouteParams', () => {
  it('return params object based on provided pattern', () => {
    mockPath = '/test/1';
    const { result } = renderWithProps('/test/:id');
    expect(result.current).toEqual({ id: '1' });
  });

  it('return empty object if url maches but no params in pattern', () => {
    const { result } = renderWithProps('/');
    expect(result.current).toEqual({});
  });

  it('return null if no match', () => {
    const { result } = renderWithProps('/not/matching/url');
    expect(result.current).toBe(null);
  });

  it('rerenders on history popstate event', () => {
    const { result } = renderWithProps('/test');

    act(() => {
      mockPath = '/test';
      window.dispatchEvent(new PopStateEvent('popstate'));
    });

    expect(result.current).toEqual({});
  });
});
