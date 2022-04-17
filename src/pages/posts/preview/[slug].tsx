import { GetServerSideProps, GetStaticProps } from "next"
import { getSession } from "next-auth/react"
import Head from "next/head"
import Link from "next/link"
import { RichText } from "prismic-dom"
import { FaStaylinked } from "react-icons/fa"
import { getPrismicClient } from "../../../services/prismic"

import styles from '../post.module.scss'

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function PostPreview({ post }:PostPreviewProps) {
  return (
    <>
    <Head>
      <title>{post.title} | Ignews</title>
    </Head>

    <main className={styles.container}>
      <article className={styles.post}>
        <h1>{post.title}</h1>
        <time>{post.updatedAt}</time>
        <div className={`${styles.postContent} ${styles.previewContent}`}
        dangerouslySetInnerHTML={{__html: post.content}}/>
        <div className={styles.continueReading}>
          Wanna continue reading?
          <Link href="/">
            <a href="">Subscribe now 😊</a>
          </Link>
        </div>
      </article>
    </main>
    </>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  const prismic = getPrismicClient()
  const response = await prismic.getByUID<any>('post', String(slug),{})
  const post = {
    slug,
    title: RichText.asText(response.data.Title),
    content: RichText.asHtml(response.data.Content.splice(0, 3)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  };

  return {
    props: {
      post
    },
    redirect: 60 * 30, // 30 minutes
  }
}