"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ArrowL, ArrowR } from "../assets/icons";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Pdf: React.FC = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pdfError, setPdfError] = useState<string | null>(null);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
        setPdfError(null);
    };

    const onDocumentLoadError = (error: Error) => {
        console.error("Failed to load PDF", error);
        setPdfError("Failed to load PDF. Please try again later.");
    };

    const goToPreviousPage = () => {
        setPageNumber((prev) => Math.max(prev - 1, 1));
    };

    const goToNextPage = () => {
        setPageNumber((prev) => Math.min(prev + 1, numPages || 1));
    };

    const openPdfInNewWindow = () => {
        window.open("/CV_SERGIO_FERRARI_BRYCE.pdf", "_blank");
    };

    return (
        <div className="flex flex-col sm:items-center p-5 bg-gray-800 bg-opacity-80 text-white text-center overflow-x-hidden overflow-y-auto box-border rounded-xl">
            {pdfError ? (
                <div className="text-red-500 mb-4">{pdfError}</div>
            ) : (
                <Document
                    file="/CV_SERGIO_FERRARI_BRYCE.pdf"
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
            <div className="flex flex-wrap my-4 w-full justify-center gap-2">
                <button
                    className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
                    onClick={goToPreviousPage}
                    disabled={pageNumber <= 1}
                >
                    <ArrowL />
                </button>
                <button
                    className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
                    onClick={goToNextPage}
                    disabled={pageNumber >= (numPages || 1)}
                >
                    <ArrowR />
                </button>
                <button
                    className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    onClick={openPdfInNewWindow}
                >
                    Abrir CV
                </button>
            </div>
        </div>
    );
};

export default Pdf;
