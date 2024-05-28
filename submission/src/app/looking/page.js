import Navbar from "../component/navbar";
export default function Looking() {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
                    
                    <form >
                    <div className="mb-4">
                        <label  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Range(miles)</label>
                        <input type="number" id="range" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"  required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date</label>
                        <input type="date" id="date" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" min={new Date().toISOString().split("T")[0]} required/>
                  
                    </div>
                    <div className="flex items-center justify-between mb-4">
            
                        <a href="/login"
                        className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Have An Account?</a>
                    </div>
                    <button onClick="alert('hello')" type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8A4FFF] hover:bg-[#663eb6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <a href="/map" className="nav-link">Find Spot</a>
                    </button>
                    </form>
                </div>
            </div>
        </div>
        );
}