import { useEffect, useState } from "react";

const useMountTransition = (isMounted, setIsMounted) => {
    const [isInTransit, setIsInTransit] = useState(false);

    useEffect(() => {
        // console.log("useEffect");
        let timeoutId;
        if (!isMounted && !isInTransit) {
            setIsInTransit(true);
        } else if (!isMounted && isInTransit) {
            timeoutId = setTimeout(() => {
                setIsMounted(true);
            }, 1000);
        }
        else if(isMounted && isInTransit){
            setIsInTransit(false);
        }
        else{
            // setPageNo(pageNo === 0 ? n-1 : pageNo - 1);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isInTransit, isMounted]);
    return isInTransit;
}

export default useMountTransition;