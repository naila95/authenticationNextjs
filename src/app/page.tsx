import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  // const { userId } = auth();

  // if (userId) {
  //   redirect("/dashboard");
  // }
  return (
    <main className="">
      <h1>Auth in NextJs 14</h1>
    </main>
  );
}