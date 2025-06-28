import React from 'react';
import { Brain, Target, Zap, BarChart3, Cloud, Lightbulb, Github, ExternalLink, TrendingUp, CheckCircle, Code, Cpu, Database } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-6 shadow-lg">
              <Brain className="w-4 h-4" />
              Machine Learning • NLP • Deep Learning
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-6 leading-tight">
              Transformer-Based<br />
              Topic Segmentation
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Advanced BERT model fine-tuning for intelligent document topic boundary detection with 86% F1 score and production deployment on Vertex AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200">
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </button>
              <button className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border border-gray-200">
                <Github className="w-5 h-5" />
                Source Code
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">86%</h3>
                <p className="text-gray-600 font-medium">F1 Score</p>
              </div>
            </div>
            <p className="text-gray-600">Achieved exceptional accuracy in topic boundary detection through advanced BERT fine-tuning</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Vertex AI</h3>
                <p className="text-gray-600 font-medium">Production Deployment</p>
              </div>
            </div>
            <p className="text-gray-600">Scalable cloud deployment with explainability features for enterprise-grade performance</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">BERT</h3>
                <p className="text-gray-600 font-medium">Transformer Model</p>
              </div>
            </div>
            <p className="text-gray-600">Fine-tuned transformer architecture optimized for document segmentation tasks</p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Intelligent Document
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Topic Detection
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              This project tackles the complex challenge of automatically identifying topic boundaries within long-form documents. By leveraging state-of-the-art transformer architecture, we created a solution that understands semantic shifts and contextual changes in text.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Advanced NLP Processing</h4>
                  <p className="text-gray-600">Deep understanding of document structure and semantic relationships</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Production-Ready Deployment</h4>
                  <p className="text-gray-600">Scalable cloud infrastructure with explainability features</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">High Performance Metrics</h4>
                  <p className="text-gray-600">Exceptional accuracy validated through comprehensive testing</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl">
                  <Database className="w-6 h-6 text-blue-600" />
                  <span className="font-medium">Document Processing Pipeline</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl">
                  <Brain className="w-6 h-6 text-indigo-600" />
                  <span className="font-medium">BERT Fine-Tuning</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl">
                  <Target className="w-6 h-6 text-purple-600" />
                  <span className="font-medium">Topic Boundary Detection</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl">
                  <Cloud className="w-6 h-6 text-cyan-600" />
                  <span className="font-medium">Vertex AI Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Technical Implementation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach combining advanced NLP techniques, transformer architecture, and cloud-native deployment strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl w-fit mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Preprocessing</h3>
              <p className="text-gray-600 mb-4">Advanced text processing pipeline with tokenization, normalization, and feature extraction optimized for BERT input requirements.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Text normalization and cleaning</li>
                <li>• Sliding window segmentation</li>
                <li>• Context preservation techniques</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl w-fit mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Model Architecture</h3>
              <p className="text-gray-600 mb-4">Fine-tuned BERT transformer with custom classification heads designed specifically for topic boundary detection tasks.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• BERT-base fine-tuning</li>
                <li>• Custom classification layers</li>
                <li>• Attention mechanism optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl w-fit mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
              <p className="text-gray-600 mb-4">Comprehensive evaluation framework with advanced metrics and hyperparameter tuning for optimal performance.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cross-validation strategies</li>
                <li>• Hyperparameter optimization</li>
                <li>• Performance benchmarking</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl w-fit mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Model Evaluation</h3>
              <p className="text-gray-600 mb-4">Rigorous testing methodology with multiple evaluation metrics to ensure robust performance across diverse document types.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• F1 Score: 86%</li>
                <li>• Precision & Recall analysis</li>
                <li>• Cross-domain validation</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl w-fit mb-6">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Deployment</h3>
              <p className="text-gray-600 mb-4">Production-ready deployment on Google Cloud Vertex AI with scalable infrastructure and monitoring capabilities.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Vertex AI integration</li>
                <li>• Auto-scaling configuration</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl w-fit mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Explainability</h3>
              <p className="text-gray-600 mb-4">Advanced interpretability features providing insights into model decision-making process for transparency and trust.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Attention visualization</li>
                <li>• Feature importance analysis</li>
                <li>• Decision boundary mapping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Outstanding Results
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive evaluation demonstrates exceptional performance across multiple metrics and real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-500 rounded-xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">86% F1 Score</h3>
                  <p className="text-green-600 font-medium">Primary Performance Metric</p>
                </div>
              </div>
              <p className="text-gray-600">Achieved through careful hyperparameter tuning and advanced training strategies</p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500 rounded-xl">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Real-time Processing</h3>
                  <p className="text-blue-600 font-medium">Production Performance</p>
                </div>
              </div>
              <p className="text-gray-600">Optimized inference pipeline delivering consistent sub-second response times</p>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500 rounded-xl">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Scalable Architecture</h3>
                  <p className="text-purple-600 font-medium">Enterprise Ready</p>
                </div>
              </div>
              <p className="text-gray-600">Designed for high-throughput processing with automatic scaling capabilities</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Performance Breakdown</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">F1 Score</span>
                  <span className="font-bold text-green-600">86%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{width: '86%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">Precision</span>
                  <span className="font-bold text-blue-600">84%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{width: '84%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">Recall</span>
                  <span className="font-bold text-purple-600">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">Accuracy</span>
                  <span className="font-bold text-indigo-600">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Explore More?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              This project demonstrates advanced machine learning capabilities in natural language processing. Get in touch to discuss implementation details or potential collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200">
                <ExternalLink className="w-5 h-5" />
                View Documentation
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-200">
                <Github className="w-5 h-5" />
                GitHub Repository
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;