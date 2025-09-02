import React, { useState } from 'react';
import { Upload, FileText, Loader2, CheckCircle, Brain, Map, HelpCircle } from 'lucide-react';

export function UploadMaterials() {
  const [dragActive, setDragActive] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = async (files: File[]) => {
    setProcessing(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const processedFiles = files.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      summary: `AI-generated summary for ${file.name}`,
      mcqs: Math.floor(Math.random() * 20) + 10,
      concepts: Math.floor(Math.random() * 15) + 5
    }));
    
    setUploadedFiles(prev => [...prev, ...processedFiles]);
    setProcessing(false);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Upload Study Materials</h1>
        <p className="text-gray-600 mt-1">Upload your PDFs, notes, and documents for AI-powered processing</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div
            className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
              dragActive
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {processing ? (
              <div className="space-y-4">
                <Loader2 className="w-12 h-12 text-blue-600 mx-auto animate-spin" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Processing with AI...</h3>
                  <p className="text-gray-600">Generating summaries, MCQs, and mind maps</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Drop your files here</h3>
                  <p className="text-gray-600">Or click to browse and upload</p>
                </div>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.txt"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => handleFiles(Array.from(e.target.files || []))}
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-900">AI Summaries</h4>
              <p className="text-sm text-blue-700">Concise key points</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <HelpCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-green-900">MCQ Generation</h4>
              <p className="text-sm text-green-700">Practice questions</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <Map className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-purple-900">Mind Maps</h4>
              <p className="text-sm text-purple-700">Visual concepts</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Processed Materials</h2>
          
          {uploadedFiles.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No materials uploaded yet</p>
              <p className="text-sm text-gray-500 mt-1">Upload your first document to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{file.name}</h3>
                        <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                      </div>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{file.mcqs}</div>
                      <div className="text-xs text-gray-500">MCQs Generated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{file.concepts}</div>
                      <div className="text-xs text-gray-500">Key Concepts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">1</div>
                      <div className="text-xs text-gray-500">Mind Map</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      View Summary
                    </button>
                    <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                      Practice MCQs
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}