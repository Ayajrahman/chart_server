const Content = ({ activePage }) => {
  return (
    <div className="p-6 flex-1">
      {activePage === "dashboard" ? (
        <div className="grid gap-4 p-4">
          {/* First Row - 2 Columns */}
          <div className="grid grid-cols-2  shadow-inherit gap-4">
            <div className="">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h2 className="text-xl font-bold">Today's Sales</h2>
                  <p>sales summary</p>{" "}
                </div>
                <div className="rounded-lg p-3 bg-blue-100">Export</div>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-4">
                <div className="bg-pink-100 p-4  rounded-md">
                  <img src="src\assets\Icon.png" alt="" className="mb-5" />
                  <span className="text-lg font-bold ">$1k</span>
                  <p className="mt-2">Total Sales</p>
                  <p className="text-[#6581A4]">+5% from Yesterday</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-md">
                  <img src="src\assets\Icon.png" alt="" className="mb-5" />
                  <span className="text-lg font-bold "> 300</span>
                  <p className="mt-2">Total Orders</p>
                  <p className="text-[#6581A4] text-sm">+5% from Yesterday</p>
                </div>
                <div className="bg-orange-100 p-4 rounded-md">
                  <img src="src\assets\Icon.png" alt="" className="mb-5" />
                  <span className="text-lg font-bold "> 20</span>
                  <p className="mt-2">Products Sold</p>
                  <p className="text-[#6581A4]">+5% from Yesterday</p>
                </div>
                <div className="bg-blue-100 p-4 rounded-md">
                  <img src="src\assets\Icon.png" alt="" className="mb-5" />
                  <span className="text-lg font-bold "> 9</span>
                  <p className="mt-2">New Customers</p>
                  <p className="text-[#6581A4]">+5% from Yesterday</p>
                </div>
              </div>
            </div>
            <div>
              <img src="src\assets\Visitor Insights.png" alt="" />
            </div>
          </div>

          {/* Second Row - 3 Columns */}
          <div className="grid grid-cols-[40%_30%_30%] gap-4">
            <div className=" bg-white p-4 rounded-lg shadow font-bold">
              Total Revenue
              <img
                className="mt-7"
                src="src\assets\Group 1000002742.png"
                alt=""
              />
            </div>
            <div className="  rounded-lg shadow">
              <img src="src\assets\Customer Satisfaction.png" alt="" />
            </div>
            <div className=" font-bold bg-white p-4 rounded-lg shadow">
              Target vs Reality
              <img src="src\assets\Group 1000002769 (1).png" alt="" />
            </div>
          </div>

          {/* Third Row - 3 Columns */}
          <div className="grid grid-cols-[40%_30%_30%]  gap-4">
            <div className=" bg-white p-2 rounded-lg shadow  ">
              <p className="font-bold mb-5">Top Production</p>
              <table className="w-full ">
                <tbody>
                  <tr className="">
                    <td className="bg-white text-[#6581A4] shadow-md  text-center">
                      #
                    </td>
                    <td className="p-4 bg-white text-[#6581A4] shadow-md  text-center">
                      Name
                    </td>
                    <td className="p-4 bg-white text-[#6581A4] shadow-md  text-center">
                      popularity
                    </td>
                    <td className="p-4 bg-white  text-[#6581A4] shadow-md  text-center">
                      Sales
                    </td>
                  </tr>
                  <tr className="border-none">
                    <td className="p-4 bg-white shadow-md  text-center">01</td>
                    <td className="p-4 bg-white shadow-md text-sm   text-center">
                      Apple Smartwatches
                    </td>
                    <td className="px-4 text-center">
                      <p className="w-20 h-2 bg-gradient-to-r from-[#0069CC] to-[#99CEFF] "></p>
                    </td>
                    <td className="p-4  text-center">
                      <div className="rounded-full bg-red-100 border-2 border-red-800 w-14 h-10 p-2">
                        43%
                      </div>
                    </td>
                  </tr>
                  <tr className="border-none">
                    <td className="p-4 bg-white shadow-md  text-center">02</td>
                    <td className="p-4 bg-white shadow-md  text-sm  text-center">
                      Bathroom Essentials
                    </td>
                    <td className="px-4 text-center">
                      <p className="w-20 h-2 bg-gradient-to-r from-[#0069CC] to-[#99CEFF] "></p>
                    </td>
                    <td className="p-4  text-center">
                      <div className="rounded-full bg-red-100 border-2 border-red-800 w-14 h-10 p-2">
                        43%
                      </div>
                    </td>
                  </tr>
                  <tr className="border-none">
                    <td className="p-4 bg-white shadow-md rounded-lg text-center">
                      03
                    </td>
                    <td className="p-4 bg-white shadow-md text-sm  rounded-lg text-center">
                      Disney Princess Pink Bag 18'
                    </td>
                    <td className="px-4 text-center">
                      <p className="w-20 h-2 bg-gradient-to-r from-[#0069CC] to-[#99CEFF] "></p>
                    </td>
                    <td className="p-4  text-center">
                      <div className="rounded-full bg-red-100 border-2 border-red-800 w-14 h-10 p-2">
                        43%
                      </div>
                    </td>
                  </tr>
                  <tr className="border-none">
                    <td className="p-4 bg-white shadow-md  text-center">04</td>
                    <td className="p-4 bg-white shadow-md     text-sm text-center">
                      Home Decor Range
                    </td>
                    <td className="px-4 text-center">
                      <p className="w-20 h-2 bg-gradient-to-r from-[#0069CC] to-[#99CEFF] "></p>
                    </td>
                    <td className="p-4  text-center">
                      <div className="rounded-full bg-red-100 border-2 border-red-800 w-14 h-10 p-2">
                        43%
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white p-4 rounded-lg shadow  mb-5">
              <p className="font-bold mb-5">Sales Mapping by Country</p>
              <img
                className="max-w-max max-h-auto mt-10"
                src="src\assets\world 1.png"
                alt=""
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow font-bold">
              Volume vs Service Level
              <ul className=" flex gap-10 m-5">
                <li>
                  <img src="src\assets\Group 11.png" alt="" />
                </li>
                <li>
                  <img src="src\assets\Group 11.png" alt="" />
                </li>
                <li>
                  <img src="src\assets\Group 11.png" alt="" />
                </li>
                <li>
                  <img src="src\assets\Group 11.png" alt="" />
                </li>
                <li>
                  <img src="src\assets\Group 11.png" alt="" />
                </li>
                <li>
                  <img src="src\assets\Group 11.png" alt="" />
                </li>
              </ul>
              <div>
                <img src="src\assets\Group 1000002754.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold">User Management</h2>
          <p className="mt-4">Manage user accounts, roles, and settings.</p>
        </div>
      )}
    </div>
  );
};

export default Content;
