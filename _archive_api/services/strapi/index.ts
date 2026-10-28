
// fetchStrapi.ts

export async function fetchStrapi<T>(endpoint: string): Promise<T> {
    try {
    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(`Fetch failed with status: ${res.status}`);
    }

    const data = (await res.json()) as T;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
