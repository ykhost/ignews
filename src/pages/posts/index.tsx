import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss'
import Prismic from '@prismicio/client'
import Link from 'next/link';
import { RichText } from 'prismic-dom'

import { GetStaticProps } from 'next';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updateAt: string;
}

interface PostsProps{
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) { 

  return(
    <>
      <Head>
          <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          { posts.map(post => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <a>
                <time>{post.updateAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  ) 
}

export const getStaticProps : GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query<any>([
    Prismic.predicates.at("document.type", "post")
  ], {
    fetch: ['post.Title', 'post.Content'],
    pageSize: 100
  })

  const posts = response.results.map(post => {
    console.log(post.data.Content.find(content => content.type == 'paragraph')?.text ?? '');
    return{
      slug: post.uid,
      title: RichText.asText(post.data.Title),
      excerpt: post.data.Content.find(content => content.type == 'paragraph')?.text ?? '',
      updateAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })
  // console.log(response.results.data.excerpt)
  return {
    props: {
      posts
    }
  }
}