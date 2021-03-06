export default function Button({ className, onClick, children, loading, disabled }) {
    return (
        <>
            <button
                type="button"
                onClick={disabled ? () => {} : onClick}
                className={`text-black whitespace-nowrap relative bg-win-gray button-emboss inline-block w-auto px-2 py-2 h-full text-xs ${className} ${disabled && 'opacity-50 pointer-events-none'} `}
            >
                <div className="flex flex-row items-center">
                    {children}
                    {/* {loading && <LoadingIndicator />} */}
                </div>
            </button>
        </>
    )
}
