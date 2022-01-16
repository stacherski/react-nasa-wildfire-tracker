const BusyLoading = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-black opacity-50">
            <div className="animate-bounce rounded p-5 width-xs height-xs bg-slate-200 shadow-lg shadow-black">
                Fetching wildfires data...
            </div>
        </div>
    )
}

export default BusyLoading
