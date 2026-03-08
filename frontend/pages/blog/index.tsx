import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import blogPosts from '../../src/blogPosts';

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Blog | Issa Toure</title>
        <meta
          name="description"
          content="Articles sur l'innovation, la technologie et l'entrepreneuriat"
        />
      </Head>
      <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', overflow: 'auto' }}>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        `}</style>

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
          <div style={{ marginBottom: '60px' }}>
            <Link
              href="/"
              style={{ color: '#ff00ff', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}
            >
              &larr; Retour &agrave; l&apos;accueil
            </Link>
            <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>Blog</h1>
            <p style={{ fontSize: '18px', color: '#666', fontStyle: 'italic' }}>
              R&eacute;flexions sur l&apos;innovation et la tech
            </p>
          </div>

          <div style={{ display: 'grid', gap: '40px' }}>
            {blogPosts.length === 0 ? (
              <p style={{ color: '#999' }}>Aucun article pour le moment.</p>
            ) : (
              blogPosts.map((post) => (
                <article
                  key={post.slug}
                  style={{
                    borderLeft: '4px solid #ff00ff',
                    paddingLeft: '20px',
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>
                      {post.title}
                    </h2>
                    <time style={{ color: '#999', fontSize: '14px', display: 'block', marginBottom: '12px' }}>
                      {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
                      {post.description}
                    </p>
                  </Link>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
