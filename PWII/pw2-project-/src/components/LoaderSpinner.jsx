const LoaderSpinner = () => {
    return (
        <div className="absolute w-full top-1/2 flex justify-center items-center">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default LoaderSpinner;
