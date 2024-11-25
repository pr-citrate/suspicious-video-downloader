import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

function QRCodeComponent({ value, size = 128, className }) {
  return <QRCodeSVG value={value} size={size} className={className} />;
}

export default QRCodeComponent;
