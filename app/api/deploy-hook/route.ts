// scripts/update-storefront/route.ts (this is a standalone API route just for automation)

export async function POST() {
  const token = process.env.FOURTHWALL_STOREFRONT_TOKEN;
  const storefrontUrl = 'https://shadowfanglabs.com/shop';

  const res = await fetch('https://storefront-api.fourthwall.com/v1/storefront', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ storefront_url: storefrontUrl }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    return new Response(`Error: ${errorText}`, { status: res.status });
  }

  return new Response('Storefront URL updated via deploy hook.', { status: 200 });
}
