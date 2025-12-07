import React from 'react';

const ClassRoutine = () => {
    return (
        <div>
            <div className=" flex items-center gap-4">
                <div className="bg-emerald-600 rounded-xl px-6 py-4 flex items-center justify-center min-w-[90px]">
                    <span className="text-white font-semibold text-xl">logo</span>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-white font-medium text-lg">Md. Zihadul Islam</h1>
                    <p className="text-gray-400 text-sm">Enrolled Batches Routine</p>
                </div>
            </div>
        </div>
    );
};

export default ClassRoutine;