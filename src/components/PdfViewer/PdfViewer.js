'use client';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import styles from './PdfViewer.module.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = ({
  file,
  width = 600,
  height = 800,
  showControls = true,
  className = ''
}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error) {
    setError(error);
    setLoading(false);
  }

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPages));
  };

  if (loading) {
    return (
      <div className={`${styles.container} ${className}`}>
        <div className={styles.loading}>Loading PDF...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${styles.container} ${className}`}>
        <div className={styles.error}>
          Error loading PDF: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        className={styles.document}
      >
        <Page
          pageNumber={pageNumber}
          width={width}
          className={styles.page}
        />
      </Document>

      {showControls && numPages > 1 && (
        <div className={styles.controls}>
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className={styles.button}
          >
            Previous
          </button>
          <span className={styles.pageInfo}>
            Page {pageNumber} of {numPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className={styles.button}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
