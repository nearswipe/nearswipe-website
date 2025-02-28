import { client } from "@/lib/sanity";

export async function GET() {
  const BASE_URL = "https://www.nearswipe.com"; // Update with your actual domain

  const staticPages = [
    "",
    "about-us",
    "contact",
    "blog",
    "career",
    "products",
    "technology",
  ]; // Add more static pages if needed

  try {
    // Fetch blog posts from Sanity
    const blogQuery = `*[_type == "blog"] | order(_createdAt desc) {
      _id,
      "currentSlug": slug.current,
      _updatedAt
    }`;
    const blogs = await client.fetch(blogQuery);

    // Generate blog URLs for the sitemap
    const blogUrls = blogs.map((post) => `
      <url>
        <loc>${BASE_URL}/blog/${post.currentSlug}</loc>
        <lastmod>${post._updatedAt}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`);

    // Generate static page URLs
    const staticUrls = staticPages.map(
      (page) => `
      <url>
        <loc>${BASE_URL}/${page}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
      </url>`
    );

    // Generate the complete XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticUrls.join("\n")}
      ${blogUrls.join("\n")}
    </urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Error fetching blogs from Sanity:", error);
    return new Response("Failed to generate sitemap", { status: 500 });
  }
}
