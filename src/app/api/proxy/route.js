// app/api/proxy/route.js
import fetch from 'node-fetch';

export async function POST(request) {
  const url = 'https://health.api.nvidia.com/v1/biology/nvidia/molmim/generate';
  const API_KEY = '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'; // Store your API key securely

  const payload = await request.json();

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: response.status });
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}
