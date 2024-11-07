import Hello from "./components/hello";

export default function Home() {
  console.log("what am I doing here...? server");

  return (
    <>
      <h2>Welcome to Next.Js</h2>
      <Hello />
    </>
  );
}
