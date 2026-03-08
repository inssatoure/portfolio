import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import blogPosts, { BlogPost } from '../../src/blogPosts';

interface BlogArticleProps {
  post: BlogPost;
  htmlContent: string;
}

export default function BlogArticle({ post, htmlContent }: BlogArticleProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Blog</title>
        <meta name="description" content={post.description} />
      </Head>
      <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', overflow: 'auto' }}>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
          .blog-content {
            font-size: 16px;
            line-height: 1.8;
            color: #333;
          }
          .blog-content h1, .blog-content h2, .blog-content h3 {
            margin: 40px 0 20px 0;
            font-weight: 700;
          }
          .blog-content h1 { font-size: 32px; }
          .blog-content h2 { font-size: 24px; }
          .blog-content h3 { font-size: 20px; }
          .blog-content p { margin: 16px 0; }
          .blog-content ul, .blog-content ol { margin: 20px 0 20px 30px; }
          .blog-content li { margin: 8px 0; }
          .blog-content a { color: #ff00ff; text-decoration: none; border-bottom: 1px dotted #ff00ff; }
          .blog-content a:hover { opacity: 0.8; }
          .blog-content blockquote { border-left: 4px solid #00ffff; padding-left: 20px; margin: 20px 0; color: #666; font-style: italic; }
          .blog-content code { background: #f5f5f5; padding: 2px 6px; border-radius: 3px; font-family: 'Courier New', monospace; font-size: 14px; }
          .blog-content pre { background: #f5f5f5; padding: 16px; border-radius: 6px; overflow-x: auto; margin: 20px 0; }
          .blog-content img { max-width: 100%; height: auto; margin: 20px 0; border-radius: 6px; }
        `}</style>

        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '60px 20px' }}>
          <Link href="/blog" style={{ color: '#ff00ff', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>
            &larr; Retour au blog
          </Link>

          <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginTop: '30px', marginBottom: '15px' }}>
            {post.title}
          </h1>
          <time style={{ color: '#999', fontSize: '14px' }}>
            {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>

          <div style={{ height: '2px', background: '#ff00ff', margin: '40px 0' }} />

          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          <div style={{ marginTop: '60px', paddingTop: '30px', borderTop: '1px solid #eee' }}>
            <Link href="/blog" style={{ color: '#ff00ff', textDecoration: 'none', fontWeight: 'bold' }}>
              &larr; Voir tous les articles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

function extractBodyContent(html: string): string {
  const bodyStart = html.indexOf('<body');
  if (bodyStart !== -1) {
    const bodyTagEnd = html.indexOf('>', bodyStart);
    if (bodyTagEnd !== -1) {
      const bodyEnd = html.indexOf('<\/body>', bodyTagEnd);
      if (bodyEnd !== -1) {
        return html.substring(bodyTagEnd + 1, bodyEnd);
      }
    }
  }
  return html;
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return { notFound: true };
  }

  const filePath = path.join(process.cwd(), 'content', 'blog', params.slug + '.html');

  let htmlContent = '';
  try {
    const rawHtml = fs.readFileSync(filePath, 'utf-8');
    htmlContent = extractBodyContent(rawHtml);
  } catch (e) {
    return { notFound: true };
  }

  return {
    props: { post, htmlContent },
  };
}
