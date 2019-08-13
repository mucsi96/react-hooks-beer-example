import { useLocalStorage } from './useLocalStorage';
import { renderHook, act } from '@testing-library/react-hooks';

let mockLocalStorageValue: string | null;

Storage.prototype.getItem = (key: string) => (key === 'testKey' ? mockLocalStorageValue : null);

beforeEach(() => {
  Storage.prototype.setItem = jest.fn();
  mockLocalStorageValue = '[75]';
});

const render = (key: string = 'testKey') => renderHook(() => useLocalStorage<number[]>(key, [12]));

describe('useLocalStorage', () => {
  it('returns value from local strorage', () => {
    const { result } = render();
    expect(result.current[0]).toEqual([75]);
  });

  it('returns provided inital value if key doesn`t match', () => {
    const { result } = render('notExistingKey');
    expect(result.current[0]).toEqual([12]);
  });

  it('returns provided inital value if local storage is empty', () => {
    mockLocalStorageValue = null;
    const { result } = render();
    expect(result.current[0]).toEqual([12]);
  });

  it('returns provided inital value if local storage value is not parseable', () => {
    mockLocalStorageValue = 'nullle';
    const { result } = render();
    expect(result.current[0]).toEqual([12]);
  });

  it('returns the set value', async () => {
    const { result } = render();

    act(() => {
      result.current[1]([8]);
    });

    expect(result.current[0]).toEqual([8]);
  });

  it('persist the new value local storage', async () => {
    const { result } = render();

    act(() => {
      result.current[1]([8]);
    });

    expect(Storage.prototype.setItem).toBeCalledWith('testKey', '[8]');
  });
});
