export async function GET() {
  const robots = `User-agent: *
    Allow: /
    Disallow: /admin
    Disallow: /api
    Sitemap: https://www.nearswipe.com/sitemap.xml`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
