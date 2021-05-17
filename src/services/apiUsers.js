const URL = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

const fetchAPI = () => {
  return fetch(URL)
    .then(data => data.json())
    .then(users => users);
};

export default fetchAPI;
