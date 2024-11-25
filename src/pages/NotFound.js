import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center p-5">
      <div className="marquee w-full bg-gray-800 py-2">
        <span className="text-neonPink font-comic text-xl">
          잘못된 페이지 접근! &nbsp; • &nbsp; 잘못된 페이지 접근! &nbsp; • &nbsp;
        </span>
      </div>

      <h1 className="text-5xl mt-10 mb-5 font-impact text-neonGreen animate-pulse">
        404 - 페이지를 찾을 수 없습니다.
      </h1>
      <Link
        to="/"
        className="text-neonBlue text-2xl hover:text-neonPink transition-colors duration-300"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default NotFound;
