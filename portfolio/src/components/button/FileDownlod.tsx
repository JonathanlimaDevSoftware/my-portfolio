// DownloadButton.tsx
import React from 'react';

interface DownloadButtonProps {
  fileName: string;
  filePath: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileName, filePath }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
  };

  return (
    <button onClick={handleDownload} className="download-button">
      Baixar Currículo
    </button>
  );
};

export default DownloadButton;
