import React from 'react';
import Container from 'react-bootstrap/Container';
import { Top } from './Navbar';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <>
     
<Top />
      <header className=" py-20 md:h-[100vh] flex flex-col justify-center items-center from-pink-100 via-purple-100 to-blue-100">
        <Container className="text-center">
          <h1 className="text-5xl font-bold text-[#C30E59] mb-4">Welcome to TODO APP</h1>
          <p className="text-lg text-gray-700">
            Organize your tasks efficiently with our user-friendly app. <br />
            Sign up now and start managing your day!
          </p>
          <Link to="/tasks">
          <button className="mt-6 px-6 py-3 bg-[#C30E59] text-white font-bold rounded-lg hover:bg-[#a30e50]">
            Get Started
          </button></Link>
        </Container>
      </header>
    </>
  );
}

export default Home;
