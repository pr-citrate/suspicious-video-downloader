import React from 'react';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

function Home() {
  const videos = [
    { id: 1, name: 'Video 1', slug: 'video1', downloadUrl: 'https://drive.google.com/uc?export=download&id=1nz8D6OsO_qYgA06EDmtoUxrR8piMVpGB' },
    { id: 2, name: 'Video 2', slug: 'video2', downloadUrl: 'https://drive.google.com/uc?export=download&id=1WE_OebYwKo4X4D0tEFB7QcbDqNpln3xl' },
    { id: 3, name: 'Video 3', slug: 'video3', downloadUrl: 'https://drive.google.com/uc?export=download&id=1PQ_rgV15nVpCuMWCQwaaUiUpp1Momci0' },
    { id: 4, name: 'Video 4', slug: 'video4', downloadUrl: 'https://drive.google.com/uc?export=download&id=1lcTXVSTM5NhEgAmdoZx4XV7ZV8TW3t-p' },
    { id: 5, name: 'Video 5', slug: 'video5', downloadUrl: 'https://drive.google.com/uc?export=download&id=1-wU7fskt62v869lm-tEmwPect2Dgxhs9' },
  ];

  return (
    <div className="flex flex-col items-center p-5">
      <div className="marquee w-full bg-gray-800 py-2">
        <span className="text-neonPink font-comic text-xl">
          최신 크랙 프로그램! 클릭해서 다운로드! &nbsp; • &nbsp;
          최신 크랙 프로그램! 클릭해서 다운로드! &nbsp; • &nbsp;
          최신 크랙 프로그램! 클릭해서 다운로드!
        </span>
      </div>

      <h1 className="text-6xl mt-10 mb-5 font-impact text-neonGreen animate-pulse">
        DOWNLOAD for FREE!
      </h1>
      <ul className="mt-5 space-y-4">
        {videos.map((video) => (
          <li key={video.slug} className="animate-pulse">
            <Link
              to={`/${video.slug}`}
              className="text-neonBlue text-2xl hover:text-neonPink transition-colors duration-300"
            >
              Download {video.name}.exe
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-col items-center">
        <p className="text-neonGreen text-xl">이 사이트를 공유하세요:</p>
        <QRCodeSVG value={window.location.href} size={128} className="mt-2 animate-spin-slow"/>
      </div>
      <footer className="mt-20 text-sm text-gray-500">
        © 2024 Free Legal Download. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
