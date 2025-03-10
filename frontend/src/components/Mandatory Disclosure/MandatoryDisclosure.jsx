import React, { useState, useEffect } from 'react';
import { Clock, Download, File, FileText, Info, School, Search, Users, Calendar, Building } from 'lucide-react';

const SchoolPortal = () => {
  const [activeTab, setActiveTab] = useState('documents');
  const [activeFilter, setActiveFilter] = useState('all');
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    // Simulate fetching documents from API
    setIsLoading(true);
    setTimeout(() => {
      setDocuments([
        {
          id: 1,
          type: 'results',
          title: 'Annual Results 2023-24',
          description: 'Complete results of all classes for the academic year 2023-24',
          updated: 'April 15, 2024',
          size: '2.4 MB'
        },
        {
          id: 2,
          type: 'results',
          title: 'Board Examination Results',
          description: 'Class X and XII board examination results with analysis',
          updated: 'May 20, 2024',
          size: '3.1 MB'
        },
        {
          id: 3,
          type: 'academic',
          title: 'Academic Calendar 2024-25',
          description: 'Complete academic calendar with holidays and exam schedules',
          updated: 'March 10, 2024',
          size: '1.2 MB'
        }
      ]);
      setIsLoading(false);
    }, 800);
  }, []);

  const handleDownload = (documentId) => {
    // Call your API endpoint for downloading
    window.open(`http://localhost:3000/api/pdfDownload?id=${documentId}`, '_blank');
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesFilter = activeFilter === 'all' || doc.type === activeFilter;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow">
      {/* Header */}
      <div className="text-center p-8">
        <div className="inline-block px-3 py-1 bg-gray-800 text-white text-xs rounded-full mb-2">Transparency</div>
        <h1 className="text-3xl font-bold mb-4">Mandatory Disclosure</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          In compliance with regulatory requirements, we provide complete transparency regarding
          our school's information, results, and academic details.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b">
        <div className="flex items-center justify-between px-6">
          <button 
            className={`py-4 px-6 flex items-center space-x-2 font-medium border-b-2 ${activeTab === 'documents' ? 'border-blue-600 text-blue-600' : 'border-transparent'}`}
            onClick={() => setActiveTab('documents')}
          >
            <FileText size={18} />
            <span>Documents & Reports</span>
          </button>
          <button 
            className={`py-4 px-6 flex items-center space-x-2 font-medium border-b-2 ${activeTab === 'school' ? 'border-blue-600 text-blue-600' : 'border-transparent'}`}
            onClick={() => setActiveTab('school')}
          >
            <School size={18} />
            <span>School Information</span>
          </button>
        </div>
      </div>

      {/* Documents & Reports Tab */}
      {activeTab === 'documents' && (
        <div className="p-6">
          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-6">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search documents..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${activeFilter === 'all' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 ${activeFilter === 'results' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}
                onClick={() => setActiveFilter('results')}
              >
                <FileText size={16} />
                <span>Results</span>
              </button>
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 ${activeFilter === 'academic' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}
                onClick={() => setActiveFilter('academic')}
              >
                <School size={16} />
                <span>Academic</span>
              </button>
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 ${activeFilter === 'information' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}
                onClick={() => setActiveFilter('information')}
              >
                <Info size={16} />
                <span>Information</span>
              </button>
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 ${activeFilter === 'general' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}
                onClick={() => setActiveFilter('general')}
              >
                <File size={16} />
                <span>General</span>
              </button>
            </div>
          </div>

          {/* Documents List */}
          {isLoading ? (
            <div className="flex justify-center my-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredDocuments.length === 0 ? (
                <div className="text-center py-12">
                  <FileText size={48} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-600">No documents found</h3>
                  <p className="text-gray-500">Try adjusting your search or filters</p>
                </div>
              ) : (
                filteredDocuments.map(doc => (
                  <div key={doc.id} className="border rounded-lg p-6 flex flex-col md:flex-row justify-between">
                    <div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                        {doc.type === 'results' && <FileText size={16} className="text-red-500" />}
                        {doc.type === 'academic' && <School size={16} className="text-blue-500" />}
                        <span className="capitalize">{doc.type}</span>
                      </div>
                      <h3 className="font-medium text-lg mb-1">{doc.title}</h3>
                      <p className="text-gray-600">{doc.description}</p>
                      <div className="flex items-center mt-3 text-sm text-gray-500 space-x-6">
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>Updated: {doc.updated}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <File size={14} />
                          <span>Size: {doc.size}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6 flex items-center">
                      <button 
                        onClick={() => handleDownload(doc.id)}
                        className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Download size={18} />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      )}

      {/* School Information Tab */}
      {activeTab === 'school' && (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Basic Information */}
          <div className="col-span-1 border rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <File size={20} />
              <h2 className="text-xl font-bold">Basic Information</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">General details about our school</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-gray-500">School Name</h3>
                <p className="font-medium">Excellence International School</p>
              </div>
              
              <div>
                <h3 className="text-sm text-gray-500">Established</h3>
                <p className="font-medium">1985</p>
              </div>
              
              <div>
                <h3 className="text-sm text-gray-500">Affiliation</h3>
                <p className="font-medium">Central Board of Secondary Education (CBSE)</p>
              </div>
              
              <div>
                <h3 className="text-sm text-gray-500">Affiliation Number</h3>
                <p className="font-medium">CBSE/AFF/1234/2023</p>
              </div>
              
              <div>
                <h3 className="text-sm text-gray-500">Address</h3>
                <p className="font-medium">123 Education Lane, Knowledge City, State - 123456</p>
              </div>
              
              <div>
                <h3 className="text-sm text-gray-500">Contact</h3>
                <p className="font-medium">Phone: +91 98765 43210</p>
                <p className="font-medium">Email: info@excellenceschool.edu</p>
                <p className="font-medium">Website: www.excellenceschool.edu</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Collapsible Sections and Important Dates */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            {/* Infrastructure & Facilities */}
            <div className="border rounded-lg">
              <button 
                className="w-full p-4 flex items-center justify-between"
                onClick={() => toggleSection('infrastructure')}
              >
                <div className="flex items-center space-x-2">
                  <Building size={20} />
                  <h2 className="text-lg font-medium">Infrastructure & Facilities</h2>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform ${expandedSection === 'infrastructure' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSection === 'infrastructure' && (
                <div className="p-4 border-t">
                  <p className="text-gray-600">Infrastructure details would appear here.</p>
                </div>
              )}
            </div>
            
            {/* Faculty Information */}
            <div className="border rounded-lg">
              <button 
                className="w-full p-4 flex items-center justify-between"
                onClick={() => toggleSection('faculty')}
              >
                <div className="flex items-center space-x-2">
                  <Users size={20} />
                  <h2 className="text-lg font-medium">Faculty Information</h2>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform ${expandedSection === 'faculty' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSection === 'faculty' && (
                <div className="p-4 border-t">
                  <p className="text-gray-600">Faculty information would appear here.</p>
                </div>
              )}
            </div>
            
            {/* Academic Information */}
            <div className="border rounded-lg">
              <button 
                className="w-full p-4 flex items-center justify-between"
                onClick={() => toggleSection('academic')}
              >
                <div className="flex items-center space-x-2">
                  <School size={20} />
                  <h2 className="text-lg font-medium">Academic Information</h2>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform ${expandedSection === 'academic' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSection === 'academic' && (
                <div className="p-4 border-t">
                  <p className="text-gray-600">Academic information would appear here.</p>
                </div>
              )}
            </div>
            
            {/* Important Dates */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Calendar size={20} />
                <h2 className="text-lg font-medium">Important Dates</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Academic Session</h3>
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-2">2024-25</span>
                    <span className="bg-gray-900 text-white px-2 py-0.5 text-xs rounded-full">Current</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm text-gray-500">Session Start Date</h3>
                  <p className="font-medium">April 1, 2024</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-gray-500">Admission Period</h3>
                  <p className="font-medium">January 15 - March 15, 2024</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-gray-500">Examination Schedule</h3>
                  <p className="font-medium">As per academic calendar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t p-4 text-center text-xs text-gray-500">
        {activeTab === 'school' && 
          "This information is provided in compliance with the Right to Information Act and educational regulatory requirements. Last updated: May 1, 2024."}
      </div>
    </div>
  );
};

export default SchoolPortal;