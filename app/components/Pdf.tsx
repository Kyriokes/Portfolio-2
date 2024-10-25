"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ArrowL, ArrowR } from "../assets/icons";

// Set the worker source for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Pdf: React.FC = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pdfError, setPdfError] = useState<string | null>(null);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
        setPdfError(null);
    }

    function onDocumentLoadError(error: Error): void {
        console.error("Failed to load PDF", error);
        setPdfError("Failed to load PDF. Please try again later.");
    }

    const goToPreviousPage = (): void => {
        setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
    };

    const goToNextPage = (): void => {
        setPageNumber((prevPageNumber) =>
            Math.min(prevPageNumber + 1, numPages || 1)
        );
    };

    const openPdfInNewWindow = () => {
        window.open("/CV.pdf", "_blank");
    };

    return (
        <div className="flex flex-col sm:items-center p-5 bg-black bg-opacity-70 text-white text-center overflow-x-hidden overflow-y-auto box-border">
            {pdfError ? (
                <div className="text-red-500 mb-4">{pdfError}</div>
            ) : (
                <Document
                    file="/CV.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    className="flex items-center overflow-x-scroll max-w-max"
                >
                    <Page
                        pageNumber={pageNumber}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                    />
                </Document>
            )}
            <div className="flex flex-wrap my-1 w-full justify-center">
                <button
                    className="m-1 shadow bg-cTeal hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    onClick={goToPreviousPage}
                    disabled={pageNumber <= 1}
                >
                    <ArrowL />
                </button>
                <button
                    className="m-1 shadow bg-cTeal hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    onClick={goToNextPage}
                    disabled={pageNumber >= (numPages || 1)}
                >
                    <ArrowR />
                </button>
                <button
                    className="m-1 shadow bg-cTeal hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    onClick={openPdfInNewWindow}
                >
                    Abrir CV
                </button>
            </div>
        </div>
    );
};

export default Pdf;
