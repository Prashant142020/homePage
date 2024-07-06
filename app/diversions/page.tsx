import Link from "next/link";

const page = () => {
  return (
    <main>
      <p>
        Work is fun. But there are other things that I do when I am not into
        teaching/research. This page is devoted to some of the things I like to
        do in my spare time (when there is any!).
      </p>
      <ol className="mx-10 list-decimal">
        <li>
          <Link href="reading" className="text-blue-600">
            Reading
          </Link>
        </li>
        <li>Yoga</li>
        <li>Photography</li>
        <li>Music</li>
        <li>Writing</li>
        <li>Language (French)</li>
      </ol>
    </main>
  );
};
export default page;
