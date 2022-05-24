import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    // nó sẽ warning:React Hook useEffect has a missing dependency "delay" do sự thay đổi của delay có thể cần re-render
    // ta có thể ném nó vào [dep] ; nhưng trong App này ta chỉ dùng 1 giá trị "delay"
    // nên ta có thể quick fix nó
    return debouncedValue;
}

export default useDebounce;
