export interface Author {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

// Keyed by the `author` string used in blog frontmatter.
export const authors: Record<string, Author> = {
  'David Turnbull': {
    name: 'David Turnbull',
    role: 'Founder & AWS Solutions Architect',
    bio: "David founded North Point Digital and works as an AWS Solutions Architect with over a decade of enterprise cloud experience. He focuses on AWS cost optimisation, security and helping small businesses put AI to work — without long-term contracts or rewrites.",
    image: '/team/david-turnbull.webp',
  },
};

export function getAuthor(name: string): Author {
  return authors[name] ?? { name, role: '', bio: '' };
}
