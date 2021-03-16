import React from 'react';
import Links from './Links';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    feed {
      id
      links (orderBy: { createdAt: asc }) {
        id
        createdAt
        url
        description
      }
    }
  }
`;

const LinkListReversed = () => {
    const { data } = useQuery(FEED_QUERY);

    return (
        <div className="App">
            <header className="App-header">
            {data && (
                <>
                    {data.feed.links.map((link) => (
                        <Links key={link.id} link={link} />
                    ))}
                </>
            )}
            </header>
        </div>
    );
};

//sort((a, b) =>(b.id - a.id))

export default LinkListReversed;
