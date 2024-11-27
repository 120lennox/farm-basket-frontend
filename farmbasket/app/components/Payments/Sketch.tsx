import Image from "next/image";

export default function SearchingBar() {
  return (
    <div className="rounded-3xl space-y-5 ">
      <div className="flex flex-row justify-between   items-center rounded-2xl">
        <div className="flex flex-row space-x-10 text-green-500  ">
          <div className="flex flex-row justify-center  items-center flex-container box-border h-10 w-50 p-2  bg-slate-300 border-6 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>

            <label className="text-green-500">All</label>
            <select className="">
              <option className=" hover:bg-green-500">Agri-chemicals</option>
              <hr />
              <option className=" hover:bg-green-500">Fertilizers</option>
              <hr />
              <option>Pesticides</option>
              <hr />
              <option>Herbicides</option>
              <hr />
              <option>Fingicides</option>
              <hr />
            </select>
          </div>
          <div className="flex flex-row justify-center items-center flex-container box-border h-10 w-50 p-2  bg-slate-300 border-6 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>

            <label className="text-green-500">All</label>

            <select name="category" id="names">
              <option>Farm Machinery</option>
              <hr />
              <option>Tractor</option>
              <hr />\<option>farm tools</option>
              <hr />
              <option>mower</option>
              <hr />
              <option>plough</option>
              <hr />
            </select>
          </div>
          <div className="flex flex-row justify-center items-center flex-container box-border h-10 w-50 p-1  bg-slate-300 border-6 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>

            <label className="text-green-500">All</label>
            <div className=" ">
              <select name="category" id="names">
                <option>products</option>
                <hr />
                <option>Rice</option>
                <hr />
                <option>Maize</option>
                <hr />
                <option>Legumes</option>
                <hr />
                <option>Fruits</option>
                <hr />
              </select>
            </div>
          </div>
        </div>
        <div className="flex-container flex flex-row box-border h-15 w-29 p-2  bg-slate-300 border-6 rounded-2xl content-end text-end">
          <input type="search" placeholder="Search..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
      <div className="bg-black"></div>

      <div className="p-2">
        <hr className="border-t-3 border-black my-4" />
      </div>
      <div className="space-y-7">
        <div className="relative text-lg left-0 ...">
          <b>
            <p>Trending</p>
          </b>
        </div>

        <div className="flex flex-row space-x-10 border-spacing-10">
          <div className="">
            <Image
              src="https://th.bing.com/th/id/OIF.alB7X63AUscjqk2QJEX5tA?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="granadiller"
              height={7}
              width={8}
            />
          </div>
          <div className="flex-container box-border rounded-lg h-80 w-80 p-4 - bg-slate-300 border-6 .."></div>
          <div className="flex-container box-border rounded-lg h-80 w-80 p-4  bg-slate-300 border-6 .."></div>
          <div className="flex-container box-border rounded-lg h-80 w-80 p-4  bg-slate-300 border-6 .."></div>
          <div className="flex-container box-border rounded-lg h-80 w-80 p-4  bg-slate-300 border-6 .."></div>
        </div>
        <div className="flex flex-row space-x-10 border-spacing-10">
          <div className=""></div>
          <div className="flex-container box-border rounded-lg h-80 w-80 p-4  bg-slate-300 border-6 ..">
            <Image
              src="https://th.bing.com/th/id/OIF.alB7X63AUscjqk2QJEX5tA?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="granadiller"
              width={7}
              height={8}
            />
          </div>
          <div className="flex-container box-border rounded-lg h-80 w-80 p-4  bg-slate-300 border-6 .."></div>
          <div className="flex-container box-border rounded-lg h-80 w-80 p-4  bg-slate-300 border-6 .."></div>
          <div className="flex-container box-border rounded-lg h-80 w-80 p-4  bg-slate-300 border-6 .."></div>
        </div>
      </div>
    </div>
  );
}
