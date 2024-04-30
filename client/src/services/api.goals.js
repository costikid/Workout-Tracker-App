const baseUrl = 'http://localhost:3000'

export async function getGoals() {
  return await fetch(baseUrl + '/goals', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
}

export async function postGoals(data) {
  return await fetch(baseUrl + '/goals', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
} 
