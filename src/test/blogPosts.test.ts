import { describe, expect, it } from "vitest";
import { blogPosts, getBlogPostsSortedByDateDesc, getLatestBlogPosts } from "@/data/blogPosts";

describe("blog posts selectors", () => {
  it("returns posts sorted by descending date", () => {
    const sorted = getBlogPostsSortedByDateDesc();

    for (let i = 1; i < sorted.length; i += 1) {
      const prevDate = new Date(sorted[i - 1].date).getTime();
      const currentDate = new Date(sorted[i].date).getTime();
      expect(prevDate).toBeGreaterThanOrEqual(currentDate);
    }
  });

  it("returns up to six posts", () => {
    const latestPosts = getLatestBlogPosts();

    expect(latestPosts.length).toBeLessThanOrEqual(6);
    expect(latestPosts.length).toBe(Math.min(blogPosts.length, 6));
  });
});
