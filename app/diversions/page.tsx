import Link from "next/link";

const page = () => {
  return (
    <main>
      <p className="text-lg">
        Work is fun. But there are other things that I do when I am not into
        teaching/research. <br />
        This page is devoted to some of the things I like to do in my spare time
        (when there is any <span className="text-blue-500">!</span>).
      </p>
      <ol className="ml-5 mt-5 list-decimal space-y-2">
        <li>
          <Link href="reading" className="text-blue-600 hover:text-blue-700">
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
