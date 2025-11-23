"use client";

import React from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const CRMToolsDetailSection = ({ toolsArray, openSections, toggleSection }) => {
  return (
    <>
      {toolsArray.map((tool) => (
        <div
          key={tool.id}
          className="bg-white rounded-2xl sm:rounded-3xl border mt-4  border-gray-200  p-6 mb-8"
        >
          {/* Tool Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Image
                  src={tool.logo}
                  alt={`${tool.title} logo`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-black">
                {tool.title}
              </h2>
            </div>
            <a
              href={tool.button.link}
              className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-700"
            >
              {tool.button.text}
            </a>
          </div>

          {/* Scores */}
          <div className="space-y-4 text-black mb-6">
            {tool.scores.map((score, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{score.label}</span>
                  <span>{score.score}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-orange-600 h-2 rounded-full"
                    style={{
                      width: `${(parseFloat(score.score) / 5) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 text-black gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Pros</h3>
              <ul className="list-disc pl-5 space-y-1">
                {tool.pros.map((pro, index) => (
                  <li key={index}>{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Cons</h3>
              <ul className="list-disc pl-5 space-y-1">
                {tool.cons.map((con, index) => (
                  <li key={index}>{con}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why I Chose Section */}
          <div className="mb-6 text-black">
            <h3 className="text-lg font-semibold mb-2">
              Why I chose {tool.title.split(":")[0]}
            </h3>
            <p className="mb-4">{tool.why.intro}</p>
            {tool.why.bullets && (
              <ul className="list-disc pl-5 space-y-1 mb-4">
                {tool.why.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            )}
            <p>{tool.why.outro}</p>
          </div>

          {/* Expandable Sections */}
          {tool.why.extras &&
            Object.entries(tool.why.extras).map(([label, content]) => {
              const sectionKey = `${tool.id}-${label}`;
              return (
                <div
                  key={sectionKey}
                  className="border-t text-black pt-4 mb-4"
                >
                  <button
                    onClick={() => toggleSection(sectionKey)}
                    className="w-full flex justify-between items-center font-medium"
                  >
                    <span>{label}</span>
                    <span className="text-orange-600">
                      {openSections[sectionKey] ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                  {openSections[sectionKey] && (
                    <div className="mt-2 text-gray-700">
                      {typeof content === "string" ? (
                        <p>{content}</p>
                      ) : (
                        content
                      )}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      ))}
    </>
  );
};

export default CRMToolsDetailSection;

