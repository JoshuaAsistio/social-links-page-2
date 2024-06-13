import React from "react";
import profileImage from "./images/avatar-jessica.jpeg";

function App() {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-[#141414]">
      <main className="bg-[#1f1f1f] text-center p-6 rounded-xl text-white">
        <section className="mb-9">
          <img
            src={profileImage}
            alt="jessica's profile"
            className="rounded-[50%] h-auto w-[90px] mx-auto mb-8"
          />

          <h1 className="text-2xl font-bold mb-5">Jessica Randall</h1>

          <address>
            <p className="text-[#bddc40]">London, United Kingdom</p>
          </address>
        </section>

        <p className="text-[#e3e3e3]">"Front-end developer and avid reader."</p>

        <section>
          <ul>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Frontend Mentor</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
