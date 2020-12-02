const BASE_URL = 'http://www.omdbapi.com/?apikey=287c70f0&t=';

export async function request(title) {
  const response = await fetch(`${BASE_URL}${title}`);

  const result = await response.json();

  return result;
}
