
import Header from "./component/header";
import Card from "./component/card";

import Porsce911 from "./component/porsce911";


export default function Home() {
  return (
      <main >
        <Header />

        <Card />

      <div className="w-full h-[500px] bg-zinc-900">
      <Porsce911 />
      </div>

      </main>
  );
}
