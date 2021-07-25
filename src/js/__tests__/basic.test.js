import checkHealth from '../basic';

test('healthy', () => {
  const result = checkHealth({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

test('wounded max extremum', () => {
  const result = checkHealth({ name: 'Маг', health: 50 });

  expect(result).toBe('wounded');
});

test('wounded min extremum', () => {
  const result = checkHealth({ name: 'Маг', health: 15 });

  expect(result).toBe('wounded');
});

test('wounded', () => {
  const result = checkHealth({ name: 'Маг', health: 40 });

  expect(result).toBe('wounded');
});

test('critical', () => {
  const result = checkHealth({ name: 'Маг', health: 5 });

  expect(result).toBe('critical');
});
