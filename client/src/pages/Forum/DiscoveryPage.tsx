import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { Search } from "lucide-react";

export function DiscoveryPage() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* TODO: Redesign the discovery page: THIS IS A DUMMY PAGE FOR NOW */}
      <div className="ml-62 mr-6 pt-14 min-h-[calc(100vh-4rem)] flex gap-6 overflow-hidden">
        <div className="flex min-h-screen p-12 pr-4">
          <div className="w-full mx-auto">
            <div className="pb-0 fixed dark:bg-[#060e21] bg-(--root-bg) w-[calc(100vw-21rem)] -mt-10 pt-6 z-10">
              <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                <h1 className="text-4xl font-medium leading-tight tracking-[-0.033em] text-gray-900 dark:text-white min-w-72">
                  Discovery Grid
                </h1>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="grow">
                  <label className="flex flex-col min-w-40 h-12 w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                      <div className="text-gray-500 dark:text-gray-400 flex bg-white dark:bg-transparent items-center justify-center pl-4 rounded-l-lg border border-r-0 border-gray-300 dark:border-gray-700">
                        <Search className="size-5" />
                      </div>
                      <input
                        className="form-input dark:bg-transparent flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-l-0 border-gray-300 dark:border-gray-700 bg-white h-full placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 rounded-l-none text-base font-normal leading-normal"
                        placeholder="Search by title or category..."
                        value=""
                      />
                    </div>
                  </label>
                </div>
                <div className="shrink-0">
                  <button className="flex h-12 w-full sm:w-auto shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-transparent pl-4 pr-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">
                      Sort by: Date Saved
                    </p>
                    <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">
                      arrow_drop_down
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                <button className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors">
                  All Categories
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-700 dark:text-blue-300 hover:bg-blue-500/30 transition-colors">
                  UI/UX Design
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-700 dark:text-green-300 hover:bg-green-500/30 transition-colors">
                  Web Development
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-700 dark:text-purple-300 hover:bg-purple-500/30 transition-colors">
                  Cooking &amp; Recipes
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-500/30 transition-colors">
                  Productivity
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium bg-red-500/20 text-red-700 dark:text-red-300 hover:bg-red-500/30 transition-colors">
                  Gaming
                </button>
              </div>
            </div>
            <div className="overflow-y-auto overflow-visible overflow-x-hidden">
              <div className="grid grid-cols-1 pt-52 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
                  <div
                    className="aspect-video w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCyGap8xHx-yHw-MIVJq2ImFPkze0IQP2S7LKfu34thOcDqXUzJaTGnb_shUxmUw5Vmo7HJVhzbCln_6woV6QSJv9DuS5BgyZd71AJRZW3uRa-hxF1kjwVP1pbxoTSXK-dQIu09SpkoJWSTQM-cO4Dw1mVASSwV-jts-Lfx46rC0Gz4EKEJp6ihMog6wichAHyyjjf1i0of51piYvUKZNZaY_xc0YdXZT2yg9F_tpbW8Bc26UHnDbrT9JDGq3yKNH-fS-3dhev1EYs")',
                    }}
                  ></div>
                  <div className="p-4 grow flex flex-col justify-between">
                    <div>
                      <a
                        className="text-gray-900 dark:text-white text-lg font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                        href="#"
                      >
                        UI Design Best Practices for 2024
                      </a>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-2 line-clamp-3">
                        Discover the latest trends shaping user interfaces this
                        year, from bento grids to AI-driven personalization.
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-gray-400 dark:text-gray-500 text-xs font-normal leading-normal">
                        UI/UX Design • Alex Johnson
                      </p>
                      <button
                        className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors"
                        title="Remove from bookmarks"
                      >
                        <span className="material-symbols-outlined">
                          bookmark
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
                  <div
                    className="aspect-video w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfpVxcO0LnTOXEWrMksaY84uDLKpgwAC2Vcu5-gcRorS1g1klkp8g89yXjXyv9WUFSL9BLjwSp1FQA-se35rbBwRGo3Zq3FpP6LdCQ0DK5AlTaBmKxmoVK3UIppHeCOwF-J8BhiNNTiySMhmaginJPbP_TbEbLLsXhgnSXeP8d3h9tenym5B8ZA9Jl-9hfTE9BTM9jvxkf6Zi5Hh6Mmw7cWZp4kfJ8xFAsFpGdCb5duNwoXdei_kSB_V1T1fP5Gz6eEdLe4S_lbjQ")',
                    }}
                  ></div>
                  <div className="p-4 grow flex flex-col justify-between">
                    <div>
                      <a
                        className="text-gray-900 dark:text-white text-lg font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                        href="#"
                      >
                        Getting Started with React Hooks
                      </a>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-2 line-clamp-3">
                        A comprehensive guide for beginners to understand and
                        implement state and effects in functional components.
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-gray-400 dark:text-gray-500 text-xs font-normal leading-normal">
                        Web Development • Jane Doe
                      </p>
                      <button
                        className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors"
                        title="Remove from bookmarks"
                      >
                        <span className="material-symbols-outlined">
                          bookmark
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
                  <div
                    className="aspect-video w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWEI7T2q4Q33p3_Pss2SszqwHp7BesAAXkgh2DJehGa6kN8yXTEP60SAC_pCPVL5HsJkhDk9kTFPYUGmiDNIm7Yqmfu2MurWpAvX9Wd1uPy7iTIR9Rwc6XkeguDK3VBwc7LI3ade-BN_KTQUoD15X1shSBnOvXKmifHjbpnHFHlejqADBxX3uHTNVgOS8aaYVsc-7mVKMRJMQEpkFQGDzXcOZA2yergrHfxr9qH1nx5wFUTXQ_5kl2_v1l_Xe-hWcpAzQ1Srk4o_s")',
                    }}
                  ></div>
                  <div className="p-4 grow flex flex-col justify-between">
                    <div>
                      <a
                        className="text-gray-900 dark:text-white text-lg font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                        href="#"
                      >
                        10 Quick and Healthy Weeknight Dinner Recipes
                      </a>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-2 line-clamp-3">
                        Tired of takeout? These simple and delicious recipes
                        will save your weeknights and your wallet.
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-gray-400 dark:text-gray-500 text-xs font-normal leading-normal">
                        Cooking &amp; Recipes • Samwise G.
                      </p>
                      <button
                        className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors"
                        title="Remove from bookmarks"
                      >
                        <span className="material-symbols-outlined">
                          bookmark
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
                  <div
                    className="aspect-video w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZpn4WmrzO_fsZIC2D5hXDRVTKoVJ9XWgJHj1Z-ILed4QeV7R70Fdv8UZCUb2T75ZZQwQ4nlpl36it32oGp2FosOftj5HNP2lkbDuqNNWlClSCgOn_cb4yDvMjCzQLaCqEldeEpLiocu5Ptar0iu_xo0Q-gKLMUXfNwFi1d0WjpNQHG81E_VvMPQB8IPmi7Ar5UIAptOk3OfWhitcrcXD0O6PAHHOljh_Hh11sgpDcKSLIRjZ2c0Hv_lQ2-FGPoOSZWBSjTxkmJFw")',
                    }}
                  ></div>
                  <div className="p-4 grow flex flex-col justify-between">
                    <div>
                      <a
                        className="text-gray-900 dark:text-white text-lg font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                        href="#"
                      >
                        Mastering Time Management: The Pomodoro Technique
                      </a>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-2 line-clamp-3">
                        Learn how to boost your focus and productivity with this
                        simple yet effective time management method.
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-gray-400 dark:text-gray-500 text-xs font-normal leading-normal">
                        Productivity • Sarah Connor
                      </p>
                      <button
                        className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors"
                        title="Remove from bookmarks"
                      >
                        <span className="material-symbols-outlined">
                          bookmark
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
                  <div
                    className="aspect-video w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwZ-2mO6oLZGuubM2K7XKSHNNzSfdXOGaiqUkpL4C62HHgf7N6EI5wylfOnxyM3WfJeIxZYhCPV1JFfdN6wQAWAMhxwvFbPy5CDcqdsTkyTHB7caVPXmRJsXrgZlWo9dnQDy-gOg1CvG_K4KkkX7SDX0IooOS5MU0pyEksBocZncuZeb_ITHhVWysJa0yIbakzbfKv2U7sVgR-mWJkx1jap-WKhN1zXBIjUrHnUIA9eCQX8aVtOtYaQK8g5vZKd5oFym8kbRdcgp0")',
                    }}
                  ></div>
                  <div className="p-4 grow flex flex-col justify-between">
                    <div>
                      <a
                        className="text-gray-900 dark:text-white text-lg font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                        href="#"
                      >
                        The Rise of Indie Games: Hidden Gems to Play Now
                      </a>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-2 line-clamp-3">
                        Dive into the vibrant world of independent game
                        development and discover your next favorite title.
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-gray-400 dark:text-gray-500 text-xs font-normal leading-normal">
                        Gaming • John Doe
                      </p>
                      <button
                        className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors"
                        title="Remove from bookmarks"
                      >
                        <span className="material-symbols-outlined">
                          bookmark
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
                  <div
                    className="aspect-video w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzw2gOjVQcBmKvB1IsfosA4JFFfnzFb9GKNcWghv7ta1fmhIicQGyMCXK6CIEQGgQ-s0LITotG-R_anb3xNFNT5XpS03xnnmpIxAdqVB7KMbrOQVqfM4_7KBzXyrUXTDTEiaJfmwlAApJp3qyl1EsoNezYIrfTz4FJtCot8wBgfjfc38ZD7DxUzVvXonCMStM4dN7sSybLxqt-TA-SdTGPBmqJ0G84_Ajimir4TNxE9InCGQdTyhkFCC6AIMn0CTtQ5yIjjtm-QvY")',
                    }}
                  ></div>
                  <div className="p-4 grow flex flex-col justify-between">
                    <div>
                      <a
                        className="text-gray-900 dark:text-white text-lg font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                        href="#"
                      >
                        Future of AI: What to Expect in the Next Decade
                      </a>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-2 line-clamp-3">
                        An in-depth look at the potential advancements and
                        ethical considerations of artificial intelligence.
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-gray-400 dark:text-gray-500 text-xs font-normal leading-normal">
                        Technology • Dr. Elena Petrova
                      </p>
                      <button
                        className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors"
                        title="Remove from bookmarks"
                      >
                        <span className="material-symbols-outlined">
                          bookmark
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <nav
                aria-label="Pagination"
                className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 px-4 sm:px-0 mt-8 pt-6"
              >
                <div className="hidden sm:block">
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Showing
                    <span className="font-medium">1</span>
                    to
                    <span className="font-medium">10</span>
                    of
                    <span className="font-medium">20</span>
                    results
                  </p>
                </div>
                <div className="flex flex-1 justify-between sm:justify-end">
                  <a
                    className="relative inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    href="#"
                  >
                    Previous
                  </a>
                  <a
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    href="#"
                  >
                    Next
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
