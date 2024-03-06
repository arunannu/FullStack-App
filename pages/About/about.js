import React from 'react';
import Link from 'next/link';
import { teamDetails } from './teamDetails';

const About = () => {
  return (
    <div>
      <h1>All Developers</h1>
      <ul>
        {teamDetails.map(member => (
          <li key={member.id}>
            <Link href={`/About/${member.id}`}> 
              {member.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
