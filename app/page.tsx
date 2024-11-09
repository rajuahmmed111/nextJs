import Hello from "./components/hello";
import VideoCoursePage from "./components/VideoCoursePage";

export default function Home() {
  console.log("what am I doing here...? server");

  return (
    <>
    <VideoCoursePage />
      <Hello />
    </>
  );
}
