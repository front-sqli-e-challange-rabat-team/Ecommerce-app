import React from 'react';

const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="flex items-center z-20">
            <div className="bg-red-500 w-4 h-9 mr-2 rounded"></div>
            <span className="ml-3 text-xl font-medium text-red-500">{title}</span>
        </div>
    );
}

export default SectionHeader;
