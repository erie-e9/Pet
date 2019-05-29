import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
// import { NextPage } from 'next';
// import { Mutation } from 'react-apollo'
import { LoginUserComponent } from '../generated/apolloComponents';

// const IndexPage: NextPage = () => {
  const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example" description="ewe9">
      <h1>Hola pal que lee 👋</h1>
      <p><Link href='/about'><a>About</a></Link></p>
      <LoginUserComponent>
        {mutate => (
          <button onClick={async () => {
            const response = await mutate({
              variables: {email: "eric@gmail.com", password: "password123"}
            })
            console.log('ewe', response)
          }}>Call login mutation</button>
        )}
        </LoginUserComponent>
    </Layout>
  )
}

export default IndexPage;
