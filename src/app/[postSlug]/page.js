import React from 'react';

import { notFound } from 'next/navigation';
import { loadBlogPost } from '@/helpers/file-helpers';
import BlogHero from '@/components/BlogHero';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

import styles from './postSlug.module.css';
import COMPONENT_MAP from '@/helpers/mdx-components'

export async function generateMetadata({ params }) {

  const { postSlug } = await params;

  return {
    title: postSlug
  }
}

async function BlogPost({ params }) {

  const { postSlug } = await params;
  // const { frontmatter, content } = await loadBlogPost(postSlug)
  const blogPostData = await loadBlogPost(postSlug);

  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
  };

  if (!blogPostData) notFound();

  const { frontmatter, content } = blogPostData;

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote
          source={content}
          components={COMPONENT_MAP}
          options={options}
        />
      </div>
    </article>
  );
}

export default BlogPost;
