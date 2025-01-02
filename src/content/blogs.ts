// src/content/blogs.ts

// 1. Define the BlogPost interface
export interface BlogPost {
    date: string;  // e.g. "Dec 30th, 2024"
    url: string;
    title: string;
    // Add more fields if needed
  }
  
  // 2. Helper function to parse date strings like "Dec 30th, 2024"
  function parseDateStr(dateStr: string): Date {
    // Remove st, nd, rd, th from the day part
    // e.g. "30th" --> "30"
    const cleaned = dateStr.replace(/\b(\d+)(st|nd|rd|th)\b/, "$1");
    return new Date(cleaned); // Now should parse correctly: "Dec 30, 2024"
  }
  
  /**
   * groupBlogsByMonth
   * Groups blogs into an object keyed by something like "December 2024" from their date strings.
   *
   * @param {BlogPost[]} blogPosts - array of blog posts
   * @return {Record<string, BlogPost[]>} object with keys as the month-year and values as array of posts
   */
  export function groupBlogsByMonth(blogPosts: BlogPost[]): Record<string, BlogPost[]> {
    const grouped: Record<string, BlogPost[]> = {};
  
    blogPosts.forEach((post) => {
      // 3. Use parseDateStr to avoid "Invalid Date"
      const dateObj = parseDateStr(post.date);
  
      // 4. Format "Month YYYY" (e.g. "December 2024")
      const monthName = dateObj.toLocaleString("default", { month: "long" });
      const year = dateObj.getFullYear();
      const groupKey = `${monthName} ${year}`;  
  
      if (!grouped[groupKey]) {
        grouped[groupKey] = [];
      }
      grouped[groupKey].push(post);
    });
  
    return grouped;
  }
  
  // 5. Your blogs array
  export const blogs: BlogPost[] = [
    {
      date: "Dec 30th, 2024", // will become "Dec 30, 2024" internally
      url: "/blog/preface",
      title: "Preface"
    },
    // Add more blog entries if desired
    {
        date: "Jan 02nd, 2025", // date
        url: "/blog/intro-elem",
        title: "Introduction - Elementary (Part 1)"
    },
  ];
  