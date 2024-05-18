import { useState } from "react";
import ProjectPage from "./pages/projects";
import AboutPage from "./pages/about";
import ProjectCard from "./components/projectCard";
import CircularImage from "./components/circularImage";
import AppBar from "./components/appBar";
import "./App.css";

function App() {
  return (
    <div>
      <AppBar />
      <CircularImage src="../public/assets/selfie.jpg" alt="Nick Ledbetter" />
      <AboutPage />
      <p>Professional Projects and Open Source </p>
      <ProjectCard
        title="American Veterinary Medical Association App"
        description="This was my Senior Capstone Project at Oregon State University. I led the development of a mobile application for the American Veterinary Medical Association. This mobile app was part of a comprehensive solution including a full-stack web app, mobile app, and database developed by my team over the course of a year. The mobile app was built using Flutter, and I also contributed to the React/Node.js web app and PostgreSQL database."
      />
      <ProjectCard
        title="Flutter"
        description="Flutter is my favorite programming language, and I am starting to contribute in my spare time."
      />
      <p>
        ** Highlight AVMA Project, recently started contributing to Flutter in
        free time
      </p>
      <p>My Projects</p>
      <p>
        I love to create new things! Below you can find some of my favorite
        projects so far
      </p>
      <ProjectPage />
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id
        dui in purus cursus pellentesque ut quis velit. Aliquam aliquet felis
        quis turpis pharetra rhoncus. Aliquam nisi orci, condimentum vel
        tincidunt eleifend, tristique nec nulla. Curabitur sapien orci, vehicula
        at tortor sit amet, eleifend hendrerit nisi. Morbi ac pharetra mi. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium at metus
        id euismod. Donec est tortor, vehicula sed nibh in, tristique lobortis
        risus. Duis tempus nisl eget sagittis dapibus. Maecenas ultricies id
        tellus id euismod. Curabitur id suscipit ex, vitae finibus sem. Mauris
        ultricies lectus in massa aliquet tempus. Nulla bibendum sagittis felis
        in rhoncus. Etiam vulputate ullamcorper blandit. Proin dignissim magna
        ac tellus fermentum, at rhoncus nisi finibus. Vivamus luctus libero
        euismod ex porttitor, sit amet imperdiet neque sagittis. Vestibulum
        egestas id urna aliquam rutrum. Nunc sed lectus eu lorem luctus luctus
        efficitur at leo. Fusce sollicitudin lorem ut sapien aliquet, quis
        eleifend nibh rutrum. Morbi tincidunt eget est eget semper. Fusce
        accumsan ipsum ante, eu consequat diam convallis ac. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Vestibulum eleifend erat venenatis ligula dapibus, vitae
        gravida ipsum sagittis. Cras viverra laoreet ante, vel varius nibh
        imperdiet nec. Praesent laoreet non felis eu pharetra. Nulla aliquam
        congue dui, id viverra neque elementum vel. Suspendisse aliquet suscipit
        mauris sit amet congue. Sed purus felis, luctus in lorem quis, suscipit
        auctor magna. Quisque vel dapibus tellus. Pellentesque in felis ipsum.
        Aenean suscipit rhoncus elit, sed ornare sapien consectetur vitae.
        Curabitur bibendum dignissim metus et tincidunt. Ut accumsan varius
        quam. Suspendisse potenti. Donec egestas suscipit leo vel facilisis.
        Etiam dapibus mattis orci, ac suscipit dui feugiat aliquet. Mauris eget
        urna neque. Quisque commodo orci in mi convallis ornare. Etiam rutrum
        volutpat porta. Vivamus vulputate elit sem, id aliquet nunc eleifend
        vitae. In porttitor neque sapien, a tempor tellus pellentesque sit amet.
        Vestibulum ut luctus lorem. Donec diam dolor, porta ut fermentum id,
        tincidunt sed massa. Curabitur sed consequat ante. Pellentesque sagittis
        accumsan purus, quis interdum lacus efficitur ut. Integer congue
        efficitur libero non eleifend. Nunc commodo sem quis facilisis eleifend.
        Morbi nisl libero, mattis eget risus ut, cursus dictum ligula.
        Suspendisse porttitor consectetur augue, id interdum urna porta quis.
        Cras hendrerit risus eget ornare ultrices. Suspendisse et massa nisi.
        Donec molestie leo at risus elementum vestibulum. Aliquam ornare
        vehicula mauris, non lacinia magna rhoncus et. Aliquam nec turpis diam.
        Proin eu ex nisl. Nulla sed urna pretium, ullamcorper mi at, rhoncus
        sem. Nulla turpis sem, molestie a aliquet quis, blandit condimentum
        risus. Etiam ullamcorper urna eu mauris rhoncus, nec tristique leo
        lobortis. Suspendisse vitae dui sed magna pulvinar malesuada. Integer
        sollicitudin, tortor vitae congue sagittis, ipsum tortor mattis orci,
        vitae convallis libero lorem sed tellus. Ut egestas feugiat pulvinar.
        Duis aliquam maximus magna nec condimentum. Sed arcu lacus, imperdiet
        quis gravida vitae, mollis vel mi. Sed commodo enim sit amet odio
        placerat facilisis. Vivamus erat augue, viverra id augue vitae, feugiat
        sollicitudin metus. Sed pretium malesuada lacus, ac scelerisque dolor
        imperdiet eget. In porta, quam in tempor pretium, erat nulla faucibus
        augue, consectetur pellentesque nibh lectus vel lectus. Praesent sed
        odio vestibulum, mattis dolor ullamcorper, ornare purus. Vivamus at
        massa eget metus rutrum laoreet vitae eu ipsum. Curabitur ultricies
        rutrum pulvinar. Mauris scelerisque rutrum tincidunt. Aliquam vel dolor
        turpis. Vivamus commodo mattis est, at luctus dui scelerisque a. Aenean
        ut porta sem. Nullam sodales sapien nec elit placerat maximus.
        Suspendisse lacus felis, varius gravida lorem quis, finibus tristique
        lacus. In hac habitasse platea dictumst. Nulla a lorem viverra,
        pellentesque felis nec, efficitur justo. Aliquam fermentum, felis eget
        dictum vehicula, sapien dolor rutrum risus, lacinia elementum odio ex a
        leo. In porta dignissim enim, sed condimentum lacus maximus in. Nullam
        elementum pretium diam, quis ultricies massa iaculis vulputate. Proin
        tincidunt turpis justo, et vestibulum metus pellentesque id. Phasellus
        lectus dui, tincidunt euismod ante et, eleifend rhoncus dolor. Ut vel
        lorem congue, iaculis tortor pulvinar, fermentum urna. Pellentesque
        hendrerit posuere iaculis. Maecenas eget nibh magna. Pellentesque vel
        nibh volutpat, fermentum arcu et, fringilla magna. In pharetra eu purus
        non mattis. Pellentesque pharetra dui quis nisl maximus ultricies. In
        aliquet vestibulum risus eget molestie. Donec eu massa at erat
        condimentum accumsan. Sed viverra ex vitae tortor tempor finibus. In at
        facilisis lectus. Duis elementum, metus id euismod feugiat, nisi mauris
        dapibus lectus, eget cursus odio purus sit amet quam. Duis quis turpis
        ut nisl bibendum finibus. Aenean tincidunt, ipsum a molestie
        ullamcorper, nibh magna congue nulla, at posuere tellus quam sit amet
        mauris. Morbi a ante molestie, iaculis turpis non, lacinia leo. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Curabitur vel orci sed est pulvinar interdum sed vel
        nunc. Integer vel rhoncus nibh. Proin ac metus faucibus, aliquam ex in,
        mollis tellus. Vivamus lacinia erat eget porttitor pretium. Aenean a
        condimentum eros, nec suscipit nisi. Nullam et dui tellus. Cras faucibus
        tristique lorem a euismod.{" "}
      </p>
    </div>
  );
}

export default App;

// return (
//   <>
//     <div>
//       <a href="https://vitejs.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.tsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
//   </>
// )
