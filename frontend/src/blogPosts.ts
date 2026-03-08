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
  {
    slug: 'al-himma',
    title: 'Al-Himma — La Haute Aspiration Spirituelle',
    date: '2026-03-08',
    description: 'Analyse de la conférence de Serigne Khadim Syll sur l\'aspiration spirituelle élevée.',
  },
  {
    slug: 'miracles-serigne-touba',
    title: 'Les Miracles de Serigne Touba',
    date: '2026-03-08',
    description: 'Exploration des miracles et de l\'héritage spirituel de Serigne Touba.',
  },
];

export default blogPosts;
