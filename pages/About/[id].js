

import { teamDetails } from "./teamDetails";

export default function TeamMember({ member }) {
  return (
    <div>
      {member ? (
        <div>
          <h1>{member.name}</h1>
          <p>{member.role}</p>
        </div>
      ) : (
        <div>
          <h1>Developer doesn't exist</h1>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const id = parseInt(params.id);
  const member = teamDetails.find(member => member.id === id);
  return { props: { member } };
}
