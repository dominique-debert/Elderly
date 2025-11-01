import {
  Hamburger,
  Brush,
  Code,
  BrainCircuit,
  Megaphone,
  Bookmark,
  Search,
  ChevronsUpDown,
  ListFilter,
  ChevronDown,
} from "lucide-react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";

export function BookmarksPage() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* TODO: Redesign the bookmarks page: THIS IS A DUMMY PAGE FOR NOW */}
      <div className="ml-62 mr-6 pt-14 min-h-[calc(100vh-4rem)] flex gap-6">
        <div className="flex min-h-screen w-full">
          <div className="flex-1 p-10 pr-2">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white min-w-72">
                Mes Favoris
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="grow">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-gray-500 dark:text-gray-400 flex bg-white dark:bg-gray-800/50 items-center justify-center pl-4 rounded-l-lg border border-r-0 border-gray-300 dark:border-gray-700">
                      <Search className="size-5 text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-l-0 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 h-full placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 rounded-l-none text-base font-normal leading-normal"
                      placeholder="Search by title or content..."
                      value=""
                    />
                  </div>
                </label>
              </div>
              <div className="relative flex items-center gap-4">
                <div className="shrink-0">
                  <button
                    className="flex h-12 w-full sm:w-auto shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-gray-800/50 pl-4 pr-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    id="categoryFilterButton"
                  >
                    <ListFilter className="size-5 text-gray-400 dark:text-gray-500 text-base" />

                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">
                      Categories
                    </p>
                    <ChevronDown className="size-5 text-gray-400 dark:text-gray-500 text-base" />
                  </button>
                  <div
                    className="absolute z-10 mt-2 w-80 rounded-lg shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 hidden"
                    id="advancedFilterPanel"
                  >
                    <div className="p-4">
                      <p className="text-gray-900 dark:text-white font-medium mb-3">
                        Filter by Category
                      </p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                            type="checkbox"
                          />
                          <span>UI/UX Design</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                            type="checkbox"
                          />
                          <span>Web Dev</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                            type="checkbox"
                          />
                          <span>Cooking</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                            type="checkbox"
                          />
                          <span>Productivity</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                            type="checkbox"
                          />
                          <span>Marketing</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                            type="checkbox"
                          />
                          <span>AI/ML</span>
                        </label>
                      </div>
                      <p className="text-gray-900 dark:text-white font-medium mb-3">
                        Keyword Exclusions
                      </p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 h-10 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-3 text-sm font-normal leading-normal"
                        placeholder="Exclude keywords (e.g., 'React', 'AI')"
                        value=""
                      />
                      <div className="flex justify-end gap-2 mt-4">
                        <button className="px-4 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          Clear
                        </button>
                        <button className="px-4 py-2 text-sm font-bold rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
                          Apply Filters
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shrink-0">
                  <button className="flex h-12 w-full sm:w-auto shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-gray-800/50 pl-4 pr-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">
                      Sort by: Date Saved
                    </p>
                    <ChevronDown className="size-5 text-gray-400 dark:text-gray-500 text-base" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                  <thead>
                    <tr>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                        scope="col"
                      >
                        <div className="flex items-center gap-1">
                          <span>Title &amp; Description</span>
                          <ChevronsUpDown className="size-5 text-gray-400 dark:text-gray-500 text-base" />
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-[120px]"
                        scope="col"
                      >
                        <div className="flex items-center gap-1">
                          <span>Category</span>
                          <ChevronsUpDown className="size-5 text-gray-400 dark:text-gray-500 text-base" />
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-[120px]"
                        scope="col"
                      >
                        <div className="flex items-center gap-1">
                          <span>Author</span>
                          <ChevronsUpDown className="size-5 text-gray-400 dark:text-gray-500 text-base" />
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-[120px]"
                        scope="col"
                      >
                        <div className="flex items-center gap-1">
                          <span>Date Saved</span>
                          <ChevronsUpDown className="size-5 text-gray-400 dark:text-gray-500 text-base" />
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-16"
                        scope="col"
                      >
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="p-4 align-top">
                        <div className="flex items-start gap-3">
                          <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50 shrink-0 size-10">
                            <Brush className="size-6" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <a
                              className="text-gray-900 dark:text-white text-sm font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                              href="#"
                            >
                              UI Design Best Practices for 2024: From Bento
                              Grids to AI-Driven Personalization
                            </a>
                            <p className="text-gray-500 dark:text-gray-400 text-xs font-normal leading-tight mt-1 line-clamp-2">
                              Discover the latest trends shaping user interfaces
                              this year, from bento grids to AI-driven
                              personalization.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        UI/UX Design
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Alex Johnson
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Oct 26, 2023
                      </td>
                      <td className="p-4 text-right align-top">
                        <button
                          className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors ml-auto"
                          title="Remove from bookmarks"
                        >
                          <Bookmark className="size-5" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top">
                        <div className="flex items-start gap-3">
                          <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50 shrink-0 size-10">
                            <Code className="size-6" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <a
                              className="text-gray-900 dark:text-white text-sm font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                              href="#"
                            >
                              Getting Started with React Hooks: A Comprehensive
                              Beginner's Guide
                            </a>
                            <p className="text-gray-500 dark:text-gray-400 text-xs font-normal leading-tight mt-1 line-clamp-2">
                              A comprehensive guide for beginners to understand
                              and implement state and effects in functional
                              components.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Web Development
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Jane Doe
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Oct 22, 2023
                      </td>
                      <td className="p-4 text-right align-top">
                        <button
                          className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors ml-auto"
                          title="Remove from bookmarks"
                        >
                          <Bookmark className="size-5" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top">
                        <div className="flex items-start gap-3">
                          <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50 shrink-0 size-10">
                            <Hamburger className="size-6" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <a
                              className="text-gray-900 dark:text-white text-sm font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                              href="#"
                            >
                              10 Quick and Healthy Weeknight Dinner Recipes for
                              Busy People
                            </a>
                            <p className="text-gray-500 dark:text-gray-400 text-xs font-normal leading-tight mt-1 line-clamp-2">
                              Tired of takeout? These simple and delicious
                              recipes will save your weeknights and your wallet.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Cooking &amp; Recipes
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Samwise G.
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Oct 19, 2023
                      </td>
                      <td className="p-4 text-right align-top">
                        <button
                          className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors ml-auto"
                          title="Remove from bookmarks"
                        >
                          <Bookmark className="size-5" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top">
                        <div className="flex items-start gap-3">
                          <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50 shrink-0 size-10">
                            <BrainCircuit className="size-6" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <a
                              className="text-gray-900 dark:text-white text-sm font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                              href="#"
                            >
                              Understanding Cognitive Biases in Decision Making
                            </a>
                            <p className="text-gray-500 dark:text-gray-400 text-xs font-normal leading-tight mt-1 line-clamp-2">
                              Explore common cognitive biases and how they
                              influence our judgments, with practical tips to
                              mitigate their effects.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Productivity
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Sarah Connor
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Oct 15, 2023
                      </td>
                      <td className="p-4 text-right align-top">
                        <button
                          className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors ml-auto"
                          title="Remove from bookmarks"
                        >
                          <Bookmark className="size-5" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top">
                        <div className="flex items-start gap-3">
                          <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50 shrink-0 size-10">
                            <Megaphone className="size-6" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <a
                              className="text-gray-900 dark:text-white text-sm font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                              href="#"
                            >
                              Advanced SEO Strategies for Small Businesses in
                              2024
                            </a>
                            <p className="text-gray-500 dark:text-gray-400 text-xs font-normal leading-tight mt-1 line-clamp-2">
                              Boost your online presence with these cutting-edge
                              SEO techniques tailored for small businesses and
                              startups.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Marketing
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Mark Webber
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Oct 10, 2023
                      </td>
                      <td className="p-4 text-right align-top">
                        <button
                          className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors ml-auto"
                          title="Remove from bookmarks"
                        >
                          <Bookmark className="size-5" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <nav
              aria-label="Pagination"
              className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 px-4 sm:px-0 mt-8 pt-6"
            >
              <div className="hidden sm:block">
                <p className="text-sm font-light text-gray-700 dark:text-gray-400">
                  Showing <span className="font-medium">1</span> to
                  <span className="font-medium"> 5</span> of
                  <span className="font-medium"> 20 </span>
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
    </>
  );
}
