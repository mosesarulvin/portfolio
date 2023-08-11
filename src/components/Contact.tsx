import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <p className="text-gray-700 mb-4">
              Have a question, a project, or just want to connect? Reach out to me through any of the following channels:
            </p>
            <ul className="space-y-3">
              <li>
                <a href="tel:+918489844082" className="flex items-center text-blue-500 hover:underline">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4 4m0 0l-4 4m4-4H5"/></svg>
                  <span className='text-xl md:text-3xl'>
                  +91 848-984-4082
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:mosesarulvin@gmail.com" className="flex items-center text-blue-500 hover:underline">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12L4 3m0 0l8 9m-8-9v18a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2h-12a2 2 0 00-2 2z"/></svg>
                    <span className='text-xl md:text-3xl'>
                        mosesarulvin@gmail.com
                    </span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/moses-arulvin/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13.55a5.96 5.96 0 016.67-5.5M3 21v-2a2 2 0 012-2h2M21 3a2 2 0 012 2v2M3 3a2 2 0 00-2 2v2M21 21a2 2 0 002 2h-2M7 20a4 4 0 00-4-4M20 21a4 4 0 010-8h2M17 8a4 4 0 00-4 4"/></svg>
                  <span className='text-xl md:text-3xl'>
                  LinkedIn Profile
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
