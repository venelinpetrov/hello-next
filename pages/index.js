import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.name}</a>
        </Link>
    </li>
);
const Index = props => (
    <Layout>
        <p>Hello Next.js</p>
        <ul>
            {props.shows.map(show => (
                <PostLink
                    key={show.id}
                    id={show.id}
                    name={show.name}>
                </PostLink>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(data.length);

    return {
        shows: data.map(entry => entry.show)
    }
}
export default Index;