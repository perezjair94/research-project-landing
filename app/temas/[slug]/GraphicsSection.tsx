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

  const getIllustrationPath = (themeId: string) => {
    return `/images/ilustraciones/${themeId}-ilustracion.png`;
  };

  const graphics = getGraphicPaths(themeId);
  const illustration = getIllustrationPath(themeId);

  return (
    <section className="px-6 lg:px-16 py-4 mb-12">
      <div className="lg:max-w-[1051px] lg:mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
          {/* Left side - Graphics */}
          <div className="lg:flex-1 lg:flex flex-col lg:justify-center">
            {/* Horizontal graphic */}
            <div className="w-full lg:max-w-[550px] h-[200px] sm:h-[180px] lg:h-[160px] relative mb-8">
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

          {/* Right side - Illustration */}
          <div className="lg:flex-1 lg:max-w-[450px]">
            <div className="w-full h-[300px] lg:h-[400px] relative">
              <Image
                src={illustration}
                alt={`Ilustración del tema ${themeId}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicsSection;
