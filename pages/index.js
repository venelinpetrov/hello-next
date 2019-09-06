import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const PostLink = props => (
    <>
        <li>
            <Link href="/p/[id]" as={`/p/${props.id}`}>
                <a>{props.name}</a>
            </Link>
        </li><style jsx>{`
            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: red;
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </>
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
        </ul><style jsx>{`
        h1,
        a {
            font-family: 'Arial';
        }

        ul {
            padding: 0;
        }
      `}</style>
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