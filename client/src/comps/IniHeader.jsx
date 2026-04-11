import React from 'react';

const IniHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-blanco-bg border-b border-gray-200 py-4">
        <div className="header-container h-14 px-4">
          {/* Left: Accesibility button */}
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex items-center justify-center rounded h-full">
              <img 
                className="h-full w-auto object-contain cursor-pointer"
                src="/images/accesibilidad.png" 
                alt="Accesibilidad" 
              />
            </div>
            <div className="w-full mt-1 text-sm font-bold text-negro-txt text-center">
              Accesibilidad
            </div>
          </div>

          {/* Center: Logo UPB */}
          <div className="h-14 flex justify-center mx-auto ">
            <img 
              className="object-contain"
              src="/images/upb.png" 
              alt="UPB Logo" 
            />
          </div>

          {/* Right section: Empty */}
          <div className="min-w-[150px] flex justify-end">
          </div>
        </div>
    </header>
  );
};

export default IniHeader;