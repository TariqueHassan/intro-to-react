import React, { useState } from 'react'

export default function HoCExample(Original) {

    function NewComponent() {
        const [value, setValue] = useState(0);
        return <Original value={value} increment={()=>setValue(value+1)} />
    }
    return NewComponent
}
