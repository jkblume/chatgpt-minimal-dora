import Head from 'next/head';
import ChatGPT from '@/components/ChatGPT'
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'

import FooterBar from '@/components/FooterBar'
import HeaderBar from '@/components/HeaderBar'

import styles from './index.module.less'

export default function Home() {
  return (
    <>
    <Head>
      <title>DORA for Devs</title>
      <meta name="description" content="Chat with ChatGPT and a rag case in between that adds content to answer your developer related questions about dora!" />
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
    </Head>
    <Layout hasSider className={styles.layout}>
      <Layout>
        <HeaderBar />
        <Content className={styles.main}>
          <ChatGPT fetchPath="/api/chat-completion" />
        </Content>
        <FooterBar />
      </Layout>
    </Layout>
    </>
  )
}
