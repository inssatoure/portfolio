export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO format: YYYY-MM-DD
  description: string;
}

// Add your articles here. For each entry, place the HTML file at:
// content/blog/{slug}.html
const blogPosts: BlogPost[] = [
  {
    slug: 'bienvenue',
    title: 'Bienvenue sur mon blog',
    date: '2026-03-08',
    description: 'Premier article — je partagerai ici mes réflexions sur l\'innovation et la tech en Afrique de l\'Ouest.',
  },
];

export default blogPosts;
