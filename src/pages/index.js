import Image from 'next/image'
import { createClient } from "contentful";
import Layout from '@/components/layout/Layout';


export default function Home({projects}) {
  console.log(projects);
  return (
    <Layout>
      <main className="bg-white text-black">
        <h1>home</h1>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  // 1 - Connect to contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFULL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFULL_ACCESS_TOKEN,
  });

  // 2 - Récupérer data en cas de succès pour le content type => escciBlog
  const data = await client.getEntries({
    content_type: "portfolio",
  });
 
  // 3 - on envoie la data dans les props
  return {
    props: {
      projects: data.items,
    },
  };
}
