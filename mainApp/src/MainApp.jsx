import React from "react";

export default () => {
  return (
    <div
      class="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg mt-5 mb-2"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
        height: 400,
      }}
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div class="flex justify-center items-center h-full">
          <div class="text-white">
            <h2 class="font-semibold text-4xl mb-4">Heading</h2>
            <h4 class="font-semibold text-xl mb-6">Subheading</h4>
            <a
              class="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              href="#!"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Call to action
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
