const scopes = [
  {value: 1, name: 'Research'},
  {value: 2, name: 'Business'},
  {value: 3, name: 'Other', default: true}
]
export const getScopeByValue = (value) => {
  return scopes.find(scope => scope.value === value);
}
export default scopes;
