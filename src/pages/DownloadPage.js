// src/pages/DownloadPage.js
import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

function DownloadPage() {
  const { slug } = useParams();
  const qrRef = useRef(null);

  // 슬러그에 따른 다운로드 URL 매핑
  const videoMap = {
    video1: 'https://drive.google.com/uc?export=download&id=1nz8D6OsO_qYgA06EDmtoUxrR8piMVpGB',
    video2: 'https://drive.google.com/uc?export=download&id=1WE_OebYwKo4X4D0tEFB7QcbDqNpln3xl',
    video3: 'https://drive.google.com/uc?export=download&id=1PQ_rgV15nVpCuMWCQwaaUiUpp1Momci0',
    video4: 'https://drive.google.com/uc?export=download&id=1lcTXVSTM5NhEgAmdoZx4XV7ZV8TW3t-p',
    video5: 'https://drive.google.com/uc?export=download&id=1-wU7fskt62v869lm-tEmwPect2Dgxhs9',
  };

  const downloadUrl = videoMap[slug];

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${slug}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('잘못된 다운로드 링크입니다.');
    }
  };

  const handleShare = async () => {
    if (qrRef.current) {
      try {
        const svg = qrRef.current.querySelector('svg');
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svg);
        const canvas = document.createElement('canvas');
        const img = new Image();
        img.src = 'data:image/svg+xml;base64,' + btoa(svgString);
        img.onload = async () => {
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(async (blob) => {
            if (blob) {
              try {
                const item = new ClipboardItem({ 'image/png': blob });
                await navigator.clipboard.write([item]);
                alert('QR 코드가 클립보드에 복사되었습니다!');
              } catch (err) {
                // 이미지 복사 실패 시 URL 복사
                await navigator.clipboard.writeText(downloadUrl);
                alert('QR 코드 복사에 실패했습니다. 다운로드 링크가 클립보드에 복사되었습니다!');
              }
            }
          });
        };
      } catch (error) {
        console.error('QR 코드 복사 실패:', error);
        // 에러 발생 시 URL 복사
        await navigator.clipboard.writeText(downloadUrl);
        alert('QR 코드 복사에 실패했습니다. 다운로드 링크가 클립보드에 복사되었습니다!');
      }
    }
  };

  if (!downloadUrl) {
    return (
      <div className="flex flex-col items-center p-5">
        {/* 마퀴 텍스트 추가 */}
        <div className="marquee w-full bg-gray-800 py-2 mt-5">
          <span className="text-neonPink font-comic text-xl">
            잘못된 다운로드 링크! &nbsp; • &nbsp; 잘못된 다운로드 링크! &nbsp; • &nbsp;
          </span>
        </div>

        <h2 className="text-5xl mt-10 mb-5 font-impact text-neonGreen animate-pulse">
          잘못된 페이지입니다.
        </h2>
        <button
          onClick={() => window.location.href = '/'}
          className="text-neonBlue text-2xl hover:text-neonPink transition-colors duration-300"
        >
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-5">
      {/* 마퀴 텍스트 추가 */}
      <div className="marquee w-full bg-gray-800 py-2 mt-5">
        <span className="text-neonPink font-comic text-xl">
          {slug}.exe - 지금 다운로드하세요! &nbsp; • &nbsp; {slug}.exe - 지금 다운로드하세요! &nbsp; • &nbsp;
        </span>
      </div>

      <h2 className="text-5xl mt-10 mb-5 font-impact text-neonGreen animate-pulse">
        "{slug}.exe" 다운로드 준비 완료!
      </h2>
      <button
        onClick={handleDownload}
        className="mt-5 px-8 py-4 bg-neonBlue hover:bg-neonPink text-black font-bold rounded animate-bounce transition-colors duration-300"
      >
        다운로드 시작
      </button>
      <div className="mt-10 flex flex-col items-center" ref={qrRef}>
        <p className="text-neonGreen text-xl">이 링크를 공유하세요:</p>
        <QRCodeSVG value={window.location.href} size={128} className="mt-2 animate-spin-slow" />
      </div>
      <button
        onClick={handleShare}
        className="mt-5 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded animate-pulse transition-colors duration-300"
      >
        QR 코드 공유
      </button>
    </div>
  );
}

export default DownloadPage;
