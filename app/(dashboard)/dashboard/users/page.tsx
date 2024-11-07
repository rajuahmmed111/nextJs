import Link from "next/link";

const Page = () => {
  return (
    <div className="m-10">
      <h1>Dashboard Users</h1>

      <ul className="mt-4 ml-5">
        <li><Link href={`/dashboard/users/1`}>user1</Link></li>
        <li><Link href={`/dashboard/users/2`}>user2</Link></li>
        <li><Link href={`/dashboard/users/3`}>user3</Link></li>
        <li><Link href={`/dashboard/users/4`}>user4</Link></li>
      </ul>
    </div>
  );
};

export default Page;
