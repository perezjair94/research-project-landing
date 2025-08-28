import React from "react";
import Image from "next/image";

interface GraphicsSectionProps {
  themeId: string;
}

const GraphicsSection: React.FC<GraphicsSectionProps> = ({ themeId }) => {
  const getGraphicPaths = (themeId: string) => {
    return {
      vertical: `/images/graficas/${themeId}/grafica-vertical.png`,
      horizontal: `/images/graficas/${themeId}/grafica-horizontal.png`,
    };
  };

  const graphics = getGraphicPaths(themeId);

  return (
    <section className="px-6 lg:px-16 py-8">
      <div className="lg:max-w-[1051px] lg:mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
          {/* Right side content */}
          <div className="lg:flex-1 lg:flex flex-col lg:justify-center">
            {/* Horizontal graphic */}
            <div className="w-full lg:max-w-[575px] h-[200px] sm:h-[180px] lg:h-[162px] relative mb-8">
              <Image
                src={graphics.horizontal}
                alt={`Gráfica secundaria del tema ${themeId}`}
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>

            {/* You can add more content or another graphic here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicsSection;
