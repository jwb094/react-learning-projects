const posts = [
  {
    id: 1,
    slug: "getting-started-with-react",
    title: "Getting Started With React",
    excerpt: "A beginner-friendly introduction to React and its core concepts.",
    content: `
React is a JavaScript library used for building user interfaces, especially single-page applications.

It allows developers to create reusable components and manage state efficiently.
    `,
    author: {
      name: "John Doe",
      avatar: "/avatars/john.png",
    },
    category: "React Basics",
    tags: ["react", "javascript", "frontend"],
    publishedAt: "2026-01-10",
    readingTime: 5,
    featuredImage: "/images/react-post-1.jpg",
  },

  {
    id: 2,
    slug: "understanding-usestate-hook",
    title: "Understanding the useState Hook",
    excerpt: "Learn how state works in functional components using useState.",
    content: `
The useState hook allows you to add state to functional components.

It returns a state value and a function to update it.
    `,
    author: {
      name: "Jane Smith",
      avatar: "/avatars/jane.png",
    },
    category: "Hooks",
    tags: ["react", "hooks", "state"],
    publishedAt: "2026-02-05",
    readingTime: 6,
    featuredImage: "/images/react-post-2.jpg",
  },

  {
    id: 3,
    slug: "react-router-dynamic-routes",
    title: "React Router Dynamic Routes Explained",
    excerpt: "Learn how to build dynamic routes using React Router v6.",
    content: `
Dynamic routing lets you create pages based on URL parameters like IDs or slugs.

This is essential for blogs, dashboards, and product pages.
    `,
    author: {
      name: "Alex Johnson",
      avatar: "/avatars/alex.png",
    },
    category: "Routing",
    tags: ["react-router", "routing", "spa"],
    publishedAt: "2026-03-12",
    readingTime: 7,
    featuredImage: "/images/react-post-3.jpg",
  },
];

export default posts;
