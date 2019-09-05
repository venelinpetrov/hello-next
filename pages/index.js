import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);
const Index = () => (
    <Layout>
        <p>Hello Next.js</p>
        <ul>
            <PostLink id="post 1"></PostLink>
            <PostLink id="post 2"></PostLink>
            <PostLink id="post 3"></PostLink>
        </ul>
    </Layout>
);

export default Index;