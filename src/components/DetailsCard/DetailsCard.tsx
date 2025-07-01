import React from "react";
import ExpandableCard from "@/components/ExpandableCard";

const DetailsCard: React.FC = () => {
  const descriptionPreview = (
    <div>
      <p className="mb-3">
        Just as a book is judged by its cover, the first thing you notice when
        you pick up a modern smartphone is the display. Nothing surprising,
        because advanced technologies allow you to practically level the display
        frames and cutouts for the front camera and speaker, leaving no room for
        bold design solutions. And how good that in such realities Apple
        everything is fine with displays.
      </p>
      <p className="text-gray-500">
        Advanced technologies allow you to practically level the display frames
        and cutouts for the front camera and speaker, leaving no room for bold
        design solutions. And how good that in such realities Apple everything
      </p>
    </div>
  );

  const fullDescription = (
    <div>
      <p className="mb-4">
        Just as a book is judged by its cover, the first thing you notice when
        you pick up a modern smartphone is the display. Nothing surprising,
        because advanced technologies allow you to practically level the display
        frames and cutouts for the front camera and speaker, leaving no room for
        bold design solutions. And how good that in such realities Apple
        everything is fine with displays.
      </p>
      <p className="mb-4">
        Advanced technologies allow you to practically level the display frames
        and cutouts for the front camera and speaker, leaving no room for bold
        design solutions. And how good that in such realities Apple everything
        is fine with displays.
      </p>
      <p className="mb-4">
        The iPhone 14 Pro features a stunning 6.1-inch Super Retina XDR display
        with ProMotion technology, delivering incredible detail and vivid
        colors. The Always-On display keeps your Lock Screen glanceable, so you
        don't have to tap it to stay in the know.
      </p>
      <p className="mb-4">
        With the Dynamic Island, alerts and Live Activities come alive, bubbling
        up when you need them and tucking away when you don't. It's an entirely
        new way to experience iPhone that's truly magical.
      </p>
      <p>
        The advanced camera system takes your photos to the next level with the
        48MP Main camera that captures incredible detail and color. Action mode
        delivers smooth, steady, handheld videos when you're in the middle of
        the action.
      </p>
    </div>
  );

  const specificationPreview = (
    <div>
      <h3 className="font-medium text-gray-900 mb-3">
        Sharp FP-J30E-B Air Purifier
      </h3>
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-start">
          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          GMP Cosmetic Good Manufacturing Practice
        </li>
        <li className="flex items-start">
          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          Cruelty Free
        </li>
        <li className="flex items-start">
          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          No Animal Testing
        </li>
        <li className="flex items-start text-gray-400">
          <span className="w-2 h-2 bg-gray-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          Zepala Global Standard
        </li>
        <li className="flex items-start text-gray-400">
          <span className="w-2 h-2 bg-gray-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          Comply with Global Standard
        </li>
      </ul>
    </div>
  );

  const fullSpecification = (
    <div>
      <h3 className="font-medium text-gray-900 mb-4">
        Sharp FP-J30E-B Air Purifier
      </h3>

      <div className="space-y-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-3">
            Certifications & Standards
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              GMP Cosmetic Good Manufacturing Practice
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Cruelty Free
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              No Animal Testing
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Zepala Global Standard
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Comply with Global Standard
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-3">
            Technical Specifications
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              HEPA Filter Technology
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Coverage Area: Up to 254 sq ft
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              CADR Rating: 165 CFM
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Energy Star Certified
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-3">Features</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              3-Stage Filtration System
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Auto Mode with Dust Sensor
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Sleep Mode Operation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {/* Description Card */}
          <ExpandableCard
            title="Description"
            previewContent={descriptionPreview}
          >
            {fullDescription}
          </ExpandableCard>

          {/* Specification Card */}
          <ExpandableCard
            title="Specification"
            previewContent={specificationPreview}
          >
            {fullSpecification}
          </ExpandableCard>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
