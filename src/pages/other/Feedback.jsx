import React from "react";
import { useState } from "react";

export function Feedback() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-full flex flex-col">
      {isLoading && (
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <iframe
        className={`airtable-embed w-full ${isLoading ? 'h-0' : 'flex-1'}`}
        src="https://airtable.com/embed/appY137S5r1pFINJb/paggxb0UhrsAnawG5/form"
        onLoad={() => setIsLoading(false)}
        style={{ background: 'transparent', border: 'none' }}
        title="Feedback Form"
      />
    </div>
  );
}
