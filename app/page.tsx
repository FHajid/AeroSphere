
import Header from "./component/header";
import Card from "./component/card";

import ThreeCube from "./component/3d";


export default function Home() {
  return (
      <main >
        <Header />

        <Card />

      <div className="w-full h-[500px] bg-zinc-900">
           <ThreeCube />
        </div>

      </main>
  );
}
