import { useState } from "react";


const useCheckbox = (index: number) => {

    const [value, setValue] = useState(index)

    return {
        value,
        onChange: (e: any) => {
            setValue(e.target.value)
        }
    }
}

export default useCheckbox;
